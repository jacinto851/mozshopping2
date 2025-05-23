import React from "react";

const products = [
  { name: "LK1 - 110 diamantes", price: "100 MT", image: "https://i.imgur.com/ZmS2Qmj.png" },
  { name: "LK2 - 231 diamantes", price: "190 MT", image: "https://i.imgur.com/ZmS2Qmj.png" },
  { name: "LK3 - 341 diamantes", price: "290 MT", image: "https://i.imgur.com/ZmS2Qmj.png" },
  { name: "LK4 - 451 diamantes", price: "380 MT", image: "https://i.imgur.com/ZmS2Qmj.png" },
  { name: "LK5 - 583 diamantes", price: "400 MT", image: "https://i.imgur.com/ZmS2Qmj.png" },
  { name: "LK6 - 693 diamantes", price: "500 MT", image: "https://i.imgur.com/ZmS2Qmj.png" },
  { name: "LK7 - 1188 diamantes", price: "795 MT", image: "https://i.imgur.com/ZmS2Qmj.png" },
  { name: "LK8 - 2420 diamantes", price: "1600 MT", image: "https://i.imgur.com/ZmS2Qmj.png" },
  { name: "LK9 - 3608 diamantes", price: "2400 MT", image: "https://i.imgur.com/ZmS2Qmj.png" },
  { name: "Free Fire - Passe Mensal", price: "790 MT", image: "https://i.imgur.com/9bBPOkN.png" },
  { name: "Internet Vodacom - 500MB", price: "10 MT", image: "https://i.imgur.com/XWxFlsm.png" },
  { name: "Vodacom - 1GB", price: "19 MT", image: "https://i.imgur.com/XWxFlsm.png" },
  { name: "Vodacom - 5.1GB", price: "95 MT", image: "https://i.imgur.com/XWxFlsm.png" },
  { name: "Vodacom Mensal - 30.4GB", price: "780 MT", image: "https://i.imgur.com/XWxFlsm.png" },
  { name: "Netflix", price: "Ver planos", image: "https://i.imgur.com/6NyPzqM.png" },
  { name: "DSTV", price: "Ver planos", image: "https://i.imgur.com/6a2sJb1.png" }
];

export default function App() {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Moz Shopping Online</h1>
      <div className="grid">
        {products.map((product, index) => (
          <div className="card" key={index}>
            <img src={product.image} alt={product.name} style={{width: "100%", borderRadius: "8px"}} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}