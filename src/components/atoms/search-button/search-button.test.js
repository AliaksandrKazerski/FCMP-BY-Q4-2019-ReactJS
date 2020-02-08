import React from 'react';
import { shallow } from 'enzyme';

import SearchButton from './index';

describe('SearchButton', () => {
  it("SearchButton should render correctly", () => {
  const myComponent = shallow(
    <SearchButton
     defaultValue="button"
    />
  );
  
  expect(myComponent).toMatchSnapshot()
  });
});