import React from 'react';
import {pImgSettings} from '../../constants'
import {PImg} from '../';
import './vk-button.scss';

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
    return (
      <div className="content">
        {this.state.text}
        <PImg/>
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // Private Functions
  // -------------------------------------------------------------------------

  /**
   * @param rootBtn
   * @param className String
   */
  assignRootButtonClass(rootBtn, className) {
    rootBtn.classList += ` ${className}`;
  }

}

VkButton.propTypes = {
  text: React.PropTypes.string.isRequired,
  root: React.PropTypes.object.isRequired
};

export default VkButton;
