import axios from 'axios';
import { endpoints } from '../utils';

export const getUser = async (credentials) => {
   try {
      const controller = new AbortController();
      const signal = controller.signal;

      const { data } = await axios.post(endpoints.loginUrl, credentials, {
         signal,
      });

      const userInfo = {
         user: {
            id: data.data.user.id,
            firstName: data.data.user.firstName,
            lastName: data.data.user.lastName,
         },
         token: data.data.token,
      };

      window.localStorage.setItem('loggedUser', JSON.stringify(userInfo));

      setTimeout(() => {
         controller.abort();
      }, 4000);

      return userInfo;
   } catch (error) {
      console.error(error.response.data.message);
      return Promise.reject(error.response);
   }
};

export const getUserFromLocalStorage = () => {
   return JSON.parse(window.localStorage.getItem('loggedUser'));
};

export const removeUserFromLocalStorage = () =>
   window.localStorage.removeItem('loggedUser');

export const getUserAuth = () => ({
   headers: {
      Authorization: `Bearer ${getUserFromLocalStorage().token}`,
   },
});
