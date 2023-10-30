import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { MinAmount } from '../interfaces/api';
import { API_KEY, PREFIX_V1 } from '../constants';

const useMinAmount = (
	sourceCoinTicker: string | undefined,
	targetCoinTicker: string | undefined
) => {
	const [data, setData] = useState<MinAmount | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (sourceCoinTicker && targetCoinTicker) {
			const fetchData = async () => {
				try {
					setLoading(true);
					const response: AxiosResponse<MinAmount> = await axios.get(
						`${PREFIX_V1}/min-amount/${sourceCoinTicker}_${targetCoinTicker}`,
						{
							params: {
								api_key: API_KEY
							}
						}
					);
					setData(response.data);
					setLoading(false);
				} catch (error) {
					setError('This pair is disabled now');
					setLoading(false);
				}
			};

			fetchData();
		}
	}, [sourceCoinTicker, targetCoinTicker]);

	return { data, loading, error };
};

export default useMinAmount;
