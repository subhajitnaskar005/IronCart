import React, { Children, useState, useEffect } from 'react'
import {WhistlistContext} from "./WhistListContext"
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export default function WhisListProvider({children}) {
    const[whistlist, setWhistlist] = useState([])
    // const[updatedWhistlist, setUpdatedWhistlist] = useState([])
    // const[checkoutCart, setCheckoutCart] = useState([])
    // Count the checkout button
    // const[ccartCount, setCCartCount] = useState(0)
    // const[iconType, setIconType] = useState(true)
    const[checkoutCartCount, setCheckoutCartCount] = useState(0)
  return (
    <div>
      <WhistlistContext.Provider value={{whistlist, setWhistlist, checkoutCartCount, setCheckoutCartCount}}>
        {children}
      </WhistlistContext.Provider>
    </div>
  )
}
