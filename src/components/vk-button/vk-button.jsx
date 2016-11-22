import React from 'react';
import {TogglePopupButton} from './toggle-popup-button';
import {PImgPopup} from './p-img-popup';

import './vk-button.scss';

import {pImgSettings} from '../../constants'

export class VkButton extends React.Component {

  // -------------------------------------------------------------------------
  // Mounting
  // -------------------------------------------------------------------------

  constructor(props) {
    super(props);

    this.state = { text: props.text };
    this.assignRootButtonClass(props.root, pImgSettings.ROOT_BUTTON_SELECTOR);
  }

  // -------------------------------------------------------------------------
  // Updating
  // -------------------------------------------------------------------------

  render() {
    // const togglePopupButton = this.renderTogglePopupButton();

    return (
      <div className="content">
        <PImgPopup/>

        <div className="root-context-wrapper">
          {this.state.text}
        </div>

        <TogglePopupButton/>
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // Unmounting
  // -------------------------------------------------------------------------

  componentWillUnmount() {
  }

  // -------------------------------------------------------------------------
  // Private Functions
  // -------------------------------------------------------------------------

  /**
   *
   * @param rootBtn
   * @param className String
   */
  assignRootButtonClass(rootBtn, className) {
    rootBtn.classList += ` ${className}`;
  }

  // renderTogglePopupButton() {
  //   return (
  //     <TogglePopupButton/>
  //   );
  // }

}

VkButton.propTypes = {
  text: React.PropTypes.string.isRequired,
  root: React.PropTypes.object.isRequired
};

export default VkButton;
