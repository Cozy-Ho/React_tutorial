import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "@apollo/client";
import Table1 from "./components/Table1.js";
import * as query from "./graphql/query.js";

function App() {
    let data = SearchAll();
    function SearchAll() {
        const { loading, error, data } = useQuery(query.SEARCH_MOVIES);
        if (loading) return "loading...";
        if (error) return "something wrong..";
        console.log(data.searchMovie);

        return data.searchMovie;
    }

    function Search() {
        const { loading, error, data } = useQuery(query.GET_MOVIE, {
            id: "015f4831-c715-47e4-a166-5a36345b12fe",
        });
        if (loading) return "loading...";
        if (error) return "something wrong..";
        // console.log(data);
        return data.getMovie;
    }

    function AddMovie() {
        //
    }

    function DeleteMovie() {
        //
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <div className="App-button">
                <button onClick={(data = SearchAll())}>전체검색</button>
                <button onClick={(data = Search())}>조건검색</button>
                <button onClick={(data = AddMovie())}>추가</button>
                <button onClick={(data = DeleteMovie())}>삭제</button>
            </div>
            <body className="App-body">
                <div>
                    <Table1 data={data} />
                </div>
            </body>
        </div>
    );
}

export default App;
