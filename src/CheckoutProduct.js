import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromCart = () => {
    //remove from basket
    dispatch({
      type: "REMOVE_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutproducts">
      <img src={image} alt="" className="checkout_image" />
      <div className="checkoutproduct_info">
        <p className="checkout_title">{title}</p>
        <p className="checkout_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="Checkoutproduct_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <img
                src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png"
                width="10"
                height="10"
              />
            ))}
        </div>
        <button onClick={removeFromCart}>Remove from cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
