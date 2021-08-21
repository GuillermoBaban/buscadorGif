import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SerchResults from "./component/serchResults/SerchResults";
import Detail from "./component/Detail";
import Home from "./pages/index";
import { Route } from "wouter";
import { GifsContextProvider } from "./context/GifsContext";

function App() {
  return (
    <div className="App">
      <section className="App-container">
        <GifsContextProvider>
          <Route component={Home} path="/" />
          <Route component={SerchResults} path="/gif/:keyword" />
          <Route component={Detail} path="/:id" />
        </GifsContextProvider>
      </section>
    </div>
  );
}

export default App;
