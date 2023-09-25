import React, { useState } from "react";
import { useGetData, useSetData } from "../../context/DataContext";

const Cart = () => {
  const setCartValue = useSetData()
  const cartValue = useGetData()
  const [isOrderPlaced, setOrderPlaced] = useState(false)

  return (
    <div className="flex-parent">{
      isOrderPlaced ? <h2 className="item-center">Your order is placed !</h2> :
        (cartValue.length !== 0) ? <div className="flex-parent flex-item">
          {cartValue.map(product => (
            <div key={product.id} className="product-preview  flex-item">
              <img src={product.image} alt='product' height="50px" width="50px" />
              <div className='product-preview-desc'>{product.title}</div>
            </div>
          ))}
          <button className="button" onClick={() => {
            setOrderPlaced(true)
            setCartValue([])
          }}>Buy</button>
        </div> : <h2 className="item-center">Add a Product To Your Cart</h2>
    }
    </div>

  );
}

export default Cart;