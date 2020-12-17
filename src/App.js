import Summary from "./Components/Summary/Summary";
import Provinces from "./Components/Provinces/Provinces";
import Regions from "./Components/Regions/Regions";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import { provinces } from "./Components/Api/Api";
import ScrollToTop from "./Components/SrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Nav provinces={provinces} />
        <Switch>
          <Route exact path="/" component={Summary} />
          <Route path="/province/:code" component={Provinces} />
          <Route path="/regions/:code" component={Regions} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
