import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import { GetMovie } from "./components/getMovie";
import { SearchMovie } from "./components/searchMovie";
import { client } from "./queries";

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: null,
      score: null,
      desc: null,
      watched: null,
      lang: null,
      subtitle: null,
      dubbing: null,
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.temp = this.temp.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
  }
  handleFormSubmit(e) {
    e.preventDefault();
    this.temp();
  }
  temp() {
    const formData = new FormData();
    formData.append("id", this.state.id);
    formData.append("title", this.state.title);
    formData.append("socre", this.state.score);
    formData.append("desc", this.state.desc);
    formData.append("watched", this.state.watched);
    formData.append("lang", this.state.lang);
    formData.append("subtitle", this.state.subtitle);
    formData.append("dubbing", this.state.dubbing);
    console.log(formData);
  }
  handleValueChange(e) {
    let new_state = {};
    new_state[e.target.name] = e.target.value;
    this.setState(new_state);
  }

  render() {
    console.log(this.props.flag);
    if (this.props.flag) {
      return (
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <p>
              ID:
              <input
                type="text"
                value={this.state.id}
                name="id"
                onChange={this.handleValueChange}
              ></input>
            </p>
            <p>
              TITLE:
              <input
                type="text"
                value={this.state.title}
                name="title"
                onChange={this.handleValueChange}
              ></input>
            </p>
            <p>
              SCORE:
              <input
                type="text"
                value={this.state.score}
                name="score"
                onChange={this.handleValueChange}
              ></input>
            </p>
            <p>
              DESC:
              <input
                type="text"
                value={this.state.desc}
                name="desc"
                onChange={this.handleValueChange}
              ></input>
            </p>
            <p>
              WATCHED:
              <input
                type="text"
                value={this.state.watched}
                name="watched"
                onChange={this.handleValueChange}
              ></input>
            </p>
            <button type="submit">SUBMIT</button>
            <button onClick={this.props.onClose}>CLOSE</button>
          </form>
        </div>
      );
    } else {
      return <div>Check the flag</div>;
    }
  }
}

function Buttons(props) {
  return (
    <span>
      <button onClick={props.onClick}>SEARCH</button>
      <button onClick={props.onClick}>INSERT</button>
      <button onClick={props.onClick}>UPDATE</button>
      <button onClick={props.onClick}>DELETE</button>
    </span>
  );
}
function TableData(args) {
  let param;
  if (args) {
    if (args == "search") {
      param = "searchMovie";
    } else if ((args = "insert")) {
      param = "createMoive";
    } else if ((args = "update")) {
      param = "updateMovie";
    }
  }
  // test sample
  let search = {
    title: "abc",
    watched: false,
    andor: "or",
  };
  let orderby = {
    title: "asc",
  };

  return (
    <div>
      <table border="1" style={{ textAlign: "center" }}>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>SCORE</th>
          <th>DESC</th>
          <th>WATCHED</th>
          <th>lang</th>
          <th>dubbing</th>
          <th>subtitile</th>
        </tr>
        {/* <GetMovie id="81a8293c-fa77-46ea-bb25-e3c2cdc62677"></GetMovie> */}
        <SearchMovie search={search} orderby={orderby}></SearchMovie>
      </table>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      // searchMovie: searchMovie,
    };
  }
  buttonFlag() {
    this.setState({
      flag: true,
    });
  }
  clickClose() {
    this.setState({
      flag: false,
    });
  }
  submit() {
    console.log("##################");
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <div align="center">
          <h2>Hello World!!</h2>
          <InputField
            flag={this.state.flag}
            onClose={() => this.clickClose()}
            onSubmit={() => this.submit()}
          ></InputField>
          <br></br>
          <Buttons onClick={() => this.buttonFlag()}></Buttons>
          <TableData></TableData>
        </div>
      </ApolloProvider>
    );
  }
}

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
