import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { EstimatedAmount } from '../interfaces/api';
import { VITE_API_KEY, VITE_PREFIX_V2 } from '../constants';

const useEstimatedAmount = (
	sourceCoinTicker: string | undefined,
	targetCoinTicker: string | undefined,
	fromAmount: number
) => {
	const [data, setData] = useState<EstimatedAmount | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (sourceCoinTicker && targetCoinTicker) {
			const fetchData = async () => {
				try {
					setLoading(true);
					const response: AxiosResponse<EstimatedAmount> = await axios.get(
						`${VITE_PREFIX_V2}/exchange/estimated-amount`,
						{
							params: {
								fromCurrency: sourceCoinTicker,
								toCurrency: targetCoinTicker,
								fromAmount,
								fromNetwork: sourceCoinTicker,
								toNetwork: targetCoinTicker
							},
							headers: {
								'x-changenow-api-key': VITE_API_KEY
							}
						}
					);
					setLoading(false);
					setError(null);
					setData(response.data);
				} catch (error) {
					setError('This pair is disabled now');
					setLoading(false);
				}
			};

			fetchData();
		}
	}, [sourceCoinTicker, targetCoinTicker, fromAmount]);

	return { data, loading, error };
};

export default useEstimatedAmount;
