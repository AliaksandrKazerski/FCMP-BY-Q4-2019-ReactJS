import React from 'react';
import { shallow } from 'enzyme';

import ItemRating from './index';

describe('ItemRating', () => {
  it("ItemRating should render correctly", () => {
  const myComponent = shallow(<ItemRating/>);
  
  expect(myComponent).toMatchSnapshot()
  });
});