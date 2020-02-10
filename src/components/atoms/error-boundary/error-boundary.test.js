import React from 'react';
import { shallow } from 'enzyme';

import ErrorBoundary from './index';

describe('ErrorBoundary', () => {
  it("ErrorBoundary should render correctly", () => {
  const myComponent = shallow(<ErrorBoundary/>);
  
  expect(myComponent).toMatchSnapshot()
  });
});