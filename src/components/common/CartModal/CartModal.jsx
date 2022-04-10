import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCartThunk } from '../../../redux/actions';
import { getUserAuth, makePurchases } from '../../../services';
import './CartModal.css';
import CartModalInfo from './CartModalInfo';

const CartModal = ({ isCartModalOpen, setIsCartModalOpen }) => {
   const dispatch = useDispatch();
   const cart = useSelector((state) => state.cart);
   let total = 0;
   cart.forEach((cartProduct) => {
      total =
         total +
         Number(cartProduct.productsInCart.quantity) *
            Number(cartProduct.price);
   });

   const handleMakePurchases = async () => {
      try {
         await makePurchases({}, getUserAuth());
         dispatch(setCartThunk());
         setIsCartModalOpen(!isCartModalOpen);
      } catch (error) {
         console.error(error.response);
      }
   };

   return (
      <div className={isCartModalOpen ? 'cart-modal open' : 'cart-modal'}>
         <div className='cart'>
            <div className='minimalist-scrollbar'>
               <h4>Shopping cart</h4>
               <ul className='cart-products-list'>
                  {cart.map((cartProduct) => (
                     <li key={cartProduct.id}>
                        <CartModalInfo cartProduct={cartProduct} />
                     </li>
                  ))}
               </ul>
            </div>
            <div className='checkout-section'>
               <div className='total'>
                  <span className='label'>Total:</span>
                  <b>$ {total.toFixed(2)}</b>
               </div>
               <button className='buy-button' onClick={handleMakePurchases}>
                  Checkout
               </button>
            </div>
         </div>
      </div>
   );
};

export default CartModal;
