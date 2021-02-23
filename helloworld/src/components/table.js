import React, { Component } from "react";
import { useQuery } from "@apollo/client";
import { searchMovie, getMovie } from "../queries";

export class Table extends Component {
  render() {
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
          <TableData
            id={this.props.id}
            search={this.props.search}
            orderby={this.props.orderby}
            pagination={this.props.pagination}
          ></TableData>
        </table>
      </div>
    );
  }
}

class TableData extends Component {
  render() {
    const id = this.props.id;
    const search = this.props.search;
    const orderby = this.props.orderby;
    const pagination = this.props.pagination;

    if (id) {
      return <GetMovie id={id}></GetMovie>;
    }
    if (search) {
      return (
        <SearchMovie
          search={search}
          orderby={orderby}
          pagination={pagination}
        ></SearchMovie>
      );
    }
    return (
      <SearchMovie search={null} orderby={null} pagination={null}></SearchMovie>
    );
  }
}

function GetMovie(id) {
  const { loading, error, data } = useQuery(getMovie, {
    variables: { id },
  });
  if (loading) return "Loading...";
  if (error) return "Error!!";
  console.log(data.getMovie);
  return (
    <React.Fragment>
      <tr>
        <td>{data.getMovie.id}</td>
        <td>{data.getMovie.title}</td>
        <td>{data.getMovie.score}</td>
        <td>{data.getMovie.desc}</td>
        <td>{data.getMovie.watched.toString()}</td>
        <td>{data.getMovie.info.lang}</td>
        <td>{data.getMovie.info.dubbing}</td>
        <td>{data.getMovie.info.subtitle}</td>
      </tr>
    </React.Fragment>
  );
}

function SearchMovie({ search, orderby, pagination }) {
  const { loading, error, data } = useQuery(searchMovie, {
    variables: { search, orderby, pagination },
  });
  console.log(search, orderby, pagination);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log(data.searchMovie);
  return (
    <React.Fragment>
      {data.searchMovie.map((movie) => (
        <tr key={movie.id}>
          <td>{movie.id}</td>
          <td>{movie.title}</td>
          <td>{movie.score}</td>
          <td>{movie.desc}</td>
          <td>{movie.watched.toString()}</td>
          <td>{movie.info.lang}</td>
          <td>{movie.info.dubbing}</td>
          <td>{movie.info.subtitle}</td>
        </tr>
      ))}
    </React.Fragment>
  );
}
