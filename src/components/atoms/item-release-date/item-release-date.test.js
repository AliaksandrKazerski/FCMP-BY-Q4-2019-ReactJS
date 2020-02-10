import React from 'react';
import { shallow } from 'enzyme';

import ItemReleaseDateAndRunTime from './index';

describe('ItemReleaseDateAndRunTime', () => {
  it("ItemReleaseDateAndRunTime should render correctly", () => {
  const myComponent = shallow(
    <ItemReleaseDateAndRunTime
      releaseText="text"
    />
  );
  
  expect(myComponent).toMatchSnapshot()
  });
});