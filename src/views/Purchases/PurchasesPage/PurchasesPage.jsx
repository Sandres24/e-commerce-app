import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { History } from '../../../components';
import { setPurchasesHistoryThunk } from '../../../redux/actions';
import Purchase from '../Purchase/Purchase';
import './PurchasesPage.css';

const PurchasesPage = () => {
   const dispatch = useDispatch();
   /* const userCart = useSelector((state) => state.cart); */
   const purchasesHistory = useSelector((state) => state.purchases);

   useEffect(() => {
      dispatch(setPurchasesHistoryThunk());
   }, [dispatch]);

   return (
      <section className='main-container purchases'>
         <History title='purchases' />
         <h1>My purchases</h1>
         {purchasesHistory.map((purchase) => (
            <Purchase key={purchase.createdAt} purchasedProducts={purchase} />
         ))}
      </section>
   );
};

export default PurchasesPage;
