import React from 'react';

class Command extends React.Component {
  render() {
    const { name, children } = this.props;
    console.log("add command:" + name);
    return (
      <div className="command" data-command={name}>
        {children}
      </div>
    );
  }
}

export default Command;
