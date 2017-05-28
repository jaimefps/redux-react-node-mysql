import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div style={{ border: '1px solid black' }}>
        boolean: {JSON.stringify(this.props.boolean)}
        <br /><br />
        <button onClick={() => this.props.flipBoolean(this.props.boolean)}>flip boolean</button>
      </div>
    );
  }
}

export default Home;
