import React, { useReducer, useEffect, createContext, useContext } from "react";
import CartReducer from "./CartReducer";

const url = "https://course-api.com/react-useReducer-cart-project";
const CartContext = createContext();

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
  discount: 0,
  finalPrice: 0,
};

/* separate context just for store page and it's states */
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

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
  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    /* console.log("fetched"); */
    dispatch({ type: "DISPLAY_ITEMS", payload: cart });
  };

  /* sends payload to reducer together with it's id and type('inc' or 'dec') */
  const toggleAmount = (id, type) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  /* calculate the discount and final price every time total value changes */
  useEffect(() => {
    dispatch({ type: "GET_DISCOUNT" });
  }, [state.total]);

  useEffect(() => {
    dispatch({ type: "GET_FINAL" });
  }, [state.total]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider };
