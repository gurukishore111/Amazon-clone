import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";
function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="Checkout">
      <div className="Checkout_left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/Leadup/Launches/GWIngress/Revised/2300x646_PD_1X_ENG._CB409658301_.jpg"
          alt=""
          className="checkout_ads"
        />
        {basket?.length === 0 ? (
          <div>
            <h2 className="checkout_titles">Your Shopping Cart is empty</h2>
            <p>
              You have no item in your cart. To buy one or more product ,click
              "Add to cart"
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout_titles">Your Shopping Cart</h2>
            {/* {Listout the product} */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
          <SubTotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
