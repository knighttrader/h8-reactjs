class Hello extends React.Component {
		  
  constructor(){
    super();
    this.state = {
    	message: "my friend (from state)!"
    };
    this.updateMessage = this.updateMessage.bind(this);
  }

  updateMessage() {
    this.setState({
    	message: "my friend (from changed state)!"
    });
  }

  render() {
		return (
	  	<div>
	    	<h1>Hello {this.state.message}!</h1>
	    	<button onClick={this.updateMessage}>Click me!</button>
	  	</div>   
		)
  }
}

class App extends React.Component {
  render() {
    return <h1>Hallo, Hacktiv8!</h1>;
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById("root")
);