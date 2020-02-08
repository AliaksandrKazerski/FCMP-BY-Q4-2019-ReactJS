import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import SearchPanelWithResultBody from './index';

jest.mock('../../../../img/netflix2.png', ()=>'mock.png');

const mockStore = configureStore([]);
const store = mockStore({
  state: 'mock',
})

describe('SearchPanelWithResultBody', () => {
  it("SearchPanelWithResultBody should render correctly", () => {
  const myComponent = shallow(
    <Provider store={store}>
      <SearchPanelWithResultBody/>
    </Provider>
  );
  
  expect(myComponent).toMatchSnapshot()
  });
});