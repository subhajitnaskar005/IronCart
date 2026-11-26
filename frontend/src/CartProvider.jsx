import React, { createContext, useState } from 'react'
// import Cart from './Cart'

const CartContext = createContext(null)
export default function CartProvider({children}) {  
  return (
    <div>
      <CartContext.Provider>
        {children}
      </CartContext.Provider>
    </div>
  )
}
