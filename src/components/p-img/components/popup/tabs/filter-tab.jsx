import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../../actions';
import Tab from './tab';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () =>
      dispatch(setVisibilityFilter(ownProps.filter))
  };
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tab);

export default FilterLink;
