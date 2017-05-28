import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div style={{ border: '1px solid black' }}>
        Submition Form
        <br /><br />
        <button onClick={() => this.props.testPost()}>POST to SQL db</button>
        <br /><br />
        <button onClick={() => this.props.testNoSQLPost()}>POST to noSQL db</button>
      </div>
    );
  }
}

export default Form;
