import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "../../context";
import Loading from "../Loading";

const CartContainer = () => {
  const { cart, total, clearCart, discount, finalPrice } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your bag is empty</h2>
        <button
          className="btn singing-btn btn-margin"
          onClick={() => document.location.reload(true)}
        >
          Refresh
        </button>
        <Loading />
      </div>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your cart</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <div className="cart-total">
          <h4>
            cash discount <span id="discount">- ${discount}</span>
          </h4>
        </div>

        <hr />
        <div className="cart-total">
          <h4>
            final <span id="final">${finalPrice}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={clearCart}>
          Clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
