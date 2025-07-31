import React from 'react';
class CountPeople extends React.Component {
    entrycount = 0;
    exitcount = 0;
  constructor() {
    super();
    this.state = {
      entrycount: 0,
      exitcount: 0,
      c: 0,
    };
    this.updateEntry = this.updateEntry.bind(this);
    this.updateExit = this.updateExit.bind(this);
  }
  render() {
    return (
      <div style={{ textAlign: 'center', margin: '50px'}}>
        <button type="button" onClick={this.updateEntry}>Login</button>{this.state.entrycount} people Entered!!!<br/><br/>
        <button type="button" onClick={this.updateExit}>Exit</button>{this.state.exitcount} people Entered!!!
      </div>
    );
  }

updateEntry() {
  this.setState((prevstate) => {
    return { entrycount: prevstate.entrycount + 1 };
  });
}

updateExit() {
  this.setState((prevState) => {
    return { exitcount: prevState.exitcount + 1 };
  });
}
}
export default CountPeople;