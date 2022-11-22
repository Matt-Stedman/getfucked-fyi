import './App.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import img_gif from "./gf.gif"
import Settings from './Settings';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'


function App() {
  const [name, setName] = useState(false);
  const [confettiRun, setConfettiRun] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const singleValue = queryParams.get("name");
    if (!singleValue) return false;
    setName(singleValue);
  }, []);
  const { width, height } = useWindowSize()

  function delay_on_time(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }


  delay_on_time(2700).then(() => setConfettiRun(true));

  return (
    <div className="App">
      <header className="App-header">
        <Confetti
          initialVelocityY={{ min: -4, max: -10 }}
          gravity={.1}
          wind={0.01}
          confettiSource={{ x: -20 + width / 2, y: -80 + height / 2, w: 40, h: 40 }}
          run={confettiRun}
          recycle={false}
          numberOfPieces={69}
        />
        <p>
          {name !== false ? 'Get fucked, ' + name + '!' : "Get fucked."}
        </p>
        <img src={img_gif} alt="No seriously, get fucked." />
      </header>
      <Settings />
    </div>
  );
}

export default App;
