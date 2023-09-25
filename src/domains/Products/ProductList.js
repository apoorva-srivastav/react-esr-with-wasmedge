import React from 'react';
import { useHistory } from 'react-router-dom';
export const ProductList = ({ data }) => {
  const history = useHistory()
  const products = typeof data === 'string' ? JSON.parse(data).products : data.products

  return (
    <>
      {products.map(product => (
        <div key={product.id} className="product-preview flex-parent" onClick={() => history.push({
          pathname: `/product/${product.id}`,
          state: { product }
        })}>
          <img src={product.image} alt='product' className='flex-item product-image' />
          <div className='product-preview-desc flex-item'>{product.title}</div>
        </div>
      ))}
    </>
  )
}

