import { Document as PrismicDoc } from "prismic-javascript/types/documents";
import Image from "next/image";
import Link from "next/link";
import { StyledLink } from "../styled/components/Link";

export interface RecipeListItemProps {
  post: PrismicDoc;
  customSlug?: string;
}

const RecipeListItem: React.FC<RecipeListItemProps> = ({
  post,
  customSlug,
}) => {
  let key: string;
  post.uid ? (key = post.uid) : (key = customSlug);

  return (
    <li key={key}>
      <Image src={post.data.dish_image.url} width={520} height={520} />
      <Link href={`/${encodeURIComponent(key)}`}>
        <StyledLink>{post.data.title[0].text}</StyledLink>
      </Link>
    </li>
  );
};

export default RecipeListItem;
