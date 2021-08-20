import { Switch, Route } from "react-router-dom";

import "./styles/app.scss";
import { Calendar, Header, Content, Schedule } from "./components";
import {Home} from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/schedule">
          <Schedule />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
