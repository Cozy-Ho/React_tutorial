import React from "react";
import { useQuery } from "@apollo/client";
import { getMovie } from "../queries";

export function GetMovie({ id }) {
  const { loading, error, data } = useQuery(getMovie, {
    variables: { id },
  });
  console.log(id);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log(data);
  return (
    <React.Fragment>
      <tr key={data.getMovie.id}>
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

// 81a8293c-fa77-46ea-bb25-e3c2cdc62677
