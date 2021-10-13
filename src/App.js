import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Nav from "./components/nav/Nav";
// Pages
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import ReviewsPage from "./pages/ReviewsPage";
import NoMatchPage from "./pages/NoMatchPage";
// App
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav />
          <hr />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/categories">
              <CategoriesPage />
            </Route>
            <Route path="/reviews">
              <ReviewsPage />
            </Route>
            <Route path="*">
              <NoMatchPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
