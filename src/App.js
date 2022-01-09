import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Details from './Components/Details/Details';
import SearchResult from './Components/SearchResult/SearchResult';
import AddNewMeal from './Components/AddNewMeal/AddNewMeal';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/details/:id">
            <Details></Details>
          </Route>
        </Switch>
        <Route path="/addNewMeal">
        <AddNewMeal></AddNewMeal>
        </Route>

      </Router>
    </div>
  );
}

export default App;
