import styles from './Input.module.css';

function Input() {
	return (
		<div className={styles.container}>
			<p className={styles.title}>Your Ethereum address</p>
			<input type="text" className={styles.input} />
		</div>
	);
}

export default Input;
