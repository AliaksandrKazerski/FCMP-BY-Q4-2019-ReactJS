import movieReducer from './moviesReducer';

describe('movieReducer should get right state according to actions', () => {
  it('movieReducer should get right state with setMovies action', () => {
    const mockAction = { type: 'ADD_MOVIES', payload: { data: 'data', total: 'data' } };
    const mockState = {
      movies: 'data',
      resultsCount: 'data',
    };
    expect(movieReducer(null, mockAction)).toMatchObject(mockState);
  });

  it('movieReducer should get right state with setMovie action', () => {
    const mockAction = { type: 'ADD_MOVIE', payload: 'data' };
    const mockState = {
      movie: 'data',
    };

    expect(movieReducer(null, mockAction)).toMatchObject(mockState);
  });

  it('movieReducer should get right state with setMovieGenre action', () => {
    const mockAction = { type: 'ADD_MOVIE_GENRE', payload: 'data' };
    const mockState = {
      movieGenre: 'data',
    };

    expect(movieReducer(null, mockAction)).toMatchObject(mockState);
  });
});
