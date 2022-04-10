import React, { useState } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import UserModal from '../UserModal/UserModal';
import SignupForm from '../SignupForm/SignupForm';
import UserDetails from '../UserDetails/UserDetails';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsUserModalOpen } from '../../../redux/actions';
import CartModal from '../CartModal/CartModal';

const Navbar = () => {
   const navigate = useNavigate();

   const dispatch = useDispatch();
   const isUserModalOpen = useSelector((state) => state.app.isUserModalOpen);
   const [isCartModalOpen, setIsCartModalOpen] = useState(false);
   const [switchForm, setSwitchForm] = useState(true);
   const loggedUser = useSelector((state) => state.app.loggedUser);

   const handleUserModalOpen = () =>
      dispatch(setIsUserModalOpen(!isUserModalOpen));
   const handleCartModalOpen = () => {
      if (loggedUser) {
         setIsCartModalOpen(!isCartModalOpen);
      } else {
         dispatch(setIsUserModalOpen(!isUserModalOpen));
      }
   };
   const handleSwitchForm = () => setSwitchForm(!switchForm);
   const handleGoToPurchases = () => {
      if (loggedUser) {
         navigate('/purchases');
      } else {
         dispatch(setIsUserModalOpen(!isUserModalOpen));
      }
   };

   return (
      <div className='navbar'>
         <div className='fixed'>
            <nav>
               <div className='e-commerce-title'>
                  <Link to='/'>
                     <strong>e-commerce</strong>
                  </Link>
               </div>
               <button
                  className='btn-nav-icon'
                  style={{ color: isUserModalOpen ? 'var(--primary)' : '' }}
                  onClick={handleUserModalOpen}
               >
                  <i className='fa fa-user'></i>
               </button>
               <button className='btn-nav-icon' onClick={handleGoToPurchases}>
                  <i className='fa fa-box-archive'></i>
               </button>
               <button
                  className='btn-nav-icon'
                  style={{ color: isCartModalOpen ? 'var(--primary)' : '' }}
                  onClick={handleCartModalOpen}
               >
                  <i className='fa fa-cart-shopping'></i>
               </button>
               <CartModal
                  isCartModalOpen={isCartModalOpen}
                  setIsCartModalOpen={setIsCartModalOpen}
               />
               <UserModal isUserModalOpen={isUserModalOpen}>
                  {switchForm && !loggedUser && (
                     <LoginForm handleSwitchForm={handleSwitchForm} />
                  )}
                  {!switchForm && !loggedUser && (
                     <SignupForm
                        handleSwitchForm={handleSwitchForm}
                        handleUserModalOpen={handleUserModalOpen}
                     />
                  )}
                  {loggedUser && (
                     <UserDetails handleUserModalOpen={handleUserModalOpen} />
                  )}
               </UserModal>
               {(isUserModalOpen || isCartModalOpen) && (
                  <div
                     className='overlay'
                     onClick={() => {
                        if (isUserModalOpen) handleUserModalOpen();
                        if (isCartModalOpen) handleCartModalOpen();
                     }}
                  ></div>
               )}
            </nav>
         </div>
      </div>
   );
};

export default Navbar;
