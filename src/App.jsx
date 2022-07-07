import "./App.css";
import logo from './assets/logo.svg'
import CondicionalRendering from "./components/CondicionalRendering";
import KeysLists from "./components/KeysLists";
import FormsUncontrolled from "./components/FormsUncontrolled";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CondicionalRendering />
        <KeysLists />
        <FormsUncontrolled />
      </div>
    </div>
  );
}

export default App;
