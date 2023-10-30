/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import ButtonSVG from '../ButtonSVG/ButtonSVG';
import InputSource from '../InputSource/InputSource';
import styles from './Exchange.module.css';
import { Coin } from '../../interfaces/api';
import useApiHook from '../../hooks/use-api.hook';
import { PREFIX_V1 } from '../../constants';
import { ExchangeProps } from './Exchange.props';
import InputTarget from '../InputTarget/InputTarget';
import useMinAmount from '../../hooks/use-minAmount.hook';
import useEstimatedAmount from '../../hooks/use-estimatedAmount';
import Loader from '../Loader/Loader';

function Exchange({ setError }: ExchangeProps) {
	const [sourceCoin, setSourceCoin] = useState<Coin | null>(null);
	const [targetCoin, setTargetCoin] = useState<Coin | null>(null);
	const [inputValue, setInputValue] = useState<string>('1');

	const {
		data: currencies,
		loading: loadCurrencies,
		error: loadError
	} = useApiHook<Coin[]>(`${PREFIX_V1}/currencies`, {
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

	useEffect(() => {
		if (minAmount === null || estimatedAmount === null) {
			setError(true);
		} else {
			setError(false);
		}
	}, [setError, minAmount, estimatedAmount]);

	if (minAmountLoading || estimatedAmountLoading) return <Loader />;
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
			<ButtonSVG />
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
