import './App.css';
import Summary from './Components/Summary/Summary'
import CovidMap from './Components/CovidMap/CovidMap'
import Reports from './Components/Reports/Reports'

function App() {
  return (
    <div className="App">
      <Summary/>
      <CovidMap/>
      <Reports/>
    </div>
  );
}

export default App;
