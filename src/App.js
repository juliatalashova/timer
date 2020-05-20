import React, {useState, useEffect} from 'react';
function App() {
  let [counter, setCounter] = useState(3000)
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if(paused) {
      let timer = setInterval(() => {
        setCounter(counter => Math.max(counter - 100, 0))
      }, 100);
      return () => {
        clearInterval(timer);
      };
    }
  }, [paused])

  useEffect(() => {
    if(!paused) {
        setPaused(false)
    }
  }, [paused])

  function startPauseTimer() {
    setPaused(counter ? !paused : false)
  }
  function resetTimer() {
    setPaused(false);
    setCounter(3000)
  }
  return (
    <div className="App">
      <h1>Pomodoro timer</h1>
      <div className="content">
        <div className="time">
          Seconds Left:
          <span>{(counter / 1000).toFixed(1)}</span>
        </div>
        <div className="run">
          Running:
          <span>{paused ? "true" : "false"}</span>
        </div>
      </div>
      <div className="btns-container">
        <button type="button" className="btn-play" disabled={!counter} onClick={startPauseTimer}>
          {paused ? <i className="fa fa-pause fa-2x"></i> : <i className="fa fa-play fa-2x"></i>}
        </button>
        <button type="button" className="btn-stop" onClick={resetTimer}>
          <i className="fa fa-stop fa-2x"></i>
        </button>
      </div>
    </div>
  );
}
import './App.css';
import { FontAwesome } from '@fortawesome/react-fontawesome'

export default App;
