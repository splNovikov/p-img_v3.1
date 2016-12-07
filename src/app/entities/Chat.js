import React from 'react';
import ReactDOM from 'react-dom';

import {PImgComponent} from '../components'
import RootObject from './RootObject';

export default class Chat extends RootObject {

  // -------------------------------------------------------------------------
  // Public functions
  // -------------------------------------------------------------------------

  selfInject() {
    super.selfInject();

    let vkMediaIconsContainer = this.box.querySelector(this.elementType.mediaIconsContainer);

    if (!vkMediaIconsContainer) {
      return null;
    }

    //1. set padding-right 100px instead of 72px;
    this.editable.style.paddingRight = '100px';

    // 2. inject our p-img
    let node = document.createElement('span');

    Object.assign(node.style, {
      color: '#828A99',
      position: 'absolute',
      right: '76px',
      top: 'auto',
      bottom: '6px'
    });

    ReactDOM.render(<PImgComponent editable={this.editable}/>, node);
    vkMediaIconsContainer.append(node);
  }

}