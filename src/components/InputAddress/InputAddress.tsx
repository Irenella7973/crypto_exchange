import styles from './InputAddress.module.css';

function InputAddress() {
	return (
		<div className={styles.container}>
			<p className={styles.title}>Your Ethereum address</p>
			<input className={styles.input} />
		</div>
	);
}

export default InputAddress;
