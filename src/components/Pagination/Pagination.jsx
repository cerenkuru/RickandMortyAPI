import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import './Pagination.css'; 

const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  useEffect(() => {
    const updateDimensions = () => {
    };

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };

  return (
    <div className="pagination-wrapper">
    <ReactPaginate
      forcePage={pageNumber > 0 ? pageNumber - 1 : 0}
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
      pageCount={info?.pages > 0 ? info.pages : 1}
      onPageChange={pageChange}
      className="pagination justify-content-center my-4 gap-4"
      nextLabel="Next"
      previousLabel="Prev"
      previousClassName="fs-5 prev"
      nextClassName="fs-5 next"
      activeClassName="active"
      pageClassName="page-item"
      pageLinkClassName="page-link"
    />
  </div>
  )
};

export default Pagination;
