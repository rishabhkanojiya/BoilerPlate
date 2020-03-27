import { combineReducers } from "redux";
import TransactionData from "./TransactionData";

export default combineReducers({
  transaction: TransactionData
});
