import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Client } from "../prismic-configuration";
import Prismic from "prismic-javascript";
import ApiSearchResponse from "prismic-javascript/types/ApiSearchResponse";

export const getStaticProps = async (context) => {
  const client = Client();

  const postsData = await client.query(
    Prismic.Predicates.at("document.type", "blog_post"),
    { orderings: "[my.blog_post.date desc]" }
  );

  console.log(postsData);
  return {
    revalidate: 10,
    props: { postsData },
  };
};

const Home: React.FC<{ postsData: ApiSearchResponse }> = ({ postsData }) => {
  console.log(postsData);

  return (
    <div className={styles.container}>
      <h1>Hello to my recipe blog</h1>
      <ul>
        {postsData.results.map((post) => {
          return (
            <li className={styles.postitem} key={post.uid}>
              <Link href={`/blog/${encodeURIComponent(post.uid)}`}>
                <a>{post.data.title[0].text}</a>
              </Link>
              <Image
                src={post.data.dish_image.url}
                width={post.data.dish_image.dimensions.width}
                height={post.data.dish_image.dimensions.height}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
