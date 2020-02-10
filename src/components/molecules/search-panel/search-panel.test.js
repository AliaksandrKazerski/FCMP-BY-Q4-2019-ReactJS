import React from 'react';
import { shallow } from 'enzyme';

import SearchPanel from './index';

jest.mock('../../../../img/netflix2.png', ()=>'mock.png');

describe('SearchPanel', () => {
  it("SearchPanel should render correctly", () => {
    const mockSearchParams = {
      search: 'mock',
      searchBy: 'mock',
      sortBy: 'mock',
    };

    const myComponent = shallow(
      <SearchPanel
        searchParams={mockSearchParams}
      />
    );
  
  expect(myComponent).toMatchSnapshot()
  });
});