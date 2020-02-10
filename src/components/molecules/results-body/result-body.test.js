import React from 'react';
import { shallow } from 'enzyme';

import ResultsBody from './index';

jest.mock('../../../../img/netflix2.png', ()=>'mock.png');

describe('ResultsBody', () => {
  it("ResultsBody should render correctly", () => {
    const mockSearchParams = {
      offset: 0,
      limit: 0
    };
    const mockPaginationParams = {
      limit: 0,
    };
    const mockSetActivePage = jest.fn;
    const mockMovies = ['1', '2'];

    const myComponent = shallow(
      <ResultsBody
        searchParams={mockSearchParams}
        paginationParams={mockPaginationParams}
        setActivePage={mockSetActivePage}
        movies={mockMovies}
      />
    );
  
  expect(myComponent).toMatchSnapshot()
  });
});