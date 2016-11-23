import React from 'react';

import {Tabs} from './tabs'
import './p-img-popup.scss';

export class PImgPopup extends React.Component {

  // -------------------------------------------------------------------------
  // Mounting
  // -------------------------------------------------------------------------

  constructor(props) {
    super(props);

    this.state = {};
  }

  // -------------------------------------------------------------------------
  // Updating
  // -------------------------------------------------------------------------

  render() {
    return (
      <div className="p-img-popup">

        <div className="primary-container">

          <div className="popup-header">
            <div className="header-title">Paste images to chat</div>
          </div>

          <Tabs/>

          <div className="images-container">
            {/*${images.map(image => `*/}
            {/*<div class="image-wrapper">*/}
            {/*<img src="${image.path}" alt="${image.title}" title="${image.title}"/>*/}
            {/*</div>*/}
            {/*`).join('')}*/}
          </div>

        </div>

        <div className="triangle-down-wrapper">
          <div className="triangle-down"></div>
          <div className="triangle-down-border"></div>
        </div>

      </div>
    );
  }
}

PImgPopup.propTypes = {};

export default PImgPopup;