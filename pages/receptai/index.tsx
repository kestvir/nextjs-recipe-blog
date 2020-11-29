import Image from "next/image";
import Link from "next/link";
import { Document as PrismicDoc } from "prismic-javascript/types/documents";
import { Client } from "../../prismic-configuration";
import { Grid3 } from "../../styled/layout/Grid";
import { StyledLink } from "../../styled/components/Link";
import { StyledRecipeListSection } from "../../styled/layout/RecipeListSection";
import { StyledTitle } from "../../styled/components/Title";

export async function getStaticProps({ params }) {
  const categories = await Client().getSingle("categories", {});
  return {
    props: {
      categories,
    },
  };
}

export interface CategoriesProps {
  categories: PrismicDoc;
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  return (
    <StyledRecipeListSection>
      <StyledTitle>Pagal tipą: </StyledTitle>
      <Grid3>
        {categories.data.body.map((category) => {
          return (
            <li key={category.primary.custom_slug}>
              <Image
                src={category.primary.course_img.url}
                width={category.primary.course_img.dimensions.width}
                height={category.primary.course_img.dimensions.height}
                quality={100}
              />
              <Link
                href={`receptai/pagal-tipa/${encodeURIComponent(
                  category.primary.custom_slug
                )}`}
              >
                <StyledLink>
                  {category.primary.category_name[0].text}
                </StyledLink>
              </Link>
            </li>
          );
        })}
      </Grid3>
    </StyledRecipeListSection>
  );
};

export default Categories;
