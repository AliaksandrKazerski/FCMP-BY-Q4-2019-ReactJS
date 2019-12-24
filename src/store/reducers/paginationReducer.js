const initialState = {
  activePage: 1,
  limit: 10,
};

export default function pqaginationReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_ACTIVE_PAGE':
      return {
        ...state,
        activePage: action.payload,
      };
    default:
      return state;
  }
}
