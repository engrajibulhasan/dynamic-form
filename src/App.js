import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import DragAndDrop from "./components/DragAndDrop/DragAndDrop";
import FormCreate from "./components/FormCreate";
import Navigation from "./components/Navigation";

library.add(fab, fas, far);

function App() {
  return (
    <Router>
      <Switch>
        .
        <Route exact path="/">
          <Navigation otherPage />
        </Route>
        <Route path="/create-new-form" component={FormCreate} />
        <Route path="/drag-and-drop" component={DragAndDrop} />
      </Switch>
    </Router>
  );
}

export default App;
