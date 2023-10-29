import ButtonSVG from '../ButtonSVG/ButtonSVG';
import InputSelect from '../InputSelect/InputSelect';
import styles from './ExchangeInputs.module.css';

function ExchangeInputs() {
	return (
		<div className={styles.container}>
			<InputSelect />
			<ButtonSVG />
			<InputSelect />
		</div>
	);
}

export default ExchangeInputs;
