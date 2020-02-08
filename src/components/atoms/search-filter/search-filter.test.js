import React from 'react';
import { shallow } from 'enzyme';

import SearchFilter from './index';

describe('SearchFilter', () => {
  it("SearchFilter should render correctly", () => {
  const myComponent = shallow(
    <SearchFilter
      title="title"
    />
  );
  
  expect(myComponent).toMatchSnapshot()
  });
});