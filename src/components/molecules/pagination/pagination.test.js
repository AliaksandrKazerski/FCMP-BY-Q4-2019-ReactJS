import React from 'react';
import { shallow } from 'enzyme';

import Pagination from './index';

describe('Pagination', () => {
  it("Pagination should render correctly", () => {
  const myComponent = shallow(
    <Pagination/>
  );
  
  expect(myComponent).toMatchSnapshot()
  });
});