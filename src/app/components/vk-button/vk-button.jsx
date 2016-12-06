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

  componentDidMount() {
    this._assignRootButtonClass(this.state.rootButton, vkButtonSelectors.ROOT_BUTTON_SELECTOR);

    this.refs.btnContent.addEventListener('click', this._cancelEvent);
    this.refs.btnContent.addEventListener('mouseover', this._cancelEvent);
  }

  // -------------------------------------------------------------------------
  // Updating
  // -------------------------------------------------------------------------

  render() {
    return (
      <div className={vkButtonSelectors.ROOT_BUTTON_CONTENT_SELECTOR}
           ref="btnContent">
        {this.state.rootButton.textContent}
        <PImgComponent editable={this.state.rootEditable}/>
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // Unmounting
  // -------------------------------------------------------------------------

  componentWillUnmount(){
    this.refs.btnContent.removeEventListener('click', this._cancelEvent);
    this.refs.btnContent.removeEventListener('mouseover', this._cancelEvent);
  }

  // -------------------------------------------------------------------------
  // Private Functions
  // -------------------------------------------------------------------------

  /**
   * @param rootBtn
   * @param className String
   * @private
   */
  _assignRootButtonClass(rootBtn, className) {
    rootBtn.classList += ` ${className}`;
  }

  /**
   * stop propagation
   * @param e
   * @private
   */
  _cancelEvent(e){
    e.stopPropagation();
  }

}

VkButton.propTypes = {
  rootButton: React.PropTypes.object.isRequired,
  rootEditable: React.PropTypes.object.isRequired
};

export default VkButton;
