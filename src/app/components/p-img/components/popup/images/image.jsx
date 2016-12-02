import React from 'react';

export class Image extends React.Component {

  // -------------------------------------------------------------------------
  // Mounting
  // -------------------------------------------------------------------------

  constructor(props) {
    super(props);

    this.state = {
      image: props.image,
      onImageClick: props.onImageClick
    };
  }

  /**
   * We are using addEventListener instead of React's onClick because of React is using synthetic event.
   */
  componentDidMount() {
    this.refs.img.addEventListener('click', this.state.onImageClick);
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
             ref="img"
             onClick={this.state.onImageClick}/>
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // Unmounting
  // -------------------------------------------------------------------------

  componentWillUnmount(){
    this.refs.img.removeEventListener('click', this.state.onImageClick);
  }
}

export default Image;