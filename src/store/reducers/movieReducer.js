const initialState = {
  movies: [],
  resultsCount: '0',
}

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_MOVIES':
      return {
        ...state,
        movies: action.payload.data,
        resultsCount: action.payload.total,
      }
    default: return state;
  }
}