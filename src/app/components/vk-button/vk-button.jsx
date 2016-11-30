import React from 'react';
import {pImgSettings} from '../../constants'
import PImgComponent from '../p-img';
import './vk-button.scss';

export class VkButton extends React.Component {

  // -------------------------------------------------------------------------
  // Mounting
  // -------------------------------------------------------------------------

  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
      editable: props.editable,
      root: props.root
    };
  }

  componentDidMount(){
    this.assignRootButtonClass(this.state.root, pImgSettings.ROOT_BUTTON_SELECTOR);
    this.overrideDefaultVKOnclick(this.state.root, pImgSettings.ROOT_BUTTON_CONTENT_SELECTOR);
  }

  // -------------------------------------------------------------------------
  // Updating
  // -------------------------------------------------------------------------

  render() {
    return (
      <div className={pImgSettings.ROOT_BUTTON_CONTENT_SELECTOR}>
        {this.state.text}
        <PImgComponent editable={this.state.editable}/>
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

  /**
   * Overrides default vk onclick event
   * @param rootBtn
   * @param className
   */
  overrideDefaultVKOnclick(rootBtn, className) {
    // let onclick = rootBtn.onclick;
    // rootBtn.onclick = (e) => {
    //   if (e.currentTarget === e.target || e.target.classList.contains(className)) {
    //     return onclick ? onclick(e): false;
    //   } else {
    //     return false;
    //   }
    // };

    rootBtn.addEventListener('mousedown', function (e) {
      if (e.currentTarget !== e.target && !e.target.classList.contains(className)) {
        return false;
      }
    })
  }

}

VkButton.propTypes = {
  text: React.PropTypes.string.isRequired,
  root: React.PropTypes.object.isRequired,
  editable: React.PropTypes.object.isRequired
};

export default VkButton;
