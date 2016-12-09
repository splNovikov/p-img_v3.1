import React from 'react';
import {connect} from 'react-redux';

import {addImage} from '../../../actions';
import {Image} from '../../../entities';
import './add-input.scss';

export class AddInput extends React.Component {

  // -------------------------------------------------------------------------
  // Mounting
  // -------------------------------------------------------------------------

  constructor(props) {
    super(props);

    this.state = { value: '' };
    this.dispatch = props.dispatch;

    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * We are using addEventListener instead of React's onClick because of React is using synthetic event.
   */
  componentDidMount() {
    this.refs.submit.addEventListener('click', this.onSubmit);
  }

  // -------------------------------------------------------------------------
  // Updating
  // -------------------------------------------------------------------------

  // todo: validation
  // todo validation if already exists
  render() {
    return (
      <form className="add-form">
        <input type="text"
               className="add-input"
               placeholder="Paste there link for new image..."
               value={this.state.value}
               onChange={this.handleChange}/>
        <input type="submit"
               className="add-button"
               value="&#10148;"
               ref="submit"
               title="Add new image"/>
      </form>
    );
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  // -------------------------------------------------------------------------
  // Unmounting
  // -------------------------------------------------------------------------

  componentWillUnmount() {
    this.refs.submit.removeEventListener('click', this.onSubmit);
  }

  onSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (!this.state.value.trim()) {
      return false;
    }

    this.dispatch(addImage( new Image(this.state.value)));
    // todo add to storage, and say to storage to refresh everywhere

    this.setState({ value: '' });
  }

}

AddInput.propTypes = {
  dispatch: React.PropTypes.func.isRequired
};

AddInput = connect()(AddInput);

export default AddInput;
