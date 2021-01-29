import React, { Component } from "react";

class SearchByID extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.clickSubmit}>
          <p>
            ID:
            <input
              type="text"
              value={this.props.id}
              name="id"
              onChange={(e) => this.props.onChange(e)}
            ></input>
          </p>
          <button type="submit">SEARCH!</button>
          <button onClick={this.props.clickClose}>CLOSE</button>
        </form>
      </div>
    );
  }
}
class SearchData extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.clickSubmit}>
          <p>
            TITLE:
            <input
              type="text"
              value={this.props.title}
              name="title"
              onChange={(e) => this.props.onChange(e)}
            ></input>
          </p>
          <p>
            SCORE:
            <input
              type="text"
              value={this.props.score}
              name="score"
              onChange={(e) => this.props.onChange(e)}
            ></input>
          </p>
          <p>
            DESC:
            <input
              type="text"
              value={this.props.desc}
              name="desc"
              onChange={(e) => this.props.onChange(e)}
            ></input>
          </p>
          <p>
            WATCHED:
            <input
              type="text"
              value={this.props.watched}
              name="watched"
              onChange={(e) => this.props.onChange(e)}
            ></input>
          </p>
          <button type="submit">SUBMIT</button>
          <button onClick={this.props.clickClose}>CLOSE</button>
        </form>
      </div>
    );
  }
}
class CreateData extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.clickSubmit}>
          <p>
            TITLE:
            <input
              type="text"
              value={this.props.title}
              name="title"
              onChange={(e) => this.props.onChange(e)}
            ></input>
          </p>
          <p>
            SCORE:
            <input
              type="text"
              value={this.props.score}
              name="score"
              onChange={(e) => this.props.onChange(e)}
            ></input>
          </p>
          <p>
            DESC:
            <input
              type="text"
              value={this.props.desc}
              name="desc"
              onChange={(e) => this.props.onChange(e)}
            ></input>
          </p>
          <p>
            WATCHED:
            <input
              type="text"
              value={this.props.watched}
              name="watched"
              onChange={(e) => this.props.onChange(e)}
            ></input>
          </p>
          <p>
            lang:
            <input
              type="text"
              value={this.props.lang}
              name="lang"
              onChange={(e) => this.props.onChange(e)}
            ></input>
          </p>
          <p>
            dubbing:
            <input
              type="text"
              value={this.props.dubbing}
              name="dubbing"
              onChange={(e) => this.props.onChange(e)}
            ></input>
          </p>
          <p>
            subtitle:
            <input
              type="text"
              value={this.props.subtitle}
              name="subtitle"
              onChange={(e) => this.props.onChange(e)}
            ></input>
          </p>
          <button type="submit">CREATE!!</button>
          <button onClick={this.props.clickClose}>CLOSE</button>
        </form>
      </div>
    );
  }
}
class UpdateData extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.clickSubmit}>
          <p>
            TITLE:
            <input
              type="text"
              value={this.props.title}
              name="title"
              onChange={(e) => this.props.onChange(e)}
            ></input>
          </p>
          <p>
            SCORE:
            <input
              type="text"
              value={this.props.score}
              name="score"
              onChange={(e) => this.props.onChange(e)}
            ></input>
          </p>
          <p>
            DESC:
            <input
              type="text"
              value={this.props.desc}
              name="desc"
              onChange={(e) => this.props.onChange(e)}
            ></input>
          </p>
          <p>
            WATCHED:
            <input
              type="text"
              value={this.props.watched}
              name="watched"
              onChange={(e) => this.props.onChange(e)}
            ></input>
          </p>
          <p>
            lang:
            <input
              type="text"
              value={this.props.lang}
              name="lang"
              onChange={(e) => this.props.onChange(e)}
            ></input>
          </p>
          <p>
            dubbing:
            <input
              type="text"
              value={this.props.dubbing}
              name="dubbing"
              onChange={(e) => this.props.onChange(e)}
            ></input>
          </p>
          <p>
            subtitle:
            <input
              type="text"
              value={this.props.subtitle}
              name="subtitle"
              onChange={(e) => this.props.onChange(e)}
            ></input>
          </p>
          <button type="submit">UPDATE!</button>
          <button onClick={this.props.clickClose}>CLOSE</button>
        </form>
      </div>
    );
  }
}
class DeleteData extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.clickSubmit}>
          <p>
            ID:
            <input
              type="text"
              value={this.props.id}
              name="id"
              onChange={(e) => this.props.onChange(e)}
            ></input>
          </p>
          <button type="submit">DELETE!</button>
          <button onClick={this.props.clickClose}>CLOSE</button>
        </form>
      </div>
    );
  }
}

export class Inputs extends React.Component {
  render() {
    console.log(this.props.flag);
    const op = this.props.inputOption;
    console.log(op);
    if (this.props.flag) {
      if (op === "getMovie") {
        return (
          <SearchByID
            id={this.props.id}
            onChange={(e) => this.props.onChange(e)}
            clickSubmit={this.props.clickSubmit}
            clickClose={this.props.clickClose}
          ></SearchByID>
        );
      } else if (op === "searchMovie") {
        return (
          <SearchData
            title={this.props.title}
            score={this.props.score}
            desc={this.props.desc}
            watched={this.props.watched}
            lang={this.props.lang}
            subtitle={this.props.subtitle}
            dubbing={this.props.dubbing}
            onChange={(e) => this.props.onChange(e)}
            clickSubmit={this.props.clickSubmit}
            clickClose={this.props.clickClose}
          ></SearchData>
        );
      } else if (op === "createMovie") {
        return (
          <CreateData
            title={this.props.title}
            score={this.props.score}
            desc={this.props.desc}
            watched={this.props.watched}
            lang={this.props.lang}
            subtitle={this.props.subtitle}
            dubbing={this.props.dubbing}
            onChange={(e) => this.props.onChange(e)}
            clickSubmit={this.props.clickSubmit}
            clickClose={this.props.clickClose}
          ></CreateData>
        );
      } else if (op === "updateMovie") {
        return (
          <UpdateData
            title={this.props.title}
            score={this.props.score}
            desc={this.props.desc}
            watched={this.props.watched}
            lang={this.props.lang}
            subtitle={this.props.subtitle}
            dubbing={this.props.dubbing}
            onChange={(e) => this.props.onChange(e)}
            clickSubmit={this.props.clickSubmit}
            clickClose={this.props.clickClose}
          ></UpdateData>
        );
      } else if (op === "deleteMovie") {
        return (
          <DeleteData
            id={this.props.id}
            onChange={(e) => this.props.onChange(e)}
            clickSubmit={this.props.clickSubmit}
            clickClose={this.props.clickClose}
          ></DeleteData>
        );
      } else {
        return <h1>Button Error</h1>;
      }
    } else {
      return <div>Check the flag</div>;
    }
  }
}
