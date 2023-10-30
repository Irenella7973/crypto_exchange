import { Coin, MinAmount } from '../../interfaces/api';

export interface InputSourceProps {
	currencies: Coin[] | null;
	coin: Coin | null;
	setCoin: (coin: Coin) => void;
	minAmount: MinAmount | null;
	setInputValue: (value: string) => void;
	inputValue: string;
}
