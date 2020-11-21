import Image from "next/image";
import Link from "next/link";
import Prismic from "prismic-javascript";
import ApiSearchResponse from "prismic-javascript/types/ApiSearchResponse";
import { Client } from "../../../prismic-configuration";
import Sidebar from "../../../components/Sidebar";
import RecipeListItem from "../../../components/RecipeListItem";

export async function getStaticProps({ params }) {
  const client = Client();
  const capitalizedTag =
    params.course.charAt(0).toUpperCase() + params.course.slice(1);
  const postsData = await client.query(
    Prismic.Predicates.at("document.tags", [capitalizedTag])
  );
  return {
    props: {
      postsData,
      capitalizedTag,
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
  postsData: ApiSearchResponse;
  capitalizedTag: string;
}

const CourseRecipes: React.FC<CourseRecipesProps> = ({
  postsData,
  capitalizedTag,
}) => {
  return (
    <div className="course">
      <div className="gridWithSidebar">
        <div className="course-inner">
          <h2 className="course__title">{capitalizedTag} dishes: </h2>
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
