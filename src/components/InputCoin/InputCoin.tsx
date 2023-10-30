import cn from 'classnames';
import styles from './InputCoin.module.css';
import { InputCoinProps } from './InputCoin.props';

function InputCoin({
	coin,
	getSearch,
	minAmount,
	setInputValue,
	inputValue,
	amount
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
				value={amount}
				onChange={(e) => setInputValue && setInputValue(e.target.value)}
				defaultValue={minAmount?.minAmount}
			/>
			<img src="./delimiter.svg" alt="delimiter" className={styles.delimiter} />
			<div className={cn(styles.select, { [styles.error]: errorMinAmount })}>
				<img src={coin?.image} alt="delimiter" />
				<div className={styles.count}>{coin?.ticker}</div>
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
