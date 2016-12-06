import React from 'react';

export class Tab extends React.Component {

  // -------------------------------------------------------------------------
  // Mounting
  // -------------------------------------------------------------------------

  constructor(props) {
    super(props);

    this.state = {
      active: props.active,
      children: props.children,
      onClick: props.onClick
    };
  }

  /**
   * We are using addEventListener instead of React's onClick because of React is using synthetic event.
   */
  componentDidMount() {
    this.refs.tab.addEventListener('click', this.state.onClick);
  }

  // -------------------------------------------------------------------------
  // Updating
  // -------------------------------------------------------------------------

  componentWillReceiveProps(nextProps) {
    this.setState({
      active: nextProps.active
    });
  }

  render() {
    return (
      <div className={`tab ${this.state.active ? 'active' : ''}`}
           ref="tab">
        {this.state.children}
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // Unmounting
  // -------------------------------------------------------------------------

  componentWillUnmount() {
    this.refs.tab.removeEventListener('click', this.state.onClick);
  }
}

Tab.propTypes = {
  active: React.PropTypes.bool.isRequired,
  children: React.PropTypes.node.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default Tab;
