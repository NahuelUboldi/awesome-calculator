import "./app.css"
import { useSelector } from "react-redux"
function App() {
  const state = useSelector((state) => state)
console.log(state);
  return (
    <div className='container d-flex align-items-center justify-content-center'>
      <div className='cuadrado'></div>
      <div id="display"></div>
      <div className="number" id='zero'>0</div>
      <div className="number" id='one'>1</div>
      <div className="number" id='two'>2</div>
      <div className="number" id='three'>3</div>
      <div className="number" id='four'>4</div>
      <div className="number" id='five'>5</div>
      <div className="number" id='six'>6</div>
      <div className="number" id='seven'>7</div>
      <div className="number" id='eight'>8</div>
      <div className="number" id='nine'>9</div>
      <div className="number" id='decimal'>.</div>
      <div className="operators" id='equals'>=</div>
      <div className="operators" id='add'>+</div>
      <div className="operators" id='subtract'>-</div>
      <div className="operators" id='multiply'>*</div>
      <div className="operators" id='divide'>/</div>
      <div className="operators" id='clear'>AC</div>
    </div>
  );
}

export default App;
