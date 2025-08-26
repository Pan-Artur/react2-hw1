import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { StyledPagination } from "./Pagination.styled";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <StyledPagination>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="past"
      >
        <IoIosArrowBack />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="next"
      >
        <IoIosArrowForward />
      </button>
    </StyledPagination>
  );
};
