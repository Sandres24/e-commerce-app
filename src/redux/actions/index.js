import {
   getCategories,
   getProducts,
   getFilteredProducts,
   getUser,
   getUserAuth,
   getCart,
   addProductsToCart,
   deleteProductsFromCart,
   getPurchasesHistory,
} from '../../services';

export const actions = {
   isUserModalOpen: 'IS_USER_MODAL_OPEN',
   isLoading: 'IS_LOADING',
   setUser: 'SET_USER',
   setProducts: 'SET_PRODUCTS',
   setCategories: 'SET_CATEGORIES',
   setProductsByCategory: 'SET_PRODUCTS_BY_CATEGORY',
   setCart: 'SET_CART',
   setPurchases: 'SET_PURCHASES',
};

export const setIsUserModalOpen = (isOpen) => ({
   type: actions.isUserModalOpen,
   payload: isOpen,
});

export const isLoading = (loading) => ({
   type: actions.isLoading,
   payload: loading,
});

export const setUser = (user) => ({
   type: actions.setUser,
   payload: user,
});

export const setCart = (cart) => ({
   type: actions.setCart,
   payload: cart,
});

export const setProducts = (products) => ({
   type: actions.setProducts,
   payload: products,
});

export const setCategories = (categories) => ({
   type: actions.setCategories,
   payload: categories,
});

export const setPurchases = (purchasesHistory) => ({
   type: actions.setPurchases,
   payload: purchasesHistory,
});

export const setUserThunk = (credentials) => {
   return async (dispatch) => {
      try {
         dispatch(isLoading(true));
         const loggedUser = await getUser(credentials);
         dispatch(setUser(loggedUser.user));
         dispatch(setCartThunk());
         dispatch(setIsUserModalOpen(false));
      } catch (error) {
         console.error(error);
      } finally {
         dispatch(isLoading(false));
      }
   };
};

export const setCartThunk = () => {
   return async (dispatch) => {
      try {
         dispatch(isLoading(true));
         const userCart = await getCart(getUserAuth());
         dispatch(setCart(userCart));
      } catch (error) {
         dispatch(setCart([]));
         console.error(error.response);
      } finally {
         dispatch(isLoading(false));
      }
   };
};

export const addProductsToCartThunk = (product) => {
   return async (dispatch) => {
      try {
         dispatch(isLoading(true));
         await addProductsToCart(product, getUserAuth());
         dispatch(setCartThunk());
      } catch (error) {
         console.error(error.response);
      } finally {
         dispatch(isLoading(false));
      }
   };
};

export const deleteProductsFromCartThunk = (productId) => {
   return async (dispatch) => {
      try {
         dispatch(isLoading(true));
         await deleteProductsFromCart(productId, getUserAuth());
         dispatch(setCartThunk());
      } catch (error) {
         console.error(error);
      } finally {
         dispatch(isLoading(false));
      }
   };
};

export const setProductsThunk = () => {
   return async (dispatch) => {
      try {
         dispatch(isLoading(true));
         const products = await getProducts();
         dispatch(setProducts(products));
      } catch (error) {
         console.error(error);
      } finally {
         dispatch(isLoading(false));
      }
   };
};

export const setCategoriesThunk = () => {
   return async (dispatch) => {
      try {
         const categories = await getCategories();
         dispatch(setCategories(categories));
      } catch (error) {
         console.error(error);
      }
   };
};

export const setFilteredProductsThunk = (categoryId) => {
   return async (dispatch) => {
      try {
         dispatch(isLoading(true));
         const productsByCategory = await getFilteredProducts(categoryId);
         dispatch(setProducts(productsByCategory));
      } catch (error) {
         console.error(error);
      } finally {
         dispatch(isLoading(false));
      }
   };
};

export const setPurchasesHistoryThunk = () => {
   return async (dispatch) => {
      try {
         dispatch(isLoading(true));
         const purchasesHistory = await getPurchasesHistory(getUserAuth());
         dispatch(setPurchases(purchasesHistory));
      } catch (error) {
         console.error(error);
      } finally {
         dispatch(isLoading(false));
      }
   };
};
