import { useQuery, gql } from "@apollo/client";

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
  if (loading) {
    return <h2>loading...</h2>;
  }
  if (error) {
    return <h2>ERROR!!</h2>;
  }
  return data.searchMovie.map(({ id, title, score, desc, watched, info }) => (
    <div key={id}>
      <table border="1">
        <tr>
          <td>ID</td>
          <td>title</td>
          <td>score</td>
          <td>desc</td>
          <td>watched</td>
          <td>info</td>
        </tr>
        <tr>
          <td>{id}</td>
          <td>{title}</td>
          <td>{score}</td>
          <td>{desc}</td>
          <td>{watched}</td>
          <td>{info}</td>
        </tr>
      </table>
    </div>
  ));
}

module.exports = {
  GetMovies,
};
