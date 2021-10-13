import {combineReducers} from "redux";
import numberReducer from "./numberReducer"

const reducers = combineReducers({
 currentValue: numberReducer
})

export default reducers