// import './App.css';
import Summary from './Components/Summary/Summary'
import CovidMap from './Components/CovidMap/CovidMap'
import Reports from './Components/Reports/Reports'
import Nav from './Components/Nav/Nav'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Summary/>
      <CovidMap/>
      <Reports/>
    </div>
  );
}

export default App;
