import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ListOfGifs from "./component/listOfGifs/ListOfGifs";
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
          <Route component={ListOfGifs} path="/gif/:keyword" />
          <Route component={Detail} path="/:id" />
        </GifsContextProvider>
      </section>
    </div>
  );
}

export default App;
