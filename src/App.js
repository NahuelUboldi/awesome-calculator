import "./app.css"
import { useSelector, useDispatch } from "react-redux"
import {bindActionCreators} from "redux"
import { actionCreators } from "./state/index"
import { doAction } from "./state/action-creators"


function App() {
  const state = useSelector((state) => state.currentValue)
  const dispatch = useDispatch()

    const {addNumber,addOperator, doAction} = bindActionCreators(actionCreators, dispatch)
console.log(state);

  return (
    <div className='container d-flex align-items-center justify-content-center'>
      <div id="calculator">

        <div id='display' className="text-warning">
          <div className="complete-formula">{state.completeFormula}</div>
          <div className="current-value">{state.lastValue}</div>
        </div>
        
        <div className="numbers-container">

          <div className='number' id='zero' onClick={() => addNumber('0')}>
            0
          </div>
          <div className='number' id='one' onClick={() => addNumber('1')}>
            1
          </div>
          <div className='number' id='two' onClick={() => addNumber('2')}>
            2
          </div>
          <div className='number' id='three' onClick={() => addNumber('3')}>
            3
          </div>
          <div className='number' id='four' onClick={() => addNumber('4')}>
            4
          </div>
          <div className='number' id='five' onClick={() => addNumber('5')}>
            5
          </div>
          <div className='number' id='six' onClick={() => addNumber('6')}>
            6
          </div>
          <div className='number' id='seven' onClick={() => addNumber('7')}>
            7
          </div>
          <div className='number' id='eight' onClick={() => addNumber('8')}>
            8
          </div>
          <div className='number' id='nine' onClick={() => addNumber('9')}>
            9
          </div>
          <div className='number' id='decimal' onClick={() => addNumber('.')}>
            .
          </div>
          <div className='operators' id='add' onClick={() => addOperator('+')}>
            +
          </div>
          <div className='operators' id='subtract' onClick={() => addOperator('-')}>
            -
          </div>
          <div className='operators' id='multiply' onClick={() => addOperator('*')}>
            *
          </div>
          <div className='operators' id='divide' onClick={() => addOperator('/')}>
            /
          </div>
          <div className='action' id='equals' onClick={() => doAction('=')}>
            =
          </div>
          <div className='action' id='clear' onClick={() => doAction('AC')}>
            AC
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
