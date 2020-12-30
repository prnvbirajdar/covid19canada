import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { provinces } from "./Components/Api/Api";

import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/SrollToTop";

const Summary = React.lazy(() => import("./Components/Summary/Summary"));
const Provinces = React.lazy(() => import("./Components/Provinces/Provinces"));
const Regions = React.lazy(() => import("./Components/Regions/Regions"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Nav provinces={provinces} />
        <Switch>
          <React.Suspense
            fallback={
              <Dimmer active>
                <Loader content="Loading" />
              </Dimmer>
            }
          >
            <Route exact path="/" component={Summary} />
            <Route path="/province/:code" component={Provinces} />
            <Route path="/regions/:code" component={Regions} />
          </React.Suspense>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// import React from "react";
// //import { Dimmer, Loader } from "semantic-ui-react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { provinces } from "./Components/Api/Api";

// import ScrollToTop from "./Components/SrollToTop";

// import Nav from "./Components/Nav/Nav";
// import Footer from "./Components/Footer/Footer";

// //const Nav = React.lazy(() => import("./Components/Nav/Nav"));
// const Summary = React.lazy(() => import("./Components/Summary/Summary"));
// const Provinces = React.lazy(() => import("./Components/Provinces/Provinces"));
// const Regions = React.lazy(() => import("./Components/Regions/Regions"));
// //const Footer = React.lazy(() => import("./Components/Footer/Footer"));
