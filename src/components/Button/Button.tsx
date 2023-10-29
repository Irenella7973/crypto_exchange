import styles from './Button.module.css';
import { ButtonPops } from './Button.props';

function Button({ children }: ButtonPops) {
	return (
		<button type="button" className={styles.button}>
			{children}
		</button>
	);
}

export default Button;
