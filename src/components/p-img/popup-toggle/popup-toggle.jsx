import React from 'react';
import arrow from './arrow.svg';
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
        <img src={arrow} className="arrow" alt="arrow"/>
      </div>
    );
  }
}

PopupToggle.propTypes = {};

export default PopupToggle;
