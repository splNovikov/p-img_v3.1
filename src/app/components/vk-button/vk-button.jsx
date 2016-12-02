import React from 'react';
import vkButtonSelectors from './vk-button-selectors'
import PImgComponent from '../p-img';
import './vk-button.scss';

export class VkButton extends React.Component {

  // -------------------------------------------------------------------------
  // Mounting
  // -------------------------------------------------------------------------

  constructor(props) {
    super(props);

    this.state = {
      rootButton: props.rootButton,
      rootEditable: props.rootEditable
    };
  }

  componentDidMount(){
    this.assignRootButtonClass(this.state.rootButton, vkButtonSelectors.ROOT_BUTTON_SELECTOR);
    this.overrideDefaultVKOnclick(this.state.rootButton, vkButtonSelectors.ROOT_BUTTON_CONTENT_SELECTOR);
  }

  // -------------------------------------------------------------------------
  // Updating
  // -------------------------------------------------------------------------

  render() {
    return (
      <div className={vkButtonSelectors.ROOT_BUTTON_CONTENT_SELECTOR}>
        {this.state.rootButton.textContent}
        <PImgComponent editable={this.state.rootEditable}/>
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // Private Functions
  // -------------------------------------------------------------------------

  overrideDefaultVKOnclick(rootBtn, className) {
    let onclick = rootBtn.onclick;
    rootBtn.onclick = (e) => {
      if (e.currentTarget === e.target || e.target.classList.contains(className)) {
        return onclick ? onclick(e): false;
      } else {
        return false;
      }
    };
  }

  /**
   * @param rootBtn
   * @param className String
   * @private
   */
  assignRootButtonClass(rootBtn, className) {
    rootBtn.classList += ` ${className}`;
  }

}

VkButton.propTypes = {
  rootButton: React.PropTypes.object.isRequired,
  rootEditable: React.PropTypes.object.isRequired
};

export default VkButton;
