import React from 'react';
import {Provider} from 'react-redux';
import {PImg} from './p-img';
import configureStore from './store/configure-store';
import {utils} from '../../utils';

export class PImgComponent extends React.Component {

  // -------------------------------------------------------------------------
  // Mounting
  // -------------------------------------------------------------------------

  constructor(props) {
    super(props);

    this.state = {
      editable: props.editable
    };

    this.onImageClick = this.onImageClick.bind(this);
  }

  // -------------------------------------------------------------------------
  // Updating
  // -------------------------------------------------------------------------

  render() {
    const store = configureStore();

    return (
      <Provider store={store}>
        <PImg onImageClick={this.onImageClick}/>
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
}

PImgComponent.propTypes = {
  editable: React.PropTypes.object
};

export default PImgComponent;