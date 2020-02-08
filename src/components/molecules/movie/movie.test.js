import React from 'react';
import { shallow } from 'enzyme';

import Movie from './index';

describe('Movie', () => {
  it("Movie should render correctly", () => {
  const myComponent = shallow(
    <Movie/>
  );
  
  expect(myComponent).toMatchSnapshot()
  });
});