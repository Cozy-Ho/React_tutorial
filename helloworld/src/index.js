import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "./queries";
import { Inputs } from "./components/inputs";
import { Buttons } from "./components/buttons";
import { Table } from "./components/table";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      btn: "searchMovie",
      // searchMovie: searchMovie,
      id: null,
      title: null,
      score: null,
      desc: null,
      watched: null,
      lang: null,
      subtitle: null,
      dubbing: null,
      search: {},
      orderby: {},
      pagination: {},
      movie_arr: [],
    };
    this.clickSubmit = this.clickSubmit.bind(this);
    this.clickClose = this.clickClose.bind(this);
    this.onChange = this.onChange.bind(this);
    this.setFunc = this.setFunc.bind(this);
  }
  clickSubmit(e) {
    e.preventDefault();
    this.temp();
  }
  temp() {
    console.log("temp");
  }
  onChange(e) {
    let new_state = {};
    new_state[e.target.name] = e.target.value;
    this.setState(new_state);
  }
  setFunc(btn) {
    this.setState({
      flag: true,
      btn: btn,
    });
  }
  clickClose() {
    this.setState({
      flag: false,
    });
    // console.log(this.state);
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <div align="center">
          <h2>Hello World!!</h2>
          <Inputs
            flag={this.state.flag}
            inputOption={this.state.btn}
            clickClose={this.clickClose}
            clickSubmit={this.clickSubmit}
            onChange={this.onChange}
          ></Inputs>
          <br></br>
          <Buttons onClick={(btn) => this.setFunc(btn)}></Buttons>
          <Table inputOption={this.state.btn}></Table>
        </div>
      </ApolloProvider>
    );
  }
}

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
