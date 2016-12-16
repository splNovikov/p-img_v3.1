import React from 'react';
import {connect} from 'react-redux';

import {addImage} from '../../../actions';
import './add-input.scss';

export class AddInput extends React.Component {

  // -------------------------------------------------------------------------
  // Mounting
  // -------------------------------------------------------------------------

  constructor(props) {
    super(props);

    this.state = { value: '', isValid: false };
    this.dispatch = props.dispatch;
    this.updateStorage = props.updateStorage;

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
               disabled={!this.state.isValid}
               value="&#10148;"
               ref="submit"
               title="Add new image"/>
      </form>
    );
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      isValid: this.validate(event.target.value)
    });
  }

  // -------------------------------------------------------------------------
  // Unmounting
  // -------------------------------------------------------------------------

  componentWillUnmount() {
    this.refs.submit.removeEventListener('click', this.onSubmit);
  }

  onSubmit = e => {
    e.stopPropagation();
    e.preventDefault();

    this.dispatch(addImage(this.state.value, ''));

    // update Storage
    this.updateStorage(e);

    this.setState({ value: '' });
  };

  // todo validation if already exists
  validate = value => {
    if (value.trim() === '') {
      return false;
    }

    let extension = value.slice(-3);
    return ['gif', 'jpg', 'jpeg'].includes(extension.toLowerCase());
  };

}

AddInput.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  updateStorage: React.PropTypes.func.isRequired
};

AddInput = connect()(AddInput);

export default AddInput;
