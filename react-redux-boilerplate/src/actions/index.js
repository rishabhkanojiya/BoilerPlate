import Axios from "axios";

export const fetchTransaction = term => async dispatch => {
  dispatch({ type: "FETCH_TRANSACTION" });

  try {
    const response = await Axios.get(`/api/transaction/${term}`, {});
    dispatch({
      type: "FETCH_TRANSACTION_SUCCESS",
      payload: response.data
    });
  } catch (error) {
    dispatch({ type: "FETCH_TRANSACTION_FAILURE", error });
  }
};
