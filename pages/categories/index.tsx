import Image from "next/image";
import Link from "next/link";
import { Document as PrismicDoc } from "prismic-javascript/types/documents";
import { Client } from "../../prismic-configuration";
import Sidebar from "../../components/Sidebar";

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
  console.log(categories);
  return (
    <div className="categories">
      <div className="gridWithSidebar">
        <div className="categories-inner">
          <h2 className="categories__title">By Course: </h2>
          <ul className="grid3">
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
                    href={`categories/courses/${encodeURIComponent(
                      category.primary.custom_slug
                    )}`}
                  >
                    <a className="categories__recipeTitle">
                      {category.primary.category_name[0].text}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Categories;
