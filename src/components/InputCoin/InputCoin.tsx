import styles from './InputCoin.module.css';
import { InputCoinProps } from './InputCoin.props';

function InputCoin({ coin, getSearch }: InputCoinProps) {
	return (
		<div className={styles.containerInputCoin}>
			<input type="text" className={styles.input} />
			<img src="./delimiter.svg" alt="delimiter" className={styles.delimiter} />
			<div className={styles.select}>
				{' '}
				<img src={coin?.image} alt="delimiter" />
				<div className={styles.count}>{coin?.ticker}</div>
				<img
					onClick={getSearch}
					aria-hidden="true"
					src="./arrow-icon.svg"
					alt="arrow"
					className={styles.arrow}
				/>{' '}
			</div>
		</div>
	);
}

export default InputCoin;
