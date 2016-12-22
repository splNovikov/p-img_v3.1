import React from 'react';
import {connect} from 'react-redux';

import {PImgPopup} from './components/popup';
import PopupToggle from './components/popup-toggle';
import {pImgComponentSelectors} from './constants';
import {togglePopup} from './actions';
import './p-img.scss';

export class PImg extends React.Component {

  // -------------------------------------------------------------------------
  // Mounting
  // -------------------------------------------------------------------------

  constructor(props) {
    super(props);

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
  }

  /**
   * We are using addEventListener instead of React's mouseenter because of React is using synthetic event.
   */
  componentDidMount() {
    this.refs.pimg.addEventListener('mouseenter', this._onMouseEnter);
  }

  // -------------------------------------------------------------------------
  // Updating
  // -------------------------------------------------------------------------

  render() {
    return (
      <div className={pImgComponentSelectors.P_IMG}
           ref="pimg">
        <PImgPopup onImageClick={this.props.onImageClick}
                   updateStorage={this.props.updateStorage}/>
        <PopupToggle />
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // Unmounting
  // -------------------------------------------------------------------------

  componentWillUnmount() {
    this.refs.pimg.removeEventListener('mouseenter', this._onMouseEnter);
    this.refs.pimg.removeEventListener('mouseleave', this._onMouseLeave);
  }

  // -------------------------------------------------------------------------
  // Private Functions
  // -------------------------------------------------------------------------

  _onMouseEnter() {
    event.stopPropagation();

    this.refs.pimg.removeEventListener('mouseenter', this._onMouseEnter);
    this.refs.pimg.addEventListener('mouseleave', this._onMouseLeave);

    this.props.dispatch(togglePopup(true));
  }

  _onMouseLeave() {
    event.stopPropagation();

    this.refs.pimg.removeEventListener('mouseleave', this._onMouseLeave);
    this.refs.pimg.addEventListener('mouseenter', this._onMouseEnter);

    this.props.dispatch(togglePopup(false));
  }

}

PImg.propTypes = {
  onImageClick: React.PropTypes.func.isRequired,
  updateStorage: React.PropTypes.func.isRequired
};

PImg = connect()(PImg);

export default PImg;
