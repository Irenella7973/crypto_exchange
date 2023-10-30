import styles from './Button.module.css';
import { ButtonPops } from './Button.props';

const ERROR_MESSAGE = 'This pair is disabled now';

function Button({ children, error }: ButtonPops) {
	return (
		<div className={styles.buttonContainer}>
			<button type="button" className={styles.button}>
				{children}
			</button>
			{error && <span className={styles.errorMessage}>{ERROR_MESSAGE}</span>}
		</div>
	);
}

export default Button;
