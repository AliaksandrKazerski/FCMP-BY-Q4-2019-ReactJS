import searchReducer from "./searchReducer";

describe('searchReducer should get right state according to actions', () => {
  it('searchReducer should get right state with setSearchParams action', () => {
    const mockSearchAction = {
      type: 'ADD_SEARCH_PARAMS',
      payload: { search: 'data' },
    };
    const mockState = {
      search: 'data',
    };

    expect(searchReducer(null, mockSearchAction)).toMatchObject(mockState);
  });
});
