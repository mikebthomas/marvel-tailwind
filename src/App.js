import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="">
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            Welcome
          </Route>
          <Route exact path="/movies/:id">
            Your movie here
          </Route>
          <Route exact path="/movies">
            All the MCU movies here
          </Route>
          <Route exact path="/series/:id">
            Your series here
          </Route>
          <Route exact path="/series">
            All the MCU series here
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
