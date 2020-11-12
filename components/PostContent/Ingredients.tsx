import { Document as PrismicDoc } from "prismic-javascript/types/documents";
import { RichText } from "prismic-reactjs";

export interface IngredientsProps {
    post: PrismicDoc;
}

const Ingredients: React.FC<IngredientsProps> = ({ post }) => {
    return (
        <div className="ingredients">
            <h3>Ingredients: </h3>
            {post.data.body.map((ingredientData, i) => {
                console.log(ingredientData);
                return (
                    <div className="ingredients__part" key={ingredientData.primary.recipe_part[0].text}>
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
