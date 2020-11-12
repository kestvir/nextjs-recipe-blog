import { useEffect } from "react";
import { Document as PrismicDoc } from "prismic-javascript/types/documents";
import { Date as PrismicDate } from "prismic-reactjs";
import Instructions from "./Instructions";
import Ingredients from "./Ingredients";
import Image from "next/image";

export interface PostContentProps {
  post: PrismicDoc;
}

const PostContent: React.SFC<PostContentProps> = ({ post }) => {
  useEffect(() => {
    function loadComments() {
      (window as any).disqus_config = function () {
        this.page.url = window.location.href;
        this.page.identifier = post.slugs[0];
      };

      const script = document.createElement("script");
      script.src = "https://ghostcmsrecipeblog.disqus.com/embed.js"; // change this!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      script.setAttribute("data-timestamp", Date.now().toString());

      document.body.appendChild(script);
    }

    loadComments();
  }, []);

  const publishing_date = PrismicDate(post.first_publication_date);

  return (
    <div className="post-content">
      <h1>{post.data.title[0].text}</h1>
      <p>Publshed on: {publishing_date.toDateString()}</p>

      <Image
        src={post.data.dish_image.url}
        width={post.data.dish_image.dimensions.width}
        height={post.data.dish_image.dimensions.height}
        quality={100}
      />

      <Ingredients post={post} />

      <Instructions post={post} />

      <div id="disqus_thread" />
    </div>
  );
};

export default PostContent;
