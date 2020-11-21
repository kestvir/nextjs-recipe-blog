import Image from "next/image";
import Link from "next/link";
import Prismic from "prismic-javascript";
import { useRouter } from "next/router";
import { Client } from "../../../prismic-configuration";
import Sidebar from "../../../components/Sidebar";
import ApiSearchResponse from "prismic-javascript/types/ApiSearchResponse";
import { Document as PrismicDoc } from "prismic-javascript/types/documents";
import RecipeListItem from "../../../components/RecipeListItem";

export interface CourseRecipesProps {
  postsData: ApiSearchResponse;
  tag: string;
}

export async function getStaticProps({ params }) {
  const client = Client();
  //   params.course.charAt(0).toUpperCase() + params.course.slice(1);
  const postsData = await client.query(
    Prismic.Predicates.at("document.tags", [params.course]),
    {
      orderings: "[my.blog_post.first_publication_date desc]",
      pageSize: 12,
    }
  );
  return {
    props: {
      postsData,
    },
  };
}

export async function getStaticPaths() {
  // const documents = await queryRepeatableDocuments(
  //   (doc) => doc.type === "blog_post"
  // );
  return {
    paths: [],
    fallback: true,
  };
}

const CourseRecipes: React.FC<CourseRecipesProps> = ({ postsData }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  console.log(postsData);

  // const { data } = postsData;

  return (
    <div className="course">
      <div className="gridWithSidebar">
        <div className="course-inner">
          <h2>{postsData.page}</h2>

          {/* <h2>{postsData.data.title[0].text}</h2> */}

          {/* <h2 className="course__title">{tag} dishes: </h2>
          <ul className="grid3">
            {postsData.results.map((post) => {
              return (
                <RecipeListItem
                  key={post.uid}
                  post={post}
                  linkClassName="course__recipeTitle"
                />
              );
            })}
          </ul> */}
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default CourseRecipes;
