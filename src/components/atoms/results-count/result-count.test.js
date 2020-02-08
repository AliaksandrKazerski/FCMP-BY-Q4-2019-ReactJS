import React from 'react';
import { shallow } from 'enzyme';

import ResultsCount from './index';

describe('ResultsCount', () => {
  it("ResultsCount should render correctly", () => {
  const myComponent = shallow(<ResultsCount/>);
  
  expect(myComponent).toMatchSnapshot()
  });
});