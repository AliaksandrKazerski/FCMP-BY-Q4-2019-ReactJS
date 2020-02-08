import React from 'react';
import { shallow } from 'enzyme';

import ItemGenre from './index';

describe('ItemGenre', () => {
  it("ItemGenre should render correctly", () => {
  const myComponent = shallow(<ItemGenre/>);
  
  expect(myComponent).toMatchSnapshot()
  });
});