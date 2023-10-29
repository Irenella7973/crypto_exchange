import styles from './ButtonSVG.module.css';

function ButtonSVG() {
	return (
		<button type="button" className={styles.swap}>
			<img src="./swap.svg" alt="swap" />
		</button>
	);
}

export default ButtonSVG;
