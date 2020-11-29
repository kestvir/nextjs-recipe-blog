import { Date as PrismicDate, RichText } from "prismic-reactjs";
import { Document as PrismicDoc } from "prismic-javascript/types/documents";

export interface AboutRecipeProps {
  post: PrismicDoc;
}

const AboutRecipe: React.FC<AboutRecipeProps> = ({ post }) => {
  return (
    <div className="aboutRecipe">
      <h3>Apie receptą: </h3>
      <RichText render={post.data.about_recipe} />
    </div>
  );
};

export default AboutRecipe;
