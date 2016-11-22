import React from 'react';
import arrow from './arrow.svg';
import './toggle-popup-button.scss';

export class TogglePopupButton extends React.Component {

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
      <div className="p-img-toggle-container">
        <img src={arrow} className="arrow" alt="arrow"/>
      </div>
    );
  }
}

TogglePopupButton.propTypes = {};

export default TogglePopupButton;
