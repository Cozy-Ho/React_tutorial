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
      andor: "and",
      order: "id",
      dir: "asc",
      getOneMovie: {},
      search: {},
      orderby: {},
      pagination: {},
      movie_arr: [],
    };
    this.clickSubmit = this.clickSubmit.bind(this);
    this.clickClose = this.clickClose.bind(this);
    this.onChange = this.onChange.bind(this);
    this.setFunc = this.setFunc.bind(this);
    this.goHome = this.goHome.bind(this);
  }
  clickSubmit(e) {
    e.preventDefault();
    const api = this.state.btn;

    if (api === "getMovie") {
      this.setState({ getOneMovie: { id: this.state.id } });
    }
    let filter = {};
    let order = {};

    let dum = 0;
    this.state.title == null || this.state.title == ""
      ? (dum += 1)
      : (filter["title"] = this.state.title);
    this.state.score == null
      ? (dum += 1)
      : (filter["score"] = this.state.score * 1);
    this.state.desc == null ? (dum += 1) : (filter["desc"] = this.state.desc);
    this.state.watched == null
      ? (dum += 1)
      : this.state.watched == "false"
      ? (filter["watched"] = false)
      : (filter["watched"] = true);
    this.state.lang == null ? (dum += 1) : (filter["lang"] = this.state.lang);
    this.state.subtitle == null
      ? (dum += 1)
      : (filter["subtitle"] = this.state.subtitle);
    this.state.dubbing == null
      ? (dum += 1)
      : (filter["subbing"] = this.state.dubbing);
    this.state.andor == null
      ? (dum += 1)
      : (filter["andor"] = this.state.andor);

    this.state.orderby == null
      ? (dum += 1)
      : (order[this.state.order] = this.state.dir);

    if (api === "searchMovie") {
      this.setState({ search: filter, orderby: order });
    }

    // this.temp();
  }
  temp() {
    console.log("temp");
  }
  goHome() {
    this.setState({
      flag: false,
      movie_arr: [],
    });
  }
  onChange(e) {
    let new_state = {};
    new_state[e.target.name] = e.target.value;
    this.setState(new_state);
    console.log(this.state);
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
      movie_arr: [],
    });
    // console.log(this.state);
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <div align="center">
          <a onClick={this.goHome}>
            <h2>Hello World!!</h2>
          </a>
          <Inputs
            flag={this.state.flag}
            inputOption={this.state.btn}
            clickClose={this.clickClose}
            clickSubmit={this.clickSubmit}
            onChange={this.onChange}
          ></Inputs>
          <br></br>
          <Buttons onClick={(btn) => this.setFunc(btn)}></Buttons>
          <Table
            id={this.state.id}
            search={this.state.search}
            orderby={this.state.orderby}
            pagination={this.state.pagination}
          ></Table>
        </div>
      </ApolloProvider>
    );
  }
}

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
