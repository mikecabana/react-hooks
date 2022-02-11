import { createContext, useEffect, useState, useMemo, FC, Dispatch, SetStateAction } from 'react';
import { Cart } from '../models/cart.interface';

export interface CartContextPayload<T = any> {
	cart: Cart<T>;
	setCart: Dispatch<SetStateAction<Cart>>;
}

// initial cart
const initialCart: Cart = { items: [], total: 0 };

/**
 *
 * Context using only state to manage the cart
 *
 */

const initialCartContextUsingState: CartContextPayload = {
	cart: {
		items: [],
		total: 0,
	},
	setCart: (value) => {
		return;
	},
};

export const CartContext = createContext<CartContextPayload>(initialCartContextUsingState);

export const CartProviderUsingState: FC = ({ children }) => {
	const [cart, setCart] = useState<Cart>(initialCart);

	useEffect(() => {
		// get the current local storage cart if there is one
		if (typeof window !== 'undefined') {
			const localCart = localStorage.getItem('cart');
			if (localCart) {
				setCart(JSON.parse(localCart));
			}
		}
	}, []);

	useEffect(() => {
		// set the current local storage cart
		if (typeof window !== 'undefined') {
			localStorage.setItem('cart', JSON.stringify(cart));
		}
	}, [cart]);

	const value = useMemo<CartContextPayload>(() => ({ cart, setCart }), [cart, setCart]);
	// const value = { cart, setCart };

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// export const CartContextUsingReducer: FC = ({ chi}) =>
