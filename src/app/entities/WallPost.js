import React from 'react';
import ReactDOM from 'react-dom';

import {PImgComponent} from '../components'
import RootObject from './RootObject';

export default class WallPost extends RootObject {

  // -------------------------------------------------------------------------
  // Public functions
  // -------------------------------------------------------------------------

  selfInject() {
    super.selfInject();

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