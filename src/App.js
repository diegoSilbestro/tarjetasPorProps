import './App.css';
import Tarjeta from './Components/Trarjeta';
import Data from './Components/Data';



function App() {
  return (
    <div className="App">
        {
          Data.map(elem=> <div ><Tarjeta data={elem} className='contendorTarjeta'/> </div>)
        }

    </div>
  );
}

export default App;
