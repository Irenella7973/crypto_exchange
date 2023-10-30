import { useState } from 'react';
import { InputTargetProps } from './InputTarget.props';
import { Coin } from '../../interfaces/api';
import InputCoin from '../InputCoin/InputCoin';
import InputSearch from '../InputSearch/InputSearch';

function InputTarget({ currencies, coin, setCoin, amount }: InputTargetProps) {
	const [isSearchInput, setIsSearchInput] = useState<boolean>(false);

	const getSearch = () => {
		setIsSearchInput(!isSearchInput);
	};

	const handleSelectCoin = (item: Coin) => {
		setCoin(item);
		setIsSearchInput(!isSearchInput);
	};

	return (
		<>
			{!isSearchInput && (
				<InputCoin coin={coin} getSearch={getSearch} amount={amount} />
			)}
			{isSearchInput && (
				<InputSearch
					currencies={currencies}
					getSearch={getSearch}
					handleSelectCoin={handleSelectCoin}
				/>
			)}
		</>
	);
}

export default InputTarget;
