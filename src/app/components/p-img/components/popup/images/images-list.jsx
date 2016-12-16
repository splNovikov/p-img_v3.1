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
  }

  /**
   * We are using addEventListener instead of React's onClick because of React is using synthetic event.
   */
  componentDidMount() {
    this.refs.images.addEventListener('wheel', this._onScroll);
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
           ref="images">
        {this.state.images.map(image =>
          <Image key={image.path}
                 image={image}
                 onImageClick={this.props.onImageClick}
                 onDeleteClick={this.props.onDeleteClick}/>)}
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // Unmounting
  // -------------------------------------------------------------------------

  componentWillUnmount() {
    this.refs.images.removeEventListener('wheel', this._onScroll);
  }

  // -------------------------------------------------------------------------
  // Private Functions
  // -------------------------------------------------------------------------

  _onScroll(e) {
    //keeps the ability to zoom with Ctrl+wheel
    if (e.ctrlKey) {
      return;
    }

    let _this = e.currentTarget;
    let scrollTop = _this.scrollTop;
    let scrollHeight = _this.scrollHeight;
    let height = _this.offsetHeight;
    let delta = e.deltaY;
    let up = delta < 0;

    if ((!up && delta > scrollHeight - height - scrollTop) || (up && -delta > scrollTop)) {
      return e.preventDefault();
    }
  }

}

ImagesList.propTypes = {
  images: React.PropTypes.array.isRequired,
  onImageClick: React.PropTypes.func.isRequired,
  onDeleteClick: React.PropTypes.func.isRequired
};

export default ImagesList;
