import cn from 'classnames';
import { useState } from 'react';
import styles from './InputSelect.module.css';

function InputSelect() {
	const [search, setSearch] = useState<boolean>(true);

	const arr = [
		{
			ticker: 'etharb',
			name: 'Ethereum (Arbitrum)',
			image:
				'https://content-api.changenow.io/uploads/etharbitrum_796401be67.svg',
			hasExternalId: false,
			isFiat: false,
			featured: false,
			isStable: false,
			supportsFixedRate: true
		},
		{
			ticker: 'ethop',
			name: 'Ethereum (Optimism)',
			image: 'https://content-api.changenow.io/uploads/ethop_044f371b26.svg',
			hasExternalId: false,
			isFiat: false,
			featured: false,
			isStable: false,
			supportsFixedRate: true
		},
		{
			ticker: 'zksync',
			name: 'Ethereum (ZkSync Era)',
			image:
				'https://content-api.changenow.io/uploads/ethzksync_f642b927a7.svg',
			hasExternalId: false,
			isFiat: false,
			featured: false,
			isStable: false,
			supportsFixedRate: true
		}
	];

	const getSearch = () => {
		setSearch(!search);
	};

	return (
		<>
			{search && (
				<div className={styles.containerInputSelect}>
					<input type="text" className={styles.input} />
					<img
						src="./delimiter.svg"
						alt="delimiter"
						className={styles.delimiter}
					/>
					<div className={styles.select}>
						{' '}
						<img
							src="https://content-api.changenow.io/uploads/btc_1_527dc9ec3c.svg"
							alt="delimiter"
							className={styles.arrow}
						/>{' '}
						<div className={styles.count}>usd </div>
						<img
							onClick={getSearch}
							aria-hidden="true"
							src="./arrow-icon.svg"
							alt="arrow"
						/>{' '}
					</div>
				</div>
			)}
			{!search && (
				<div className={styles.containerInputSearch}>
					<input
						type="text"
						className={styles.inputSearch}
						placeholder="Search"
					/>
					<img
						onClick={getSearch}
						aria-hidden="true"
						src="./close-icon.svg"
						alt="close	icon"
						className={styles.closeIcon}
					/>
					<div className={styles.options}>
						{arr.map((item) => (
							<div
								className={cn(styles.input, styles.option)}
								key={item.ticker}
							>
								{' '}
								<img src={item.image} alt="delimiter" />{' '}
								<div className={styles.ticker}>{item.ticker}</div>
								<div className={styles.name}>{item.name}</div>
							</div>
						))}
					</div>
				</div>
			)}
		</>
	);
}

export default InputSelect;
