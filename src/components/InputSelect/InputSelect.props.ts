import { Coin } from '../../interfaces/api';

export interface InputSelectProps {
	currencies: Coin[] | null;
	coin: Coin | null;
	setCoin: (coin: Coin) => void;
}
