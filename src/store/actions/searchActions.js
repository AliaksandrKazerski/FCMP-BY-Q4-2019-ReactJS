export function setSearchParams(params) {
  return {
    type: 'ADD_SEARCH_PARAMS',
    payload: params,
  };
}
