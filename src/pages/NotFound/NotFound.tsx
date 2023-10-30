import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

function NotFound() {
	return (
		<div className={styles.root}>
			<h1>Not Found</h1>
			<Link to="/">GO HOME</Link>
		</div>
	);
}

export default NotFound;
