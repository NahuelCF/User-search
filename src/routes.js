import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import { Search } from "./Components/Search/search"
import { Profile } from "./Components/Profile/profile"

export const Routes = () => (
    <Router>
        <Switch>
            <Route path="/search" component={Search} />
            <Route path="/userProfile" component={Profile} />
            <Route render={() => <Redirect to="/search" />} />
        </Switch>
    </Router>
)