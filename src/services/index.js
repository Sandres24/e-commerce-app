import {
   getUser,
   getUserAuth,
   getUserFromLocalStorage,
   removeUserFromLocalStorage,
} from './auth.service';
import { getProducts, getFilteredProducts } from './products.service';
import {
   getCart,
   addProductsToCart,
   deleteProductsFromCart,
} from './cart.service';
import { getCategories } from './categories.service';
import { getPurchasesHistory, makePurchases } from './purchases.service';

export {
   getUser,
   getUserAuth,
   getUserFromLocalStorage,
   removeUserFromLocalStorage,
   getProducts,
   getFilteredProducts,
   getCart,
   addProductsToCart,
   deleteProductsFromCart,
   getCategories,
   getPurchasesHistory,
   makePurchases,
};
