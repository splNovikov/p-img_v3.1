import React from 'react';
import Image from './image';
import './images.scss';

// const ImagesList = ({ images, onImageClick, onDeleteClick }) => {
export class ImagesList extends React.Component {

  // -------------------------------------------------------------------------
  // Mounting
  // -------------------------------------------------------------------------

  constructor(props) {
    super(props);

    this.state = {
      images: props.images
    };

    this._onScroll = this._onScroll.bind(this);
  }

  // -------------------------------------------------------------------------
  // Updating
  // -------------------------------------------------------------------------

  componentWillReceiveProps(nextProps) {
    this.setState({
      images: nextProps.images
    });
  }

  render() {
    return (
      <div className="images-container"
           ref="images"
           onWheel={this._onScroll}>
        {this.state.images.map(image =>
          <Image key={image.path}
                 image={image}
                 onImageClick={this.props.onImageClick}
                 onDeleteClick={this.props.onDeleteClick}/>)}
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // Private Functions
  // -------------------------------------------------------------------------

  _onScroll(e) {
    //keeps the ability to zoom with Ctrl+wheel
    if (e.ctrlKey) {
      return;
    }

    if (this._smoothCloser.inProgress) {
      return e.preventDefault();
    }

    let target = e.currentTarget;
    let delta = e.deltaY;
    let up = delta < 0;

    if ((!up && delta > target.scrollHeight - target.offsetHeight - target.scrollTop) ||
      (up && -delta > target.scrollTop)) {
      this._smoothCloser(up, target);
      return e.preventDefault();
    }
  }

  _smoothCloser(up, target) {
    let that = this;
    let speed = 4; // pixels per ms
    let ms = 10;

    if (!up) {
      let interval = setInterval(function () {
        target.scrollTop += speed;
        that._smoothCloserIntervalBehaviour(target, interval);
      }, ms);
    } else {
      let interval = setInterval(function () {
        target.scrollTop -= speed;
        that._smoothCloserIntervalBehaviour(target, interval);
      }, ms);
    }

    return this._smoothCloser.inProgress;
  }

  _smoothCloserIntervalBehaviour = (target, interval) => {
    if (target.scrollTop === this._smoothCloser.memo) {
      this._smoothCloser.inProgress = false;
      clearInterval(interval);
    } else {
      this._smoothCloser.inProgress = true;
      this._smoothCloser.memo = target.scrollTop;
    }
  }

}

ImagesList.propTypes = {
  images: React.PropTypes.array.isRequired,
  onImageClick: React.PropTypes.func.isRequired,
  onDeleteClick: React.PropTypes.func.isRequired
};

export default ImagesList;
