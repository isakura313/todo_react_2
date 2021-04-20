import "./App.css";
import Sli from './slider/sliderTest'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home'
import FilmsList from './filmsList/filmsList'
import Location from './location/Location'


function App() {
  return (
    // <div className="App">
      <Router>
      <header>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/films">FilmsList</Link></li> 
            <li> <Link to="/locations">Locations</Link> </li>
        </ul>
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
      </header>
    </Router>
  );
}

export default App;
