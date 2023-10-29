import { Coin } from '../../interfaces/api';

export interface InputSearchProps {
	currencies: Coin[] | null;
	getSearch: () => void;
	handleSelectCoin: (item: Coin) => void;
}
