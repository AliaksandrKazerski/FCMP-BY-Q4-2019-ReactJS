const initialState = {
  search: '',
  searchBy: 'title',
  sortBy: 'release date',
  offset: '0',
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_SEARCH_PARAMS':
      return {
        ...state,
        ...action.payload
      };
    default: return state;
  }
};
