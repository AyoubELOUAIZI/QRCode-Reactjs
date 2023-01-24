import './App.css';
import QRcodeCRUD from './components/QRcodeCRUD';
import QRcodeGenerator from './components/QRcodeGenerator';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
    <Header/>
    <div>
        <QRcodeGenerator />

        <QRcodeCRUD/>
    </div>
     
    </div>
  );
}
export default App;
