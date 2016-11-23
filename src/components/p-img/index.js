import React from 'react';
import {Provider} from 'react-redux';
import {PImg} from './p-img';
import configureStore from './store/configureStore';

export class PImgComponent extends React.Component {

  render() {
    const store = configureStore();

    return (
      <Provider store={store}>
        <PImg />
      </Provider>
    );
  }
}

export default PImgComponent;