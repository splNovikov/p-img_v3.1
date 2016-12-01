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
      rootObject: props.rootObject
    };
  }

  componentDidMount(){
    this.assignRootButtonClass(this.state.rootObject.button, pImgSettings.ROOT_BUTTON_SELECTOR);
    // this.overrideDefaultVKOnclick(this.state.rootObject.button, pImgSettings.ROOT_BUTTON_CONTENT_SELECTOR);
  }

  // -------------------------------------------------------------------------
  // Updating
  // -------------------------------------------------------------------------

  render() {
    return (
      <div className={pImgSettings.ROOT_BUTTON_CONTENT_SELECTOR}>
        {this.state.rootObject.button.textContent}
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

  // overrideDefaultVKOnclick(rootBtn, className) {
  //   let onclick = rootBtn.onclick;
  //   rootBtn.onclick = (e) => {
  //     if (e.currentTarget === e.target || e.target.classList.contains(className)) {
  //       return onclick ? onclick(e): false;
  //     } else {
  //       return false;
  //     }
  //   };
  // }

}

VkButton.propTypes = {
  rootObject: React.PropTypes.object.isRequired
};

export default VkButton;
