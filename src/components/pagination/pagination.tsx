import Styled from "./pagination.styled";

interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  pageSelected: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  pageSelected,
}: IPaginationProps) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <Styled.Pages>
      {pageNumbers.map((number) => (
        <Styled.Page
          className={number === currentPage ? "active" : ""}
          key={number}
          onClick={() => pageSelected(number)}
        >
          {number}
        </Styled.Page>
      ))}
    </Styled.Pages>
  );
};

export default Pagination;
