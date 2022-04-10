import React, { useState } from 'react';

const initialPriceFilterValue = {
   priceFrom: '',
   priceTo: '',
};

const PriceFilter = ({ handleChangeFilters }) => {
   const [priceFilter, setPriceFilter] = useState(initialPriceFilterValue);

   const handleOnChangePriceFilter = (e) =>
      setPriceFilter({
         ...priceFilter,
         [e.target.name]: e.target.value
            ? Number(e.target.value)
            : e.target.value,
      });
   const handlePriceFilterSubmit = (e, values) => {
      e.preventDefault();
      handleChangeFilters(values);
   };

   return (
      <form
         className='price-filter'
         onSubmit={(e) => handlePriceFilterSubmit(e, priceFilter)}
      >
         <label htmlFor='from'>
            <span>From</span>
            <input
               type='number'
               name='priceFrom'
               value={priceFilter.priceFrom}
               onChange={handleOnChangePriceFilter}
            />
         </label>
         <label htmlFor='to'>
            <span>To</span>
            <input
               type='number'
               name='priceTo'
               value={priceFilter.priceTo}
               onChange={handleOnChangePriceFilter}
            />
         </label>
         <button type='submit'>Filter price</button>
      </form>
   );
};

export default PriceFilter;
