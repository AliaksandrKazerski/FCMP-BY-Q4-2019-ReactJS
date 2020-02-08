import React from 'react';
import { shallow } from 'enzyme';

import ItemTitle from './index';

describe('ItemTitle', () => {
  it("ItemTitle should render correctly", () => {
  const myComponent = shallow(<ItemTitle/>);
  
  expect(myComponent).toMatchSnapshot()
  });
});