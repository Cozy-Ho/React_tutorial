import logo from "./logo.svg";
import "./App.css";
import { gql, useQuery } from "@apollo/client";
import Table1 from "./components/Table1.js";

const GET_MOVIES = gql`
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

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <body className="App-body">
                <div>
                    <Table1 data={GetMovies()} />
                </div>
            </body>
        </div>
    );
}
function GetMovies() {
    // let ret_arr;
    const { loading, error, data } = useQuery(GET_MOVIES);
    if (loading) return "loading...";
    if (error) return "something wrong..";
    // console.log(data);
    return data;
}

export default App;
