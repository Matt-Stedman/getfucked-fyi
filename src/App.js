import './App.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import img_gif from "./gf.gif"
import Settings from './Settings';


function App() {
  const [name, setName] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const singleValue = queryParams.get("name");
    if (!singleValue) return false;
    setName(singleValue);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {name !== false ? 'Get fucked, ' + name + '!' : "Get fucked."}
        </p>
        <img src={img_gif} alt="No seriously, get fucked."/>
      </header>
      <Settings/>
    </div>
  );
}

export default App;
