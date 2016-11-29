import React from 'react';

import './popup-toggle.scss';

export class PopupToggle extends React.Component {

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
      <div className="popup-toggle-container">
        <span className="arrow">&#8686;</span>
      </div>
    );
  }
}

PopupToggle.propTypes = {};

export default PopupToggle;
