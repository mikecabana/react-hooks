import { CartItem } from './cart-item.interface';

export interface Cart<T = any> {
	items: CartItem<T>[];
	total: number;
}
