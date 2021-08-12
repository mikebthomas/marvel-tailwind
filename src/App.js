import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Movies from "./components/Movies";
import Series from "./components/Series";

const App = () => {
  return (
    <div className="grid container mx-auto md:grid-cols-3">
      <Header />
      <main className="md:col-span-2">
        <Switch>
          <Route exact path="/">
            <h1 className="text-4xl md:text-6xl text-gray-700 font-semibold p-3">
              Welcome to the Marvel Cinematic Universe
            </h1>
            <Main />
          </Route>
          <Route exact path="/movies/:id">
            Your movie here
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route exact path="/series/:id">
            Your series here
          </Route>
          <Route exact path="/series">
            <Series />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
