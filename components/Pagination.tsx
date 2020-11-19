import Link from "next/link";
import { useRouter } from "next/router";
import ApiSearchResponse from "prismic-javascript/types/ApiSearchResponse";
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface PaginationProps {
  postsData: ApiSearchResponse;
  searchValue: string;
}

const Pagination: React.FC<PaginationProps> = ({ postsData, searchValue }) => {
  const router = useRouter();
  console.log(postsData.page);
  console.log(postsData.total_pages);

  return (
    <div className="pagination">
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
    </div>
  );
};

export default Pagination;
