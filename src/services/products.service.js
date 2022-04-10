import axios from 'axios';
import { endpoints } from '../utils';

export const getProducts = async () => {
   try {
      const controller = new AbortController();
      const signal = controller.signal;

      const { data } = await axios.get(endpoints.productsUrl, { signal });

      setTimeout(() => {
         controller.abort();
      }, 4000);

      return data.data.products;
   } catch (error) {
      return Promise.reject(error.response);
   }
};

export const getFilteredProducts = async (filters) => {
   try {
      const controller = new AbortController();
      const signal = controller.signal;

      const { data } = await axios.get(
         endpoints.productsUrl + '?category=' + filters.categoryId,
         { signal }
      );

      let filteredProducts = data.data.products;
      if (filters.priceTo) {
         filteredProducts = filteredProducts.filter(
            (product) =>
               product.price > (filters.priceFrom || 0) &&
               product.price < filters.priceTo
         );
      } else {
         filteredProducts = filteredProducts.filter(
            (product) => product.price > (filters.priceFrom || 0)
         );
      }

      setTimeout(() => {
         controller.abort();
      }, 4000);

      return filteredProducts;
   } catch (error) {
      return Promise.reject(error);
   }
};
