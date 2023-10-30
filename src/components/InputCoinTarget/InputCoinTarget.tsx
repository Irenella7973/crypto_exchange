import cn from 'classnames';
import styles from './InputCoinTarget.module.css';
import { InputCoinTargetProps } from './InputCoinTarget.props';

function InputCoinTarget({ coin, getSearch, amount }: InputCoinTargetProps) {
	let errorMinAmount;

	return (
		<div className={cn(styles.containerInputCoin)}>
			<input
				type="number"
				className={cn(styles.input, {
					[styles.error]: errorMinAmount
				})}
				value={amount}
				readOnly
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
		</div>
	);
}

export default InputCoinTarget;
