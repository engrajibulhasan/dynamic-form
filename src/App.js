import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Body from './components/Body';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from "./components/Navigation";


library.add(fab, fas, far);

function App() {
  return (
    <Router>
      
      <Switch>
          <Route exact path="/" >
            <Navigation otherPage/>
          </Route>
          <Route  path="/create-new-form" component={Body} />
      </Switch>
    </Router>
  );
}

export default App;
