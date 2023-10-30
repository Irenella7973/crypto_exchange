import { Coin, MinAmount } from '../../interfaces/api';

export interface InputCoinProps {
	coin: Coin | null;
	getSearch: () => void;
	minAmount?: MinAmount | null;
	setInputValue?: (value: string) => void;
	inputValue?: string;
}
