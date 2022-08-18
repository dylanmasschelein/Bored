import { FC } from 'react';
import { IHandleChange, IFilterState } from '../../../../types';
import styles from '../drawer.module.scss';

interface IProps {
	price: number;
	handleChange: IHandleChange;
	filter: IFilterState;
}

const Price: FC<IProps> = ({ price, handleChange, filter }) => (
	<div
		role="price-option"
		className={`${styles.filter__btn} ${filter.price === (price / 5).toString() ? styles.selected : undefined}`}
		onClick={() => handleChange('price', price ? (price / 5).toString() : '0')}
	>
		<p>{price ? '$'.repeat(price) : 'Free'}</p>
	</div>
);

export default Price;
