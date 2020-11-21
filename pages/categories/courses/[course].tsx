import Image from "next/image";
import Link from "next/link";
import Prismic from "prismic-javascript";
import { useRouter } from "next/router";
import { Client } from "../../../prismic-configuration";
import Sidebar from "../../../components/Sidebar";
import { Document as PrismicDoc } from "prismic-javascript/types/documents";
import RecipeListItem from "../../../components/RecipeListItem";

export async function getStaticProps({ params }) {
  const client = Client();
  //   params.course.charAt(0).toUpperCase() + params.course.slice(1);
  const postsData =
    (await Client().getByUID("blog_post", params.uid, {})) || {};
  return {
    props: {
      postsData,
    },
  };

  const tag = params.course;

  return {
    props: {
      postsData,
      tag,
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

export interface CourseRecipesProps {
  postsData: PrismicDoc;
  tag: string;
}

const CourseRecipes: React.FC<CourseRecipesProps> = ({ postsData }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  // const { data } = postsData;

  return (
    <div className="course">
      <div className="gridWithSidebar">
        <div className="course-inner">
          <h2>{postsData.data.title[0].text}</h2>

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
