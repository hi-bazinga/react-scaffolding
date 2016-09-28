import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toTimeString()
    }
  }
  render () {
    return <p className="text">Hello World! {this.state.time}</p>;
  }
}

export default App;