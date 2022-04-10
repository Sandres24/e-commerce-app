import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProductsFromCartThunk } from '../../../redux/actions';

const CartModalInfo = ({ cartProduct }) => {
   const dispatch = useDispatch();

   const total =
      cartProduct.productsInCart.quantity * Number(cartProduct.price);

   const handleDeleteProductsFromCart = () =>
      dispatch(deleteProductsFromCartThunk(cartProduct.id));

   return (
      <>
         <div className='product-info'>
            <div className='details'>
               <span className='brand'>{cartProduct.brand}</span>
               <Link to={`/products/${cartProduct.id}`} className='name'>
                  {cartProduct.title}
               </Link>
               <div className='quantity'>
                  {cartProduct.productsInCart.quantity}
               </div>
            </div>
            <div className='button-delete'>
               <button onClick={handleDeleteProductsFromCart}>
                  <i className='fa fa-trash-can'></i>
               </button>
            </div>
         </div>
         <div className='total'>
            <span className='label'>Total: </span>
            <b>$ {total.toFixed(2)}</b>
         </div>
      </>
   );
};

export default CartModalInfo;
