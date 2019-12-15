const initialState = {
  movies: [],
  resultsCount: '0',
  movie: null,
  movieGenre: '',
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_MOVIES':
      return {
        ...state,
        movies: action.payload.data,
        resultsCount: action.payload.total,
      };
    case 'ADD_MOVIE':
      return {
        ...state,
        movie: action.payload,
      };
    case 'ADD_MOVIE_GENRE':
      return {
        ...state,
        movieGenre: action.payload,
      };
    default: return state;
  };
};
