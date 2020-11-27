import { Client } from "../prismic-configuration";
import Prismic from "prismic-javascript";
import ApiSearchResponse from "prismic-javascript/types/ApiSearchResponse";
import HomeRecipes from "../components/HomeRecipes";
import { StyledRecipeListSection } from "../styled/layout/RecipeListSection";

export interface HomeProps {
  postsData: ApiSearchResponse;
}

export const getStaticProps = async (context) => {
  const client = Client();

  const postsData = await client.query(
    Prismic.Predicates.at("document.type", "blog_post"),
    {
      orderings: "[document.first_publication_date desc]",
      pageSize: 10,
    }
  );

  return {
    props: { postsData },
    revalidate: 1,
  };
};

const Home: React.FC<HomeProps> = ({ postsData }) => {
  return (
    <StyledRecipeListSection>
      <HomeRecipes postsData={postsData} />
    </StyledRecipeListSection>
  );
};

export default Home;
