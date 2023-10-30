import cn from 'classnames';
import styles from './InputCoin.module.css';
import { InputCoinProps } from './InputCoin.props';

function InputCoin({
	coin,
	getSearch,
	minAmount,
	setInputValue,
	inputValue
}: InputCoinProps) {
	let errorMinAmount;
	if (minAmount) {
		errorMinAmount = Number(inputValue) < minAmount?.minAmount;
	}

	return (
		<div className={cn(styles.containerInputCoin)}>
			<input
				type="number"
				className={cn(styles.input, {
					[styles.error]: errorMinAmount
				})}
				value={inputValue}
				onChange={(e) => setInputValue && setInputValue(e.target.value)}
			/>
			<img src="./delimiter.svg" alt="delimiter" className={styles.delimiter} />
			<div className={cn(styles.select, { [styles.error]: errorMinAmount })}>
				<img src={coin?.image} alt="delimiter" />
				<div className={styles.ticker}>{coin?.ticker}</div>
				<img
					onClick={getSearch}
					aria-hidden="true"
					src="./arrow-icon.svg"
					alt="arrow"
					className={styles.arrow}
				/>
			</div>
			{errorMinAmount && (
				<span
					className={styles.errorMessage}
				>{`min: ${minAmount?.minAmount}`}</span>
			)}
		</div>
	);
}

export default InputCoin;
