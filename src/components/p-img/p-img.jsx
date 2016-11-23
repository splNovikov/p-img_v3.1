import React from 'react';

import {PImgPopup} from './popup';
import {PopupToggle} from './popup-toggle';
import './p-img.scss';

export class PImg extends React.Component {

  // -------------------------------------------------------------------------
  // Mounting
  // -------------------------------------------------------------------------

  // constructor(props) {
  //   super(props);
  // }

  // -------------------------------------------------------------------------
  // Updating
  // -------------------------------------------------------------------------

  render() {
    return (
      <div className="p-img">
        <PImgPopup/>
        <PopupToggle/>
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // Private Functions
  // -------------------------------------------------------------------------


}

PImg.propTypes = {};

export default PImg;
