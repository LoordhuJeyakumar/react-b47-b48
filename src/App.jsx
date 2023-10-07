import { Component } from "react";

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      count:0,
    };
  }
handleGoodClick(){
  
  this.setState({count:this.state.count+1})
}
 
render(){
  return(
    <div>
      <h1>Give Feedback</h1>
      <button onClick={this.handleGoodClick}>Good</button>
      <button>Neutral</button>
      <button>Bad</button>

      <p>Good {this.state.count}</p>
      <p>Neutral</p>
      <p>Bad</p>
    </div>

  )
   
}

}

export default App;