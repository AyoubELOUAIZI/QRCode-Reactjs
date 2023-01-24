import './App.css';
import QRcodeCRUD from './components/QRcodeCRUD';
import QRcodeGenerator from './components/QRcodeGenerator';

function App() {
  return (
    <div className="App">
    <h1>React QRCode Generator</h1>
    <div>
        <QRcodeGenerator />

        <QRcodeCRUD/>
    </div>
     
    </div>
  );
}
export default App;
