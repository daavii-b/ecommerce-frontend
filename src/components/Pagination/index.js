import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from 'react-icons/fa';
import { range } from 'lodash';
import { PaginationContainer, PaginationList } from './styled';

export default function Pagination({
  currentPage,
  qtyPages,
  totalProducts,
  searchTerm,
  categoryFilter,
}) {
  // Make pagination range return an array with the range of page.
  const totalPages = Math.ceil(totalProducts / 12);
  const hasOtherPages = totalPages > 1;

  function makePaginationRange() {
    const middleRange = Math.ceil(
      (qtyPages > totalPages ? totalPages : qtyPages) / 2
    );

    let startRange = currentPage - middleRange;
    let stopRange = currentPage + middleRange;

    if (startRange <= 0) {
      stopRange += Math.abs(startRange);
      startRange = 1;
    } else if (stopRange >= totalPages) {
      startRange -= Math.abs(stopRange - totalPages) - 2;
      stopRange = totalPages + 1;
    } else {
      startRange += 1;
    }
    const pagination = range(startRange, stopRange);

    return {
      pagination,
      stopRange,
      firstPageOutRange: qtyPages < totalPages && currentPage > middleRange,
      lastPageOutRange: stopRange < totalPages,
      hasNext: currentPage < totalPages,
      hasPrevious: currentPage > 1,
    };
  }

  const [nextPage, setNextPage] = useState(currentPage + 1);
  const [prevPage, setPrevPage] = useState(currentPage - 1);

  const {
    pagination,
    firstPageOutRange,
    lastPageOutRange,
    hasNext,
    hasPrevious,
  } = makePaginationRange();

  function handleNextPageClick() {
    if (currentPage < totalPages) setNextPage(currentPage + 1);
  }

  function handlePrevPageClick() {
    if (currentPage > 1) setPrevPage(currentPage - 1);
  }

  return hasOtherPages ? (
    <div>
      <PaginationContainer className="pagination-navbar">
        <PaginationList className="pagination-list">
          {firstPageOutRange ? (
            <li
              aria-label="Go to first page"
              className="pagination-control first-page"
            >
              <a
                href={`?search=${searchTerm}&category=${categoryFilter}&page=${1}`}
              >
                <FaAngleDoubleLeft />
              </a>
            </li>
          ) : (
            ''
          )}
          {hasPrevious ? (
            <li
              aria-label="Go to previous page"
              className="pagination-control previous-page"
            >
              <a
                onClick={handlePrevPageClick}
                href={`?search=${searchTerm}&category=${categoryFilter}&page=${prevPage}`}
              >
                <FaAngleLeft />
              </a>
            </li>
          ) : (
            ''
          )}
          {pagination.map((page) => (
            <li
              aria-label={`Go to page ${page}`}
              aria-current={currentPage === page ? 'page' : 'false'}
              className={
                currentPage === page
                  ? 'pagination-item active'
                  : 'pagination-item'
              }
              key={page}
            >
              <a
                className="page-link"
                href={`?search=${searchTerm}&category=${categoryFilter}&page=${page}`}
              >
                {page}
              </a>
            </li>
          ))}
          {hasNext ? (
            <li
              aria-label="Go to next page"
              className="pagination-control next-page"
            >
              <a
                onClick={handleNextPageClick}
                href={`?search=${searchTerm}&category=${categoryFilter}&page=${nextPage}`}
              >
                <FaAngleRight />
              </a>
            </li>
          ) : (
            ''
          )}
          {lastPageOutRange ? (
            <li
              aria-label="Go to last page"
              className="pagination-control last-page"
            >
              <a
                href={`?search=${searchTerm}&category=${categoryFilter}&page=${totalPages}`}
              >
                <FaAngleDoubleRight />
              </a>
            </li>
          ) : (
            ''
          )}
        </PaginationList>
      </PaginationContainer>
    </div>
  ) : (
    ''
  );
}

Pagination.defaultProps = {
  currentPage: 1,
  qtyPages: Number(process.env.REACT_APP_QTY_PAGINATIONS_PAGES),
  totalProducts: 0,
  searchTerm: '',
  categoryFilter: '',
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  qtyPages: PropTypes.number,
  totalProducts: PropTypes.number,
  searchTerm: PropTypes.string,
  categoryFilter: PropTypes.string,
};
