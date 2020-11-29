import Prismic from "prismic-javascript";
import { useRouter } from "next/router";
import { Client } from "../prismic-configuration";
import ApiSearchResponse from "prismic-javascript/types/ApiSearchResponse";
import RecipeListItem from "../components/RecipeListItem";
import Pagination from "../components/Pagination";
import { Grid3 } from "../styled/layout/Grid";
import { StyledRecipeListSection } from "../styled/layout/RecipeListSection";
import { StyledRecipeResultsTitle } from "../styled/components/RecipeResultsTitle";
import Searchbar from "../components/SearchBar";
import { StyledNotFound } from "../styled/components/NotFound";

export interface SearchResults {
  postsData: ApiSearchResponse;
  searchValue: string;
}

export async function getServerSideProps({ query }) {
  const client = Client();
  const searchValue = query.s;
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

  return (
    <StyledRecipeListSection>
      <StyledRecipeResultsTitle>
        Jūs ieškojote: {searchValue}
      </StyledRecipeResultsTitle>

      {postsData.results.length === 0 ? (
        <StyledNotFound>
          <p>
            Deja, nieko panašaus rasti nepavyko. Pabandykite įvesti kitokį
            paieškos raktažodį.
          </p>
          <Searchbar />
        </StyledNotFound>
      ) : (
        <Grid3>
          {postsData.results.map((post) => {
            return <RecipeListItem key={post.uid} post={post} />;
          })}
        </Grid3>
      )}

      <Pagination postsData={postsData} searchValue={searchValue} />
    </StyledRecipeListSection>
  );
};

export default SearchResults;
