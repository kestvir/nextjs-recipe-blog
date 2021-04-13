import { useEffect } from "react";
import { Document as PrismicDoc } from "prismic-javascript/types/documents";
import { Date as PrismicDate } from "prismic-reactjs";
import Instructions from "./Instructions";
import Ingredients from "./Ingredients";
import Image from "next/image";
import AboutRecipe from "./AboutRecipe";

export interface PostContentProps {
  post: PrismicDoc;
}

const PostContent: React.FC<PostContentProps> = ({ post }) => {
  useEffect(() => {
    function loadComments() {
      (window as any).disqus_config = function () {
        this.page.url = window.location.href;
        this.page.identifier = post.slugs[0];
      };

      const script = document.createElement("script");
      script.src = "https://ritos-virtuveje.disqus.com/embed.js";
      script.setAttribute("data-timestamp", Date.now().toString());

      document.body.appendChild(script);
    }

    loadComments();
  }, []);

  const publishing_date = PrismicDate(post.first_publication_date);
  const dateOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  } as const;

  return (
    <div className="post-content">
      <h1>{post.data.title[0].text}</h1>
      <p className="publishedOn">
        {publishing_date.toLocaleDateString("lt-LT", dateOptions)}
      </p>

      <Image src={post.data.dish_image.url} width={740} height={740} />

      <AboutRecipe post={post} />

      <Ingredients post={post} />

      <Instructions post={post} />

      <div id="disqus_thread" />
    </div>
  );
};

export default PostContent;
