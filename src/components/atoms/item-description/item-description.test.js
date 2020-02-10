import React from 'react';
import { shallow } from 'enzyme';

import ItemDescription from './index';

describe('ItemDescription', () => {
  it("ItemDescription should render correctly", () => {
  const myComponent = shallow(<ItemDescription/>);
  
  expect(myComponent).toMatchSnapshot()
  });
});