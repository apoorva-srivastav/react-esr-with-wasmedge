import React from 'react';
import { useGetData, useSetData } from '../../context/DataContext';
import { useLocation } from 'react-router-dom';

export const ProductDetails = () => {
    const { state: { product } } = useLocation();
    const value = useSetData()
    const val = useGetData()

    const addSizeToProduct = (value) => {
        console.log('here', value)
    }

    return (
        <div>
            <div key={product.id} className="product-detail-preview flex-detail-parent">
                <img src={product.image} alt='product' className='product-detail-image flex-33' />
                <div className='product-detail-preview-detail flex-33'>

                    <div className='product-detail-desc flex-detail-item'><h3>{product.title}</h3></div>
                    <div className='product-detail-desc flex-detail-item'>Product Description: {product.description}</div>

                    <div className='product-detail-size-buttons'>
                        <h4 className='margin-10'>Select Size</h4>

                        <div className="radio-button">
                            <input type="radio" id="a25" name="check-substitution-2" checked onClick={() => addSizeToProduct('Small')} />
                            <label className="btn btn-default" for="a25">S</label>
                        </div>
                        <div className="radio-button">
                            <input type="radio" id="a50" name="check-substitution-2" onClick={() => addSizeToProduct('Medium')} />
                            <label className="btn btn-default" for="a50">M</label>
                        </div>
                        <div className="radio-button">
                            <input type="radio" id="a75" name="check-substitution-2" onClick={() => addSizeToProduct('Large')} />
                            <label className="btn btn-default" for="a75">L</label>
                        </div>
                    </div>

                    <button className='button product-detail-cart-button' onClick={(() => {
                        val.push(product);
                        value([...val])
                    })}>
                        Add To Cart
                    </button>

                </div>
            </div>
        </div>
    )
}
