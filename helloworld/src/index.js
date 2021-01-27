import React from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { gql, useQuery } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const search_all = gql`
  query {
    searchMovie {
      id
      title
      score
      desc
      watched
      info {
        ... on Sub {
          lang
          subtitle
        }
        ... on Dub {
          lang
          dubbing
        }
      }
    }
  }
`;

function GetMovies() {
  const { loading, error, data } = useQuery(search_all);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <table border="1">
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
      </table>
    </div>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>Hello World!!</h2>
        <GetMovies></GetMovies>
      </div>
    </ApolloProvider>
  );
}

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
