import classNames from 'classnames';
import styles from './Button.module.css';
import { ButtonPops } from './Button.props';

function Button({
	children,
	className,
	appearence = 'small',
	...props
}: ButtonPops) {
	return (
		<button
			type="button"
			className={classNames(styles.button, styles.accent, className, {
				[styles.small]: appearence === 'small',
				[styles.big]: appearence === 'big'
			})}
			{...props}
		>
			{children}
		</button>
	);
}

export default Button;
