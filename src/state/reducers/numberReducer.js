
const reducer = (state = "", action) => {
 switch (action.type) {
case "ADD_NUMBER":
 if (action.payload === "0") {
  return state;
 } else if (action.payload === "." && state.includes(".")){
  return state;
 } else {
  return state += action.payload;

 }
default:
 return state;
 }
}
export default reducer;