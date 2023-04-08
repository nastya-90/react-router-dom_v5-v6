import { Link, Redirect, Route, Switch } from "react-router-dom";
import Home from "./home";
import Users from "./users";

function App() {
    return (
        <div>
            <h1>App Layout</h1>
            <p>
                <Link to="/users">Users List Page</Link>
            </p>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/users/:userId?" component={Users} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
