import React from 'react';
import { shallow } from 'enzyme';

import Film from './index';

jest.mock('../../../../img/search-1.jpg', ()=>'mock.png');
jest.mock('../../../../img/netflix2.png', ()=>'mock.png');

describe('Film', () => {
  it("Film should render correctly", () => {
  const myComponent = shallow(
    <Film
      
    />
  );
  
  expect(myComponent).toMatchSnapshot()
  });
});