import { useEffect, useState } from 'react';
import ButtonSVG from '../ButtonSVG/ButtonSVG';
import InputSource from '../InputSource/InputSource';
import { Coin } from '../../interfaces/api';
import useApi from '../../hooks/useApi';
import { VITE_PREFIX_V1 } from '../../constants';
import { ExchangeProps } from './Exchange.props';
import InputTarget from '../InputTarget/InputTarget';
import useMinAmount from '../../hooks/useMinAmount';
import useEstimatedAmount from '../../hooks/useEstimatedAmount';
import Loader from '../Loader/Loader';

function Exchange({ setError }: ExchangeProps) {
	const [sourceCoin, setSourceCoin] = useState<Coin | null>(null);
	const [targetCoin, setTargetCoin] = useState<Coin | null>(null);
	const [inputValue, setInputValue] = useState<string>('1');

	const { data: currencies } = useApi<Coin[]>(`${VITE_PREFIX_V1}/currencies`, {
		params: { active: true, fixedRate: true }
	});

	useEffect(() => {
		if (currencies?.length) {
			setSourceCoin(currencies[0]);
			setTargetCoin(currencies[0]);
		}
	}, [currencies]);

	const {
		data: minAmount,
		loading: minAmountLoading,
		error: minAmountError
	} = useMinAmount(sourceCoin?.ticker, targetCoin?.ticker);

	const {
		data: estimatedAmount,
		loading: estimatedAmountLoading,
		error: estimatedAmountError
	} = useEstimatedAmount(
		sourceCoin?.ticker,
		targetCoin?.ticker,
		Number(inputValue)
	);
	const load = minAmountLoading || estimatedAmountLoading;

	useEffect(() => {
		if (!load && (minAmountError || estimatedAmountError)) {
			setError(true);
		} else {
			setError(false);
		}
	}, [setError, minAmountError, estimatedAmountError, load]);

	useEffect(() => {
		if (minAmount) {
			setInputValue(String(minAmount?.minAmount));
		}
	}, [minAmount]);

	const swapCoins = () => {
		setSourceCoin(targetCoin);
		setTargetCoin(sourceCoin);
	};

	return (
		<>
			<InputSource
				currencies={currencies}
				coin={sourceCoin}
				setCoin={setSourceCoin}
				minAmount={minAmount}
				inputValue={inputValue}
				setInputValue={setInputValue}
			/>
			{load ? <Loader /> : <ButtonSVG onClick={swapCoins} />}
			<InputTarget
				currencies={currencies}
				coin={targetCoin}
				setCoin={setTargetCoin}
				amount={estimatedAmount?.toAmount}
			/>
		</>
	);
}

export default Exchange;
