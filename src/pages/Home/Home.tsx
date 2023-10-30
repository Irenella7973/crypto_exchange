import { useState } from 'react';
import Button from '../../components/Button/Button';
import Exchange from '../../components/Exchange/Exchange';
import Title from '../../components/Title/Title';
import styles from './Home.module.css';
import InputAddress from '../../components/InputAddress/InputAddress';

function Home() {
	const [error, setError] = useState(false);

	return (
		<div className={styles.root}>
			<Title />
			<div className={styles.exchangeContainer}>
				<Exchange setError={setError} />
			</div>
			<div className={styles.translationContainer}>
				<InputAddress />
				<Button error={error}>EXCHANGE</Button>
			</div>
		</div>
	);
}

export default Home;
