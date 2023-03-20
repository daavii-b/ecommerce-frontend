import React from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from 'react-icons/fa';
import { range } from 'lodash';
import { PaginationContainer, PaginationList } from './styled';

export default function Pagination({ qtyPages, count }) {
  // Make pagination range return an array with the range of page.

  const [params, setParams] = useSearchParams();
  const currentPage = Number(params.get('page')) || 1;

  const totalPages = Math.ceil(count / 20);
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

  const {
    pagination,
    firstPageOutRange,
    lastPageOutRange,
    hasNext,
    hasPrevious,
  } = makePaginationRange();

  return hasOtherPages ? (
    <div>
      <PaginationContainer className="pagination-navbar">
        <PaginationList className="pagination-list">
          {firstPageOutRange ? (
            <li className="pagination-control first-page">
              <button
                aria-label="Go to first page"
                type="button"
                onClick={() => {
                  params.set('page', 1);
                  setParams(params);
                }}
              >
                <FaAngleDoubleLeft />
              </button>
            </li>
          ) : (
            ''
          )}
          {hasPrevious ? (
            <li className="pagination-control previous-page">
              <button
                aria-label="Go to previous page"
                type="button"
                onClick={() => {
                  params.set('page', currentPage - 1);
                  setParams(params);
                }}
              >
                <FaAngleLeft />
              </button>
            </li>
          ) : (
            ''
          )}
          {pagination.map((page) => (
            <li
              className={
                currentPage === page
                  ? 'pagination-item active'
                  : 'pagination-item'
              }
              key={page}
            >
              <button
                aria-current={currentPage === page ? 'page' : 'false'}
                aria-label={`Go to page ${page}`}
                type="button"
                onClick={() => {
                  params.set('page', page);
                  setParams(params);
                }}
              >
                {page}
              </button>
            </li>
          ))}
          {hasNext ? (
            <li className="pagination-control next-page">
              <button
                aria-label="Go to next page"
                type="button"
                onClick={() => {
                  params.set('page', currentPage + 1);
                  setParams(params);
                }}
              >
                <FaAngleRight />
              </button>
            </li>
          ) : (
            ''
          )}
          {lastPageOutRange ? (
            <li className="pagination-control last-page">
              <button
                aria-label="Go to last page"
                type="button"
                onClick={() => {
                  params.set('page', totalPages);
                  setParams(params);
                }}
              >
                <FaAngleDoubleRight />
              </button>
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
  qtyPages: Number(process.env.REACT_APP_QTY_PAGINATIONS_PAGES),
  count: 0,
};

Pagination.propTypes = {
  qtyPages: PropTypes.number,
  count: PropTypes.number,
};
