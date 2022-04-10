import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FiltersModal from '../../../components/common/FiltersModal/FiltersModal';

const ProductsSearchbar = () => {
   const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
   const products = useSelector((state) => state.products);

   useEffect(() => {
      setIsFiltersModalOpen(false);
   }, [products]);

   const handleProductsSearchSubmit = (e) => {
      e.preventDefault();
   };
   const handleFiltersModalOpen = () =>
      setIsFiltersModalOpen(!isFiltersModalOpen);

   return (
      <div className='search-box'>
         <form className='input' onSubmit={handleProductsSearchSubmit}>
            <input
               type='text'
               name='search'
               placeholder='What are you looking for?'
               autoComplete='off'
            />
            <button type='submit'>
               <i className='fa fa-magnifying-glass'></i>
            </button>
         </form>
         <button className='filter-button' onClick={handleFiltersModalOpen}>
            <i className='fa fa-filter'></i> Filters
         </button>
         <FiltersModal
            isFiltersModalOpen={isFiltersModalOpen}
            handleFiltersModalOpen={handleFiltersModalOpen}
         />
         {isFiltersModalOpen && (
            <div className='overlay' onClick={handleFiltersModalOpen}></div>
         )}
      </div>
   );
};

export default ProductsSearchbar;
