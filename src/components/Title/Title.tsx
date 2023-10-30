import styles from './Title.module.css';

function Title() {
	return (
		<div className={styles.header}>
			<p className={styles.title}>Crypto Exchange</p>
			<p className={styles.description}>Exchange fast and easy</p>
		</div>
	);
}

export default Title;
