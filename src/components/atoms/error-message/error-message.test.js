import React from 'react';
import { shallow } from 'enzyme';

import ErrorMessage from './index';

describe('ErrorMessage', () => {
  it("ErrorMessage should render correctly", () => {
  const myComponent = shallow(
    <ErrorMessage
      message="error"
    />
  );
  
  expect(myComponent).toMatchSnapshot()
  });
});