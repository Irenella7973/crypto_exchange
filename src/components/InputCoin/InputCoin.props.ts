import { Coin } from '../../interfaces/api';

export interface InputCoinProps {
	coin: Coin | null;
	getSearch: () => void;
}
