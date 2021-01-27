import { gql, useQuery } from "@apollo/client";

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

function getMovies() {
  const { loading, error, data } = useQuery(search_all);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <table>
      {data.searchMovies.map((movie) => {
        <tr key={movie.id}>
          <td>{movie.id}</td>
          <td>{movie.title}</td>
          <td>{movie.score}</td>
          <td>{movie.desc}</td>
          <td>{movie.watched}</td>
          <td>{movie.info}</td>
        </tr>;
      })}
    </table>
  );
}

module.exports = {
  getMovies,
};
