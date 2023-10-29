/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import ButtonSVG from '../ButtonSVG/ButtonSVG';
import InputSelect from '../InputSelect/InputSelect';
import styles from './Exchange.module.css';
import { Coin, EstimatedAmount, MinAmount } from '../../interfaces/api';
import useApiHook from '../../hooks/use-api.hook';
import { PREFIX_V1, PREFIX_V2, API_KEY } from '../../constants';

function Exchange() {
	const [sourceCoin, setSourceCoin] = useState<Coin | null>(null);
	const [targetCoin, setTargetCoin] = useState<Coin | null>(null);

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
		loading: loadMinAmount,
		error: errorMinAmount
	} = useApiHook<MinAmount>(`${PREFIX_V1}/min-amount/etc_btc`, {
		params: {
			api_key: `${API_KEY}`
		}
	});

	const {
		data: estimatedAmount,
		loading: loadEstimatedAmount,
		error: errorEstimatedAmount
	} = useApiHook<EstimatedAmount>(`${PREFIX_V2}/exchange/estimated-amount`, {
		params: {
			fromCurrency: `${sourceCoin?.ticker}`,
			toCurrency: `${targetCoin?.ticker}`,
			fromAmount: 1,
			fromNetwork: `${sourceCoin?.ticker}`,
			toNetwork: `${targetCoin?.ticker}`
		},
		headers: {
			'x-changenow-api-key': `${API_KEY}`
		}
	});

	const error = errorEstimatedAmount || errorMinAmount;

	return (
		<div className={styles.container}>
			<InputSelect
				currencies={currencies}
				coin={sourceCoin}
				setCoin={setSourceCoin}
			/>
			<ButtonSVG />
			<InputSelect
				currencies={currencies}
				coin={targetCoin}
				setCoin={setTargetCoin}
			/>
		</div>
	);
}

export default Exchange;
