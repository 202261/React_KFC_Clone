// import React, { useState } from "react";

// export default function () {
//   let [products, setproducts] = useState([
//     {
//       id: 1,
//       title: "Zinger Burger",
//       price: 1000,
//       image: "https://images.kfcpakistan.com/image/1670410356108-image.jpg",
//       quantity: 0,
//     },
//     {
//       id: 2,
//       title: "Mighty Zinger",
//       price: 1500,
//       image: "https://images.kfcpakistan.com/image/1670410356108-image.jpg",
//       quantity: 0,
//     },
//     {
//       id: 3,
//       title: "Duo Box",
//       price: 1800,
//       image: "https://images.kfcpakistan.com/image/1670410356108-image.jpg",
//     },
//     {
//       id: 4,
//       title: "Zinger Burger",
//       price: 1000,
//       image: "https://images.kfcpakistan.com/image/1670410356108-image.jpg",
//       quantity: 0,
//     },
//     {
//       id: 5,
//       title: "Mighty Zinger",
//       price: 1500,
//       image: "https://images.kfcpakistan.com/image/1670410356108-image.jpg",
//     },
//     {
//       id: 6,
//       title: "Duo Box",
//       price: 1800,
//       image: "https://images.kfcpakistan.com/image/1670410356108-image.jpg",
//       quantity: 0,
//     },
//   ]);
//   };

//   const incrementQuantity = () => {
//       setproducts(...products,prducts.quantity - 1);
//   }
//   const decrementQuantity = () => {
//     if (prducts.quantity > 0) {
//       setproducts(...products , prducts.quantity - 1);
//     }
//   };

//   // const addtocart = () => {
//   //   setupdatecart(updatecart +products.price);
//   // };

//   return (
//     <div className="container mx-4">
//       <h1 className="Header m-4">
//         Here are your order details
//         <>
//           <h3> Cart Items : {incrementQuantity}</h3>
//         </>
//         <>
//           <h3>Cart Total : {}</h3>
//         </>
//       </h1>
//       <div className="row row-cols-2 row-cols-md-4 g-4">
//         {products.map((p) => (
//           <div className="card">
//             <img src={p.image} claasName="card-img-top" alt="..." />
//             <div className="card-body">
//               <h5 classsName="card-title">{p.title}</h5>
//               <p className="card-text">
//                 Satisfy your craving with your favourite burger in only Rs .
//                 {p.price}
//               </p>
//               <button
//                 href="#"
//                 className="btn btn-primary mx-2 secondary"
//                 onClick={incrementQuantity}
//               >
//                 {" "}
//                 +{" "}
//               </button>
//               <span class="placeholder col-4 mx-2">{}</span>
//               <button
//                 href="#"
//                 className="btn btn-primary mx-2"
//                 onClick={() => (decrementQuantity)}
//               >
//                 {" "}
//                 -{" "}
//               </button>
//               <button href="#" className="btn btn-primary">
//                 Add to Bucket
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
        
