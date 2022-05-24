import './App.css';
import Contador from './components/contador';
import BreakingBad from './components/BreakingBad';


// https://www.breakingbadapi.com/api/characters

function App() {




  return (
    <div className="App">
      <header className="App-header">
        <h1>Custom Hooks</h1>
        {/* <Contador /> */}
        <BreakingBad />
      </header>
    </div>
  );
}

export default App;
