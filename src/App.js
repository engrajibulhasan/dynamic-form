import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Navigation from './components/Navigation';
import Body from './components/Body';
library.add(fab, fas, far);

function App() {
  return (
    <>
      <Body/>
    </>
  );
}

export default App;
