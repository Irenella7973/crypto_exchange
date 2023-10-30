import { useState } from 'react';
import { InputSourceProps } from './InputSource.props';
import { Coin } from '../../interfaces/api';
import InputCoin from '../InputCoin/InputCoin';
import InputSearch from '../InputSearch/InputSearch';

function InputSource({
	currencies,
	coin,
	setCoin,
	minAmount,
	setInputValue,
	inputValue
}: InputSourceProps) {
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
				<InputCoin
					coin={coin}
					getSearch={getSearch}
					setInputValue={setInputValue}
					inputValue={inputValue}
					minAmount={minAmount}
				/>
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

export default InputSource;
