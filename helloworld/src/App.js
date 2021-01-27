import logo from "./logo.svg";
import "./App.css";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { GetMovies } from "./queries";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <ApolloProvider client={client}>
        <div>
          <GetMovies />
        </div>
      </ApolloProvider>
    </div>
  );
}

export default App;
