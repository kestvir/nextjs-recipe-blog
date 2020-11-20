import { Client } from "../prismic-configuration";
import Prismic from "prismic-javascript";
import ApiSearchResponse from "prismic-javascript/types/ApiSearchResponse";
import Sidebar from "../components/Sidebar";
import HomeRecipes from "../components/HomeRecipes";

export interface HomeProps {
  postsData: ApiSearchResponse;
}

export const getStaticProps = async (context) => {
  const client = Client();

  const postsData = await client.query(
    Prismic.Predicates.at("document.type", "blog_post"),
    {
      orderings: "[my.blog_post.first_publication_date desc]",
      pageSize: 10,
    }
  );

  return {
    revalidate: 10,
    props: { postsData },
  };
};

const Home: React.FC<HomeProps> = ({ postsData }) => {
  return (
    <div className="home">
      <div className="gridWithSidebar">
        <HomeRecipes postsData={postsData} />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
