import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import FilmsList from "./filmsList/filmsList";
import Location from "./location/Location";
import "semantic-ui-css/semantic.min.css";
import { Menu } from "semantic-ui-react";

function App() {
  return (
    // <div className="App">
    <Router>
      <Menu size="huge">
        <Menu.Item color='red'>
          <Link to="/" className="Home_link">Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/films" className="FilmList_link">FilmsList</Link>
        </Menu.Item>
        <Menu.Item color='pink'>
          <Link to="/locations" className="Location_link">Locations</Link>
        </Menu.Item>
      </Menu>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/films">
          <FilmsList />
        </Route>
        <Route path="/locations">
          <Location />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
