import React from 'react';
import { shallow } from 'enzyme';

import ItemImage from './index';

describe('ItemImage', () => {
  it("ItemImage should render correctly", () => {
  const myComponent = shallow(<ItemImage/>);
  
  expect(myComponent).toMatchSnapshot()
  });
});