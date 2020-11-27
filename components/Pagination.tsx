import Link from "next/link";
import ApiSearchResponse from "prismic-javascript/types/ApiSearchResponse";
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StyledPagination from "../styled/components/Pagination";

export interface PaginationProps {
  postsData: ApiSearchResponse;
  searchValue: string;
}

const Pagination: React.FC<PaginationProps> = ({ postsData, searchValue }) => {
  return (
    <StyledPagination>
      <div className="pagination__prev">
        {postsData.page <= 1 ? null : (
          <Link href={`/search?page=${postsData.page - 1}&v=${searchValue}`}>
            <a>
              <FontAwesomeIcon icon={faLongArrowAltLeft} />
              <span>Previous</span>
            </a>
          </Link>
        )}
      </div>

      {postsData.page >= postsData.total_pages ? null : (
        <div className="pagination__next">
          <Link href={`/search?page=${postsData.page + 1}&v=${searchValue}`}>
            <a>
              <span>Next</span>
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </a>
          </Link>
        </div>
      )}
    </StyledPagination>
  );
};

export default Pagination;
