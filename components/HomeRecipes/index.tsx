import ApiSearchResponse from "prismic-javascript/types/ApiSearchResponse";
import RecipeListItem from "../RecipeListItem";
import { Grid2 } from "../../styled/layout/Grid";
import { StyledTitleWithBorder } from "../../styled/components/TitleWithBorder";

export interface HomeRecipesProps {
  postsData: ApiSearchResponse;
}

const HomeRecipes: React.FC<HomeRecipesProps> = ({ postsData }) => {
  return (
    <>
      <StyledTitleWithBorder>Latest recipes</StyledTitleWithBorder>
      <Grid2>
        {postsData.results.map((post) => {
          return <RecipeListItem key={post.uid} post={post} />;
        })}
      </Grid2>
    </>
  );
};

export default HomeRecipes;
