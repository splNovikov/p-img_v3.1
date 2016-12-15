import React from 'react';

export class Image extends React.Component {

  // -------------------------------------------------------------------------
  // Mounting
  // -------------------------------------------------------------------------

  constructor(props) {
    super(props);

    this.state = {
      image: props.image
    };

    this._onDeleteClick = this._onDeleteClick.bind(this);
  }

  /**
   * We are using addEventListener instead of React's onClick because of React is using synthetic event.
   */
  componentDidMount() {
    // prop from PImgComponent -> this.state.onImageClick
    this.refs.img.addEventListener('click', this.props.onImageClick);

    this.refs.deleteImg.addEventListener('click', this._onDeleteClick);
  }

  // -------------------------------------------------------------------------
  // Updating
  // -------------------------------------------------------------------------

  render() {
    return (
      <div className="image-wrapper">
        <img src={this.state.image.path}
             alt={this.state.image.title}
             title={this.state.image.title}
             ref="img"/>
        <div className="delete-container"
             ref="deleteImg">&#10006;</div>
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // Unmounting
  // -------------------------------------------------------------------------

  componentWillUnmount() {
    this.refs.img.removeEventListener('click', this.props.onImageClick);
    this.refs.deleteImg.removeEventListener('click', this._onDeleteClick);
  }

  // -------------------------------------------------------------------------
  // Private Functions:
  // -------------------------------------------------------------------------


  _onDeleteClick() {
    event.stopPropagation();

    // dispatch:
    this.props.onDeleteClick(this.props.image.path);
  }
}

Image.propTypes = {
  image: React.PropTypes.object.isRequired,
  onImageClick: React.PropTypes.func.isRequired
};

export default Image;