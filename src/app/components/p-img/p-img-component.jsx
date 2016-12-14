import React from 'react';
import {Provider} from 'react-redux';

import {PImg} from './p-img';
import configureStore from './store/configure-store';
import {utils} from '../../utils';
import {imagesStore} from './store/images-store';

export class PImgComponent extends React.Component {

  // -------------------------------------------------------------------------
  // Mounting
  // -------------------------------------------------------------------------

  constructor(props) {
    super(props);

    this.state = {
      editable: props.editable
    };
    this.store = configureStore();

    this.onImageClick = this.onImageClick.bind(this);
    this.updateStorage = this.updateStorage.bind(this)
  }

  // -------------------------------------------------------------------------
  // Updating
  // -------------------------------------------------------------------------

  render() {
    return (
      <Provider store={this.store}>
        <PImg onImageClick={this.onImageClick}
              updateStorage={this.updateStorage}/>
      </Provider>
    );
  }

  onImageClick(event) {
    event.stopPropagation();

    let src = event.target.getAttribute('src');

    if (!src || !this.state.editable) {
      return null;
    }

    utils.pasteEmulation(src, this.state.editable);
  }

  updateStorage(event){
    event.stopPropagation();

    let state = this.store.getState();

    if (state && state.images){
      imagesStore.setData(state.images);
    }

    return state.images;
  }
}

PImgComponent.propTypes = {
  editable: React.PropTypes.object
};

export default PImgComponent;