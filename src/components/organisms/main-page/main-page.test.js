import React from 'react';
import { shallow } from 'enzyme';

import MainPage from './index';

jest.mock('../../../../img/netflix2.png', ()=>'mock.png');
jest.mock('../../../../img/search-1.jpg', ()=>'mock.png');

describe('MainPage', () => {
  it("MainPage should render correctly", () => {
  const myComponent = shallow(
    <MainPage/>
  );
  
  expect(myComponent).toMatchSnapshot()
  });
});