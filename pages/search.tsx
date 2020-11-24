import Link from "next/link";
import Prismic from "prismic-javascript";
import { useRouter } from "next/router";
import { Client } from "../prismic-configuration";
import ApiSearchResponse from "prismic-javascript/types/ApiSearchResponse";
import Sidebar from "../components/Sidebar";
import RecipeListItem from "../components/RecipeListItem";
import Pagination from "../components/Pagination";

export interface SearchResults {
  postsData: ApiSearchResponse;
  searchValue: string;
}

export async function getServerSideProps({ query }) {
  const client = Client();
  const searchValue = query.v;
  const currentPage = query.page === 1 ? 1 : query.page;
  try {
    const postsData = await client.query(
      [
        Prismic.Predicates.at("document.type", "blog_post"),
        Prismic.Predicates.fulltext("document", searchValue),
      ],
      {
        orderings: "[document.first_publication_date desc]",
        pageSize: 12,
        page: currentPage,
      }
    );
    return {
      props: { postsData, searchValue },
    };
  } catch (err) {
    console.error(err);
  }
}

const SearchResults: React.FC<SearchResults> = ({ postsData, searchValue }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  console.log(postsData);

  return (
    <div className="search">
      <div className="gridWithSidebar">
        <div className="search__inner">
          <h3 className="search__result">Search results for: {searchValue}</h3>
          <ul className="grid3">
            {postsData.results.map((post) => {
              return (
                <RecipeListItem
                  key={post.uid}
                  post={post}
                  linkClassName="search__recipeTitle"
                />
              );
            })}
          </ul>
          <Pagination postsData={postsData} searchValue={searchValue} />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default SearchResults;
