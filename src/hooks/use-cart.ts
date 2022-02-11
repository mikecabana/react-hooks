import { useContext } from 'react';
import { CartContext, CartContextPayload } from '../context/cart-context';

export const useCart: <T = any>() => CartContextPayload<T> = () => useContext(CartContext);
