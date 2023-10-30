import { Coin } from '../../interfaces/api';

export interface InputTargetProps {
	currencies: Coin[] | null;
	coin: Coin | null;
	setCoin: (coin: Coin) => void;
	amount?: number;
}
