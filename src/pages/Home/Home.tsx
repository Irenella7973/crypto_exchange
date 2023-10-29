import Button from '../../components/Button/Button';
import Exchange from '../../components/Exchange/Exchange';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';

import styles from './Home.module.css';

function Home() {
	return (
		<div className={styles.root}>
			<Title />
			<Exchange />
			<div className={styles.translationContainer}>
				<Input />
				<Button>EXCHANGE</Button>
			</div>
		</div>
	);
}

export default Home;
