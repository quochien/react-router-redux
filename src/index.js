import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link, NavLink, Switch } from "react-router-dom";
import "./styles.css";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const AllUsers = () => <div>All Users</div>;
const Users = ({ match, location, history }) => {
  console.log(match);
  console.log(location);
  console.log(history);
  return <div>{match.params.id}</div>;
};
const activeEvent = (match, location) => {
  if (!match) {
    return false;
  }
  console.log("active on: ", match.url);
};

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="selected">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="selected">
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            activeClassName="selected"
            isActive={activeEvent}
          >
            Users
          </NavLink>{" "}
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users/allUsers" component={AllUsers} />
        <Route path="/users/:id" component={Users} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
