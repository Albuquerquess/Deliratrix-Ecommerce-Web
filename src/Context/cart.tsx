import React from 'react';

// @types
import { LogicCartProps, LogicCartItemProps } from '../@types/LogicCart'

const initialState = {
  handleAddItemToCart: (itemId: number) => {},
  handleRemoveItemToCart: (itemId: number) => {},

};

export const CartContext = React.createContext<LogicCartProps>(initialState)

export const CartProvider: React.FC = ({ children }) => {
  const [cartItem, setCartItem] = React.useState<number[]>([])

  function handleAddItemToCart(itemId: number) {
    setCartItem([...cartItem, itemId])
  }
  function handleRemoveItemToCart(itemId: number) {
    setCartItem(cartItem.filter((item) => item !== itemId))
  }

  return <CartContext.Provider value={{handleAddItemToCart, handleRemoveItemToCart}} >
      {children}
  </CartContext.Provider>;
}