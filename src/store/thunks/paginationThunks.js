import { setActivePage } from '../actions/paginationActions';

export const getActivePage = (param) => (dispatch) => {
  dispatch(setActivePage(param));
};
