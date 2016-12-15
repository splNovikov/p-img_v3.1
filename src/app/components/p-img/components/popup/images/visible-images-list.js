import {connect} from 'react-redux';

import { deleteImage } from '../../../actions';
import ImagesList from './images-list';
import {filterTypes} from '../../../constants';

const isGif = (image) => {
  let extension = image.path.slice(-3);
  return extension === 'gif' || extension === 'GIF';
};

const getVisibleImages = (images, filter) => {
  switch (filter) {
    case filterTypes.SHOW_GIF_IMAGES:
      return images.filter(
        image => isGif(image)
      );
    case filterTypes.SHOW_IMAGES:
      return images.filter(
        image => !isGif(image)
      );
    default:
      return images;
  }
};

const mapStateToProps = (state, props) => {
  return {
    images: getVisibleImages(
      state.images,
      state.visibilityFilter
    ),
    ...props
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteClick: (path) => {
      // remove from state
      dispatch(deleteImage(path));
      // remove from storage in PImgComponent;
      props.updateStorage(event);
    }
  };
};

const VisibleImagesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImagesList);


export default VisibleImagesList;
