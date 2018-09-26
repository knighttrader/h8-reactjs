// class Hello extends React.Component {
//   render() {
//     return <h1>Hello world!</h1>;
//   }
// }

class App extends React.Component {
  render() {
    return {<h1>Hallo, Hacktiv8!</h1>};
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById("root")
);