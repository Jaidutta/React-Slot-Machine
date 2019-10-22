import React from 'react';
import ReactDOM from 'react-dom';


class SlotMachines extends React.Component {
  render() {
    const {s1,s2, s3} = this.props
    const winner = (s1 === s2) && (s2 === s3)
    return (
      <div>
        <p> {s1} {s2} {s3} </p>
        <h2> {winner ? "You Win" : "You lose"}</h2>
      </div>
    )
  }
}

export default SlotMachines;