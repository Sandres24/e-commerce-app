import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoriesThunk } from '../../../redux/actions';
import FiltersSection from '../FiltersSection/FiltersSection';
import ProductCard from '../ProductCard/ProductCard';
import ProductsSearchbar from '../ProductsSearchbar/ProductsSearchbar';
import './ProductsPage.css';

const ProductsPage = () => {
   const dispatch = useDispatch();
   const loading = useSelector((state) => state.app.isLoading);
   const products = useSelector((state) => state.products);
   const userCart = useSelector((state) => state.cart);

   useEffect(() => {
      dispatch(setCategoriesThunk());
   }, [dispatch]);

   return (
      <div className='ProductsPage'>
         <aside>
            <div className='fixed'>
               <FiltersSection />
            </div>
         </aside>
         <section className='main-container'>
            <ProductsSearchbar />
            <ul className='products-list'>
               {products.length === 0 && !loading && 'No products found'}
               {products.length > 0 &&
                  products.map((product) => (
                     <li key={product.id}>
                        <ProductCard product={product} userCart={userCart} />
                     </li>
                  ))}
            </ul>
         </section>
      </div>
   );
};

export default ProductsPage;
