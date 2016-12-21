import React from 'react';
import ReactDOM from 'react-dom';

import {PImgComponent} from '../components';
import {VkButton} from '../components';
import RootObject from './RootObject';

export default class WallPost extends RootObject {

  // -------------------------------------------------------------------------
  // Public functions
  // -------------------------------------------------------------------------

  selfInject() {
    super.selfInject();

    // 1. Injection to button. Comment it if don't need to.
    // remove it - if you don't want to.
    // ReactDOM.render(<VkButton rootButton={this.button}
    //                           rootEditable={this.editable}/>, this.button);

    // 2. Inject to icons container
    let vkMediaIconsContainer = this.box.querySelector(this.elementType.mediaIconsContainer);

    if (!vkMediaIconsContainer) {
      return null;
    }

    let node = document.createElement('span');

    Object.assign(node.style, {
      display: 'flex',
      height: '22px',
      float: 'left',
      color: '#7293B6'
    });

    ReactDOM.render(<PImgComponent editable={this.editable}/>, node);
    vkMediaIconsContainer.append(node);
  }

}