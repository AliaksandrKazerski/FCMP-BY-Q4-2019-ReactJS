import { setMovies, setMovie, setMovieGenre } from './moviesActions';

describe('setMovies', () => {
  it('should get setMovies action correctly', () => {
    const mockMovies = 'data';
    const mockAction = { type: 'ADD_MOVIES', payload: 'data' };

    expect(setMovies(mockMovies)).toMatchObject(mockAction);
  });

  it('should get setMovie action correctly', () => {
    const mockMovies = 'data';
    const mockAction = { type: 'ADD_MOVIE', payload: 'data' };

    expect(setMovie(mockMovies)).toMatchObject(mockAction);
  });

  it('should get setMovieGenre action correctly', () => {
    const mockMovies = 'data';
    const mockAction = { type: 'ADD_MOVIE_GENRE', payload: 'data' };

    expect(setMovieGenre(mockMovies)).toMatchObject(mockAction);
  });
});
