import Prismic from "prismic-javascript";
import { useRouter } from "next/router";
import { Client } from "../../../prismic-configuration";
import ApiSearchResponse from "prismic-javascript/types/ApiSearchResponse";
import RecipeListItem from "../../../components/RecipeListItem";
import { Grid3 } from "../../../styled/layout/Grid";
import { StyledRecipeListSection } from "../../../styled/layout/RecipeListSection";
import { StyledTitle } from "../../../styled/components/Title";

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
    return (
      <section>
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <StyledRecipeListSection>
      <StyledTitle>{capitalizedCourse} dishes: </StyledTitle>
      <Grid3>
        {postsData.results.map((post) => {
          return <RecipeListItem key={post.uid} post={post} />;
        })}
      </Grid3>
    </StyledRecipeListSection>
  );
};

export default CourseRecipes;
