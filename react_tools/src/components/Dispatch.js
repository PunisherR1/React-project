/* import { useGlobalContext } from "../context";
import { useEffect } from "react";

const DispatchAction = () => {
  const { state, dispatch } = useGlobalContext();

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };
  const toggleAmount = (id, type) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };

  useEffect(() => {
    dispatch({ type: "GET TOTALS" });
  }, [state.cart, dispatch]);
};

export default DispatchAction;
 */
