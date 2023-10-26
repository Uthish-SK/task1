import { Component } from "react";

class Cou extends Component {
  constructor(props) {
    super(props);
    this.state = { count: "0" };
  }
  find = (event) => {
    var c = event.target.value;
    this.setState({ count: c.trim().split(" ").length });
  };
  render() {
    return (
      <div>
        <textarea type="text" className="inp" onChange={this.find}></textarea>
        <p>Total words are: {this.state.count} </p>
      </div>
    );
  }
}
export default Cou;
