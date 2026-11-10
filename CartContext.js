
import React, { createContext, useState } from 'react';

// Create global context
export const CartContext = createContext();

// Provider component
export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {

    setCart((previousCart) => {

      const existingProduct = previousCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return previousCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...previousCart,
        { ...product, quantity: 1 }
      ];

    });

  };

  // Remove product from cart
  const removeFromCart = (id) => {

    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== id)
    );

  };

  // Update product quantity
  const updateQuantity = (id, amount) => {

    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

  };

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );

}
