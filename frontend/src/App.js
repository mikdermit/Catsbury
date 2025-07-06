import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
    return (
        <Switch>
            <Route path="/">
                <Layout />
            </Route>
        </Switch>
    );
}

export default App;
