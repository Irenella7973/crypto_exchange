import cn from 'classnames';
import { useState } from 'react';
import styles from './InputSearch.module.css';
import { InputSearchProps } from './InputSearch.props';

function InputSearch({
	currencies,
	getSearch,
	handleSelectCoin
}: InputSearchProps) {
	const [search, setSearch] = useState<string>('');
	const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

	const searchCurrencie = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;

		if (timer) {
			clearTimeout(timer);
		}

		const newTimer = setTimeout(() => {
			setSearch(value);
		}, 2000);

		setTimer(newTimer);
	};

	if (search && currencies) {
		currencies = currencies?.filter(
			(item) =>
				item.ticker.toLowerCase().includes(search.toLowerCase()) ||
				item.name.toLowerCase().includes(search.toLowerCase())
		);
	}
	return (
		<div className={styles.containerInputSearch}>
			<input
				type="text"
				className={styles.inputSearch}
				placeholder="Search"
				onChange={searchCurrencie}
			/>
			<img
				onClick={getSearch}
				aria-hidden="true"
				src="./close-icon.svg"
				alt="close	icon"
				className={styles.closeIcon}
			/>
			<div className={styles.options}>
				{currencies &&
					currencies.map((item) => (
						<div
							className={cn(styles.input, styles.option)}
							key={item.ticker}
							onClick={() => handleSelectCoin(item)}
							aria-hidden="true"
						>
							<img src={item.image} alt="icon coin" />
							<div className={styles.ticker}>{item.ticker}</div>
							<div className={styles.name}>{item.name}</div>
						</div>
					))}
			</div>
		</div>
	);
}

export default InputSearch;
