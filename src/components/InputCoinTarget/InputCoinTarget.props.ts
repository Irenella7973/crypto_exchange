import { Coin } from '../../interfaces/api';

export interface InputCoinTargetProps {
	coin: Coin | null;
	getSearch: () => void;
	amount?: number;
}
