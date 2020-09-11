import React from "react";
import Button from "@material-ui/core/Button";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addtoBasket = () => {
    // console.log("Added");
    dispatch({
      type: "ADD_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p className="title">{title}</p>
        <p className="products_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
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
      </div>
      <img src={image} />
      <button
        variant="contained"
        className="Button"
        size="small"
        component="span"
        onClick={addtoBasket}
      >
        Add to cart
      </button>
    </div>
  );
}

export default Product;
