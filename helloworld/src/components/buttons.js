import React from "react";

export function Buttons(props) {
  return (
    <span>
      <button onClick={() => props.onClick("getMovie")}>SEARCH BY ID</button>
      <button onClick={() => props.onClick("searchMovie")}>SEARCH DATA</button>
      <button onClick={() => props.onClick("createMovie")}>CREATE</button>
      <button onClick={() => props.onClick("updateMovie")}>UPDATE</button>
      <button onClick={() => props.onClick("deleteMovie")}>DELETE</button>
    </span>
  );
}
