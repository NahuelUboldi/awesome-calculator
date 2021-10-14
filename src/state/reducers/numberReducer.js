
const reducer = (state = {lastValue: "", completeFormula: ""}, action) => {
 switch (action.type) {

case "ADD_NUMBER":
 if (action.number === "0" && state.lastValue[0] === "0" && state.lastValue.length <= 1) {
  return state;
 } 

 else if (action.number === "." && state.lastValue.length === 0){
  let newValue = state.lastValue += "0."
  return {...state,lastValue: newValue};
 } 

 else if (action.number === "." && state.lastValue.length > 0 && state.lastValue.includes(".")){
  return state;
 } 

 else {
  let newValue = state.lastValue += action.number;
  return { ...state, lastValue: newValue };
 }


case "ADD_OPERATOR":
 if (action.operator === state[state.completeFormula.length -1]) {
  return state;
 }
 let tempFormula = state.completeFormula += state.lastValue;
 return {...state,lastValue: action.operator,completeFormula: tempFormula }

 case "DO_ACTION":
 if (action.action === "=") {
  let result = eval(state.completeFormula)
  return {...state, lastValue: result, completeFormula:result}
 } else if (action.action === "AC") {
  return {...state, lastValue: "0", completeFormula: ""}
 } else {
  return state
 }

default:
 return state;
 }
}
export default reducer;