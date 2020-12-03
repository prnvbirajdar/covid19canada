// import './App.css';
import Summary from './Components/Summary/Summary'
import Provinces from './Components/Provinces/Provinces'
import Nav from './Components/Nav/Nav'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import {provinces} from './Components/Api/Api'

function App() {
  return (
    <Router>
    <div className="App">
        <Nav provinces={provinces}/>
        <Switch>
          <Route exact path="/" component={Summary}/>
          <Route path="/province/:code" component={Provinces}/>
        </Switch>
        <Footer/>
    </div>
    </Router>

  );
}

export default App;
