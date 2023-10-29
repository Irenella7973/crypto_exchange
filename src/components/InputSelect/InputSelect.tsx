import { useState } from 'react';
import { InputSelectProps } from './InputSelect.props';
import { Coin } from '../../interfaces/api';
import InputCoin from '../InputCoin/InputCoin';
import InputSearch from '../InputSearch/InputSearch';

function InputSelect({ currencies, coin, setCoin }: InputSelectProps) {
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
			{!isSearchInput && <InputCoin coin={coin} getSearch={getSearch} />}
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

export default InputSelect;
