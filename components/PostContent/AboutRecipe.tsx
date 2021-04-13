import { Date as PrismicDate, RichText } from "prismic-reactjs";
import { Document as PrismicDoc } from "prismic-javascript/types/documents";

export interface AboutRecipeProps {
  post: PrismicDoc;
}

const AboutRecipe: React.FC<AboutRecipeProps> = ({ post }) => {
  const aboutData = post.data.about_recipe;
  console.log(aboutData.length);
  return (
    <>
      {aboutData.length ? (
        <div className="aboutRecipe">
          <h3>Apie receptą: </h3>
          <RichText render={aboutData} />
        </div>
      ) : null}
    </>
  );
};

export default AboutRecipe;
