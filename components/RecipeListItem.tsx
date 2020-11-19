import { Document as PrismicDoc } from "prismic-javascript/types/documents";
import Image from "next/image";
import Link from "next/link";

export interface RecipeListItemProps {
  post: PrismicDoc;
  linkClassName: string;
  customSlug?: string;
}

const RecipeListItem: React.FC<RecipeListItemProps> = ({
  post,
  linkClassName,
  customSlug,
}) => {
  let key: string;
  post.uid ? (key = post.uid) : (key = customSlug);

  return (
    <li key={key}>
      <Image
        src={post.data.dish_image.url}
        width={post.data.dish_image.dimensions.width}
        height={post.data.dish_image.dimensions.height}
        quality={100}
      />
      <Link href={`/blog/${encodeURIComponent(key)}`}>
        <a className={linkClassName}>{post.data.title[0].text}</a>
      </Link>
    </li>
  );
};

export default RecipeListItem;
