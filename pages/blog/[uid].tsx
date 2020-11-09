import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.scss";
import { useState } from "react";
import Image from "next/image";
import { Client } from "../../prismic-configuration";
import { queryRepeatableDocuments } from "../../utils/queries";
import { Document as PrismicDocs } from "prismic-javascript/types/documents";
import { Date as PrismicDate, RichText } from "prismic-reactjs";

export async function getStaticProps({ params }) {
  console.log(params);
  const post = (await Client().getByUID("blog_post", params.uid, {})) || {};
  console.log(post);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments(
    (doc) => doc.type === "blog_post"
  );
  return {
    paths: documents.map((doc) => `/blog/${doc.uid}`),
    fallback: true,
  };
}

const Post: React.FC<{ post: PrismicDocs }> = ({ post }) => {
  console.log(post);

  const [enableLoadComments, setEnableLoadComments] = useState<boolean>(true);

  const router = useRouter();

  const publishing_date = PrismicDate(post.first_publication_date);

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  function loadComments() {
    setEnableLoadComments(false);
    (window as any).disqus_config = function () {
      this.page.url = window.location.href;
      this.page.identifier = post.slugs[0];
    };

    const script = document.createElement("script");
    script.src = "https://ghostcmsrecipeblog.disqus.com/embed.js"; // change this!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    script.setAttribute("data-timestamp", Date.now().toString());

    document.body.appendChild(script);
  }

  return (
    <div className={styles.container}>
      <p className={styles.goback}>
        <Link href="/">
          <a>Go back</a>
        </Link>
      </p>
      <h1>{post.data.title[0].text}</h1>
      <Image
        src={post.data.dish_image.url}
        width={post.data.dish_image.dimensions.width}
        height={post.data.dish_image.dimensions.height}
      />
      <p>Publshed on: {publishing_date.toDateString()}</p>
      <h3>Ingredients: </h3>
      {post.data.body.map((ingredientData) => {
        return (
          <div>
            <h4>{ingredientData.primary.recipe_part[0].text}:</h4>
            <RichText
              render={ingredientData.primary.ingredient_list_for_part}
            />
          </div>
        );
      })}
      <h3>Instructions: </h3>
      <RichText render={post.data.instructions} />

      {enableLoadComments && (
        <p className={styles.goback} onClick={loadComments}>
          Load Comments
        </p>
      )}

      <div id="disqus_thread"></div>
    </div>
  );
};

export default Post;
