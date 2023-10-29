import { useState } from 'react';
import Button from '../../components/Button/Button';
import styles from './Home.module.css';

function Home() {
	const [count, setCount] = useState<number>(0);

	return (
		<div className={styles.root}>
			<h1>Hello World</h1>
			<Button onClick={() => setCount((count) => count - 1)} appearence="small">
				<img className={styles.img} src="./minus-icon.svg" alt="Минус" />
			</Button>
			{count}
			<Button onClick={() => setCount((count) => count + 1)} appearence="small">
				<img className={styles.img} src="./plus-icon.svg" alt="Плюс" />
			</Button>
		</div>
	);
}

export default Home;
