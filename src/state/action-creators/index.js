export const addNumber = (num) => {
 return (dispatch) => {
  dispatch({
   type: "ADD_NUMBER",
   number: num
  })
 }
}
export const addOperator = (operator) => {
 return (dispatch) => {
  dispatch({
   type: "ADD_OPERATOR",
   operator: operator
  })
 }
}
export const doAction = (action) => {
  return (dispatch) => {
    dispatch({
      type: 'DO_ACTION',
      action: action,
    });
  };
};