import logo from './logo.svg';
import './App.css';
import { ComponentTest } from './ComponentTest';
import { Tittle } from './Tittle';
import { TextBoxName } from './TextBoxName';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tittle />
        <ComponentTest />
        <TextBoxName />
      </header>
    </div>
  );
}

export default App;
