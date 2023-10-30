import styles from './ButtonSVG.module.css';
import { ButtonPopsSVG } from './ButtonSVG.props';

function ButtonSVG({ ...props }: ButtonPopsSVG) {
	return (
		<button {...props} type="button" className={styles.swap}>
			<img src="./swap.svg" alt="swap" />
		</button>
	);
}

export default ButtonSVG;
