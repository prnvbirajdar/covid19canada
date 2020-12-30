import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
          <React.Suspense fallback={<p>Loading...</p>}>
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
