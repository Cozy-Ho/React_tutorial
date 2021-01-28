import React from "react";
import { useQuery } from "@apollo/client";
import { searchMovie } from "../queries";

export function SearchMovie({ search, orderby, pagination }) {
  const { loading, error, data } = useQuery(searchMovie, {
    variables: { search, orderby, pagination },
  });
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
