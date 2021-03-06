import { Document as PrismicDoc } from "prismic-javascript/types/documents";
import { RichText } from "prismic-reactjs";

export interface IngredientsProps {
  post: PrismicDoc;
}

const Ingredients: React.FC<IngredientsProps> = ({ post }) => {
  return (
    <div className="ingredients">
      <h3>Ingredientai: </h3>
      {post.data.body.map((ingredientData) => {
        return (
          <div
            className="part"
            key={ingredientData.primary.recipe_part[0].text}
          >
            <h4>{ingredientData.primary.recipe_part[0].text}:</h4>
            <RichText
              render={ingredientData.primary.ingredient_list_for_part}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Ingredients;
