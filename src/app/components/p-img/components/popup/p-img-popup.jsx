import React from 'react';
import {connect} from 'react-redux';

import {Tabs} from './tabs';
import {VisibleImagesList} from './images';
import {AddInput} from './add-input';
import './p-img-popup.scss';

export class PImgPopup extends React.Component {

  // -------------------------------------------------------------------------
  // Mounting
  // -------------------------------------------------------------------------

  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      fadingOut: false
    };
  }

  // -------------------------------------------------------------------------
  // Updating
  // -------------------------------------------------------------------------

  componentWillReceiveProps(nextProps) {
    this._setIsVisibleState(nextProps.isVisible);
  }

  render() {
    return (
      <div className={`p-img-popup
                      ${this.state.isVisible ? 'visible' : ''}
                      ${this.state.fadingOut ? 'fadingOut' : ''}`}>

        <div className="primary-container">

          <div className="popup-header">
            <div className="header-title">Paste images to chat</div>
          </div>

          <Tabs/>

          <VisibleImagesList onImageClick={this.props.onImageClick}
                             updateStorage={this.props.updateStorage}/>

          <AddInput updateStorage={this.props.updateStorage}/>

        </div>

        <div className="triangle-down-wrapper">
          <div className="triangle-down"></div>
          <div className="triangle-down-border"></div>
        </div>

      </div>
    );
  }

  // -------------------------------------------------------------------------
  // Private Functions:
  // -------------------------------------------------------------------------

  _setIsVisibleState (isVisible){
    if (isVisible) {
      clearTimeout(this._setIsVisibleState.timeoutId);
      this.setState({ isVisible });
    } else {
      let _this = this;

      this._setIsVisibleState.timeoutId = setTimeout(function () {
        _this.setState({ fadingOut: true });

        setTimeout(function () {
          _this.setState({ fadingOut: false });
          _this.setState({ isVisible });
          // 250ms is equals to 300 css property animation-duration
          // 250 is to prevent blinking in vk
        }, 250);

      }, 500);

    }
  }

}

PImgPopup.propTypes = {
  onImageClick: React.PropTypes.func.isRequired,
  updateStorage: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    isVisible: state.popup.isVisible
  };
};

PImgPopup = connect(mapStateToProps)(PImgPopup);

export default PImgPopup;


// const FilterLink = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Tab);