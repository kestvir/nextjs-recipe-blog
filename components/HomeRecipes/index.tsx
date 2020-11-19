import ApiSearchResponse from "prismic-javascript/types/ApiSearchResponse";
import RecipeListItem from "../RecipeListItem";

export interface HomeRecipesProps {
  postsData: ApiSearchResponse;
}

const HomeRecipes: React.FC<HomeRecipesProps> = ({ postsData }) => {
  return (
    <div>
      <h2 className="home__title">Latest recipes</h2>
      <ul className="grid2">
        {postsData.results.map((post) => {
          return (
            <RecipeListItem
              key={post.uid}
              post={post}
              linkClassName="home__recipeTitle"
            />
          );
        })}
      </ul>
    </div>
  );
};

export default HomeRecipes;
