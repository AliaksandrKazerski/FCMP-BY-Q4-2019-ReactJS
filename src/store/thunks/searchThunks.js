import { setSearchParams } from '../actions/searchActions';

export const getSearchParams = (param) => (dispatch) => {
  dispatch(setSearchParams(param));
};
