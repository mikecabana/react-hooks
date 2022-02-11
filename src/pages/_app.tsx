import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CartProviderUsingState } from '../context/cart-context';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<CartProviderUsingState>
			<Component {...pageProps} />
		</CartProviderUsingState>
	);
}

export default MyApp;
