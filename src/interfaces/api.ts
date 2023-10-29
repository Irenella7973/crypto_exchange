export interface Coin {
	ticker: string;
	name: string;
	image: string;
	hasExternalId: boolean;
	isFiat: boolean;
	featured: boolean;
	isStable: boolean;
	supportsFixedRate: boolean;
}

export interface MinAmount {
	minAmount: number;
}

export interface EstimatedAmount {
	fromCurrency: string;
	fromNetwork: string;
	toCurrency: string;
	toNetwork: string;
	flow: string;
	type: string;
	rateId: null | string;
	validUntil: null | string;
	transactionSpeedForecast: null | string;
	warningMessage: null | string;
	depositFee: number;
	withdrawalFee: number;
	userId: null | number;
	fromAmount: number;
	toAmount: number;
}
