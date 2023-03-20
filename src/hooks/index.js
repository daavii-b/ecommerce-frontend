import { useEffect, useState, useId, useLayoutEffect } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../services/axios';
import * as filtersActions from '../store/modules/filters/actions';

export function useAxios(url) {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [qs] = useSearchParams();

  useEffect(() => {
    axios({
      method: 'GET',
      url,
      signal: AbortSignal.timeout(5000),
      params: {
        page: qs.get('page'),
        search: qs.get('search'),
        category: qs.get('category'),
        min_price: qs.get('min_price'),
        max_price: qs.get('max_price'),
        min_promotional_price: qs.get('min_promotional_price'),
        max_promotional_price: qs.get('max_promotional_price'),
      },
    })
      .then((response) => {
        const { results, count: countData } = response.data;

        setData(results);
        setCount(countData);
      })
      .catch((error) => console.error(error));
  }, [qs, url]);

  return { data, count };
}

// ==============================================================

export function useAxiosGetDetails(url) {
  const { productSlug } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios({
      method: 'GET',
      url: url.concat(`${productSlug}/`),
      signal: AbortSignal.timeout(5000),
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error(error));
  }, [productSlug, url]);

  return { data };
}

// ==============================================================

export function useWindowResize() {
  const [risizing, setRisizing] = useState(false);
  useLayoutEffect(() => {
    const handleFilterInteration = () => setRisizing(true);
    window.addEventListener('resize', handleFilterInteration);
    return () => {
      window.removeEventListener('resize', handleFilterInteration);
      setRisizing(false);
    };
  });

  return risizing;
}

// ==============================================================

export function useGetFilters(filters, currentFilter) {
  const [filterData, setFilterData] = useState([]);
  const { data: categories } = useAxios('categories/');

  useEffect(() => {
    switch (currentFilter) {
      case filters.category: {
        setFilterData(categories);
        break;
      }
      case filters.price: {
        setFilterData([5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000]);
        break;
      }
      case filters.promotional: {
        setFilterData([5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000]);
        break;
      }
      case filters.range: {
        setFilterData([5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000]);

        break;
      }
      default:
        break;
    }
    return undefined;
  }, [categories, currentFilter, filters]);

  return { filterData };
}

// ==============================================================

export function useFilter(
  { current: refFilterList },
  { current: refFilteringTypeForm },
  risizing
) {
  const dispatch = useDispatch();
  const { filters, hasFilters } = useSelector((state) => state.filtersReducer);

  const [elementWidth, setElementWidth] = useState(0);
  const [modalPosition, setModalPosition] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const [currentFilter, setCurrentFilter] = useState('');
  const [, setParams] = useSearchParams();

  const filterId = useId();
  const filtersTypes = {
    category: `${filterId}-category`,
    price: `${filterId}-price`,
    promotional: `${filterId}-promotiona-price`,
    range: `${filterId}-range`,
  };

  const filteringType = new FormData(refFilteringTypeForm || undefined);

  useEffect(() => {
    setShowModal(false);
    setModalPosition(0);
    setElementWidth(0);
  }, [risizing]);

  const handleFilters = (event) => {
    const button = event.currentTarget;
    const liElement = button.parentElement;

    // Getting elements width to calculate the position of the Modal
    const { width: liWidth } = getComputedStyle(liElement);
    const { width: headingWidth } = getComputedStyle(
      refFilterList.previousElementSibling
    );

    // Removing the class
    refFilterList.childNodes.forEach((node) => {
      node.classList.remove('active');
      node.firstChild.setAttribute('aria-expanded', 'false');
    });

    const getWidthValue = (width) => Number(width.replace('px', ''));

    // Setting Modal with
    setElementWidth(getWidthValue(liWidth));

    // Showing the Modal
    setShowModal(true);

    liElement.firstChild.setAttribute('aria-expanded', 'true');
    liElement.classList.add('active');

    // Setting the modal position
    switch (liElement.getAttribute('id')) {
      case filtersTypes.category: {
        setModalPosition(() => getWidthValue(headingWidth));
        setCurrentFilter(filtersTypes.category);

        break;
      }
      case filtersTypes.price: {
        setModalPosition(
          () => getWidthValue(headingWidth) + 10 + getWidthValue(liWidth)
        );
        setCurrentFilter(filtersTypes.price);

        break;
      }

      case filtersTypes.promotional: {
        setModalPosition(
          () => getWidthValue(headingWidth) + 20 + getWidthValue(liWidth) * 2
        );
        setCurrentFilter(filtersTypes.promotional);

        break;
      }
      case filtersTypes.range: {
        setModalPosition(
          () => getWidthValue(headingWidth) + 50 + getWidthValue(liWidth) * 3
        );
        setCurrentFilter(filtersTypes.range);

        break;
      }

      default:
        return null;
    }

    return null;
  };

  const handleAddFilterClick = ({ currentFilterType, filterValue }) => {
    // Dispatching action to add filter
    dispatch(
      filtersActions.applyFilter({
        currentFilterType,
        filtersTypes,
        filterValue,
        filteringType,
      })
    );

    return (() => {
      setParams((currentParams) => ({ ...currentParams, ...filters }));
    })();
  };

  const handeClearFiltersClick = () => {
    // Dispatching action to clear filters
    dispatch(filtersActions.clearFilters());

    return (() => {
      // Setting modal false
      setShowModal(false);

      // Removing class of filters
      refFilterList?.childNodes.forEach((node) =>
        node.classList.remove('active')
      );
      // Setting params with an empty object
      setParams(() => {});
    })();
  };

  const handleCloseFIlterClick = () => {
    refFilterList?.childNodes.forEach((node) =>
      node.classList.remove('active')
    );
    setShowModal(false);
  };

  return {
    handleFilters,
    handleAddFilterClick,
    handeClearFiltersClick,
    handleCloseFIlterClick,
    showModal,
    modalPosition,
    elementWidth,
    filtersTypes,
    currentFilter,
    filterId,
    showClearFilterButton: hasFilters,
    appliedFilters: filters,
  };
}
