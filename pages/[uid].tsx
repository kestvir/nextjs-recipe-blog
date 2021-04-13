import { useRouter } from "next/router";
import { Client } from "../prismic-configuration";
import { Document as PrismicDoc } from "prismic-javascript/types/documents";
import PostContent from "../components/PostContent";
import { StyledPost } from "../styled/pages/Post";

export interface Post {
  post: PrismicDoc;
}

export async function getStaticProps({ params }) {
  const post = await Client().getByUID("blog_post", params.uid, {});

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

const Post: React.FC<Post> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <section>
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <StyledPost>
      <PostContent post={post} />
    </StyledPost>
  );
};

export default Post;
