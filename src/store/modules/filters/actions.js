import * as types from '../types';

export function applyFilter(payload) {
  return {
    type: types.APPLY_FILTER,
    payload,
  };
}
export function removeFilter(payload) {
  return {
    type: types.REMOVE_FILTER,
    payload,
  };
}
export function clearFilters() {
  return {
    type: types.CLEAR_FILTERS,
  };
}
