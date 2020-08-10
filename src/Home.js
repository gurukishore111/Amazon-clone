import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        src="https://cdn.onebauer.media/one/media/5ecd/034a/d192/6f65/c245/afbd/PrimeDay-Empire-Banner.png?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg"
        alt="Banner"
        className="home_image"
      />
      <div className="home_row">
        <Product
          id="12321341"
          title="Apple:Apple iPhone 11 (128GB) - Black"
          price={73600}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SX679_.jpg"
        />
        <Product
          id="12321341"
          title="Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage,i9 processor) "
          price={229900}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71Ztc9lofJL._SL1500_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="12321341"
          title="Apple Watch Series 3 (GPS, 42mm) "
          price={20900}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71WgOCvKwrL._SL1500_.jpg"
        />{" "}
        <Product
          id="12321341"
          title="Microsoft Surface Go "
          price={54499}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51NJ-qIUCsL._SL1000_.jpg"
        />{" "}
        <Product
          id="12321341"
          title="OPPO F15 (Lightening Black)"
          price={18990}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71xrXGLZtXL._SL1500_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="12321341"
          title="Samsung 27 inch (68.6 cm) Curved Bezel Less LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Display, Audio in, Heaphone Ports - LC27F591FDWXXL (Silver)"
          price={212930}
          rating={4}
          image="https://prod.scorptec.com.au/18/991/73955/161717_large.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
