import React, {useState} from 'react';
import Header from '../Header';
import Charts from '../Charts';
import './index.css';

function App() {
  const [coinSelected, setCoinSelected] = useState("BTC");
  return (
    <div className="App">
     <Header onSelected={(coin) => setCoinSelected(coin)}/>
     <Charts coin={coinSelected}/>
    </div>
  );
}

export default App;
