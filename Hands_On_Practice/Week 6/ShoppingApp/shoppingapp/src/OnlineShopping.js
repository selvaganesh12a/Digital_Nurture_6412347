// src/OnlineShopping.js
import React, { Component } from "react";
import Cart from "./Cart";

class OnlineShopping extends Component {
  render() {
    const items = [
      { id: 1, itemname: "Laptop", price: "₹70,000" },
      { id: 2, itemname: "Phone", price: "₹30,000" },
      { id: 3, itemname: "Watch", price: "₹5,000" },
      { id: 4, itemname: "Headphones", price: "₹2,500" },
      { id: 5, itemname: "Mouse", price: "₹1,000" },
    ];

    return (
      <div>
        <center>
          <h2>Your Shopping Cart</h2>
          <table>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <Cart
                  key={item.id}
                  itemname={item.itemname}
                  price={item.price}
                />
              ))}
            </tbody>
          </table>
        </center>
      </div>
    );
  }
}

export default OnlineShopping;
