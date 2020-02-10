import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import FilmWithResultRoby from './index';

jest.mock('../../../../img/search-1.jpg', ()=>'mock.png');
jest.mock('../../../../img/netflix2.png', ()=>'mock.png');

const mockStore = configureStore([]);
const store = mockStore({
  state: 'mock',
})

describe('FilmWithResultRoby', () => {
  it("FilmWithResultRoby should render correctly", () => {
    const myComponent = shallow(
      <Provider store={store}>
        <FilmWithResultRoby/>
      </Provider>
    );
  
  expect(myComponent).toMatchSnapshot()
  });
});