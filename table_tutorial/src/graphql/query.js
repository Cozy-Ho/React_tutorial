import { gql } from "@apollo/client";

export const GET_MOVIE = gql`
    query Movie($id: String!) {
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

export const SEARCH_MOVIES = gql`
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
