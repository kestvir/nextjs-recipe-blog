import Link from "next/link";
import { useRouter } from "next/router";
import { Client } from "../../prismic-configuration";
import { Document as PrismicDoc } from "prismic-javascript/types/documents";
import PostContent from "../../components/PostContent";
import Sidebar from "../../components/Sidebar";

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
    revalidate: 10,

    props: {
      post,
    },
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
    return <h1>Loading...</h1>;
  }

  return (
    <div className="post">
      <p className="goback">
        <Link href="/">
          <a>Go back</a>
        </Link>
      </p>
      <div className="gridWithSidebar">
        <PostContent post={post} />
        <Sidebar />
      </div>
    </div>
  );
};

export default Post;
