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
  const tag = params.course;
  const postsData = await client.query(
    Prismic.Predicates.at("document.tags", [params.course]),
    {
      orderings: "[my.blog_post.first_publication_date desc]",
      pageSize: 12,
    }
  );

  if (!postsData.results.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      postsData,
      tag,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

const CourseRecipes: React.FC<CourseRecipesProps> = ({ postsData, tag }) => {
  const router = useRouter();

  let capitalizedCourse;

  if (postsData && tag) {
    capitalizedCourse = tag.charAt(0).toUpperCase() + tag.slice(1);
  }

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="course">
      <div className="gridWithSidebar">
        <div className="course-inner">
          <h2 className="course__title">{capitalizedCourse} dishes: </h2>
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
          </ul>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default CourseRecipes;
