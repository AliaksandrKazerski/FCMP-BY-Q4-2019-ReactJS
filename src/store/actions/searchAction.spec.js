import { setSearchParams } from './searchActions';

describe('setSearchParams', () => {
  it('should get setSearchParams action correctly', () => {
    const mockSearchParam = 'data';
    const mockSearchAction = {
      type: 'ADD_SEARCH_PARAMS',
      payload: 'data',
    };

    expect(setSearchParams(mockSearchParam)).toMatchObject(mockSearchAction);
  });
});
