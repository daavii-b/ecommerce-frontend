import * as types from '../types';

export const filtersInitialState = {
  filters: {},
  hasFilters: false,
};

export default (state = filtersInitialState, action) => {
  switch (action.type) {
    case types.APPLY_FILTER: {
      const newState = { ...state };
      const { currentFilterType, filtersTypes, filterValue, filteringType } =
        action.payload;

      switch (currentFilterType) {
        case filtersTypes.category: {
          newState.filters.category = filterValue.name;

          break;
        }
        case filtersTypes.price: {
          if (filteringType.get('filter-by') === 'min') {
            delete newState.filters.max_price;

            newState.filters.min_price = filterValue;
          } else if (filteringType.get('filter-by') === 'max') {
            delete newState.filters.min_price;

            newState.filters.max_price = filterValue;
          }
          break;
        }
        case filtersTypes.promotional: {
          if (filteringType.get('filter-by') === 'min') {
            delete newState.filters.max_promotional_price;

            newState.filters.min_promotional_price = filterValue;
          } else if (filteringType.get('filter-by') === 'max') {
            delete newState.filters.min_promotional_price;

            newState.filters.max_promotional_price = filterValue;
          }
          break;
        }
        case filtersTypes.range: {
          break;
        }

        default:
          return newState;
      }

      newState.hasFilters = true;

      return newState;
    }
    case types.REMOVE_FILTER: {
      return state;
    }
    case types.CLEAR_FILTERS: {
      const newState = { ...state };

      newState.filters = {};
      newState.hasFilters = false;

      return newState;
    }

    default:
      return state;
  }
};
