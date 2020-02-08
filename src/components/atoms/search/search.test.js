import React from 'react';
import { shallow } from 'enzyme';

import Search from './index';

describe('Search', () => {
  it("Search should render correctly", () => {
  const myComponent = shallow(<Search/>);
  
  expect(myComponent).toMatchSnapshot()
  });
});