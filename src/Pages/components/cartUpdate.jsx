import React, { useState } from "react";

export default function CartUpdate() {
  let [products, setProducts] = useState([
    {
        id: 1,
        title: "Zinger Burger",
        price: 1000,
        image: "https://images.kfcpakistan.com/image/1670410356108-image.jpg",
        quantity: 0,
      },
      {
        id: 2,
        title: "Mighty Zinger",
        price: 1500,
        image: "https://images.kfcpakistan.com/image/1670410356108-image.jpg",
        quantity: 0,
      },
      {id: 3,
        title: "Duo Box",
        price: 1800,
        quantity: 0,
        image: "https://images.kfcpakistan.com/image/1670410356108-image.jpg",
      },
      {
        id: 4,
        title: "Zinger Burger",
        price: 1000,
        image: "https://images.kfcpakistan.com/image/1670410356108-image.jpg",
        quantity: 0,
      },
      {
        id: 5,
        title: "Mighty Zinger",
        price: 1500,
        quantity: 0,
        image: "https://images.kfcpakistan.com/image/1670410356108-image.jpg",
      }
      
  ]);

  const incrementQuantity = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  const decrementQuantity = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const addToCart = () => {
    let totalQuantity = products.reduce((sum, product) => sum + product.quantity, 0);
    return totalQuantity;
  };

  const calculateTotalBill = () => {
    let totalPrice = products.reduce(
      (sum, product) => sum + product.quantity * product.price,
      0
    );
    return totalPrice;
  };

  return (
    <div className="container mx-4">
      <h1 className="Header m-4">
        Here are your order details
        <h3>Total Items: {addToCart()}</h3>
        <h3>Total Bill : {calculateTotalBill()}</h3>
      </h1>
      <div className="row row-cols-2 row-cols-md-4 g-4">
        {products.map((p) => (
          <div key={p.id} className="card">
            <img src={p.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{p.title}</h5>
              <p className="card-text">
                Satisfy your craving with your favourite burger in only Rs . {p.price}
              </p>
              <button
                className="btn btn-primary mx-2 secondary"
                onClick={() => incrementQuantity(p.id)}
              >
                +{" "}
              </button>
              <span className="placeholder col-4 mx-2">{p.quantity}</span>
              <button
                className="btn btn-primary mx-2"
                onClick={() => decrementQuantity(p.id)}
              >
                -{" "}
              </button>
              <button className="btn btn-primary" onClick={addToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
