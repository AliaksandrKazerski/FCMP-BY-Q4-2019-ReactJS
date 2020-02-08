import React from 'react';
import { shallow } from 'enzyme';

import IconButton from './index';

describe('IconButton', () => {
  it("IconButton should render correctly", () => {
  const myComponent = shallow(<IconButton/>);
  
  expect(myComponent).toMatchSnapshot()
  });
});