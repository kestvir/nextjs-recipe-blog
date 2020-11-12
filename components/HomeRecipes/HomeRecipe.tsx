import { Document as PrismicDoc } from "prismic-javascript/types/documents";
import Image from "next/image";
import Link from "next/link";

export interface HomeRecipesProps {
    post: PrismicDoc;
}

const HomeRecipe: React.FC<HomeRecipesProps> = ({ post }) => {
    return (
        <li key={post.uid}>
            <Image
                src={post.data.dish_image.url}
                width={350}
                height={350}
                quality={100}
            />
            <Link href={`/blog/${encodeURIComponent(post.uid)}`}>
                <a className="home__recipeTitle">{post.data.title[0].text}</a>
            </Link>
        </li>
    );
};

export default HomeRecipe;
