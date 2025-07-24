import React, { Component } from 'react';

class CohortDetails extends Component {
  render() {
    const headingColor = this.props.status === "Ongoing" ? "green" : "blue";
    return (
      <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
        <h2 style={{ color: headingColor }}>{this.props.name}</h2>
        <p>Status: {this.props.status}</p>
      </div>
    );
  }
}

export default CohortDetails;
