import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import SearchResult from './components/SearchResult';
import Movie from './components/Movie';
import Actor from './components/Actor';
function App() {
  return (
    <div className="App">
      <Router>
       <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/showmovie/:movie">
            <SearchResult />
          </Route>
          <Route path="/movie/:movieId">
            <Movie />
          </Route>
          <Route path="/actor/:actorId">
            <Actor />
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
