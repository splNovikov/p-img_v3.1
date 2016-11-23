import React from 'react';

const Tab = ({
  active,
  children,
  onClick
}) => {
  return (
    <div className={`tab ${active ? 'active' : ''}`}
         onClick={e => {
           e.preventDefault();
           onClick();
         }}>
      {children}
    </div>
  );
};

Tab.propTypes = {
  active: React.PropTypes.bool.isRequired,
  children: React.PropTypes.node.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default Tab;
