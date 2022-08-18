import { useState, useEffect, FC } from 'react';
import { IHandleChange, IFilterState } from '../../../../types';
import styles from '../drawer.module.scss';
import Price from './Price';

interface IProps {
	prices: number[];
	handleChange: IHandleChange;
	filter: IFilterState;
}

const PriceFilter: FC<IProps> = ({ prices, handleChange, filter }) => (
	<>
		<h3>Activity Price</h3>
		<div className={styles.filter}>
			{prices.map(price => (
				<Price key={price} price={price} handleChange={handleChange} filter={filter} />
			))}
		</div>
	</>
);

export default PriceFilter;
