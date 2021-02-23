import { gql } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

export const getMovie = gql`
  query getMovie($id: String!) {
    getMovie(id: $id) {
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
export const searchMovie = gql`
  query searchMovie(
    $search: SearchMethod
    $orderby: SortMethod
    $pagination: PaginationMethod
  ) {
    searchMovie(search: $search, orderby: $orderby, pagination: $pagination) {
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

export const createMovie = gql`
  mutation CreateMovie(
    $title: String!
    $desc: String
    $score: Number
    $watched: Boolean
    $lang: String
    $dubbing: String
    $subtitle: String
  ) {
    createMovie(
      title: $title
      desc: $desc
      score: $score
      info: { lang: $lang, dubbing: $dubbing, subtitle: $subtitle }
    ) {
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
