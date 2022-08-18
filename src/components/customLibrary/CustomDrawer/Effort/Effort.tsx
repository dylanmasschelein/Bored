import { FC } from 'react';
import { IHandleChange, IFilterState } from '../../../../types';
import styles from '../drawer.module.scss';

interface IProps {
	effort: string;
	handleChange: IHandleChange;
	filter: IFilterState;
}

const Effort: FC<IProps> = ({ effort, handleChange, filter }) => {
	const effortValue = (effort: string): string => {
		let effortValue = '';
		switch (effort) {
			case 'None':
				effortValue = '0.0';
				break;
			case 'Negligable':
				effortValue = '0.2';
				break;
			case 'Minimum':
				effortValue = '0.4';
				break;
			case 'Moderate':
				effortValue = '0.6';
				break;
			case 'A lot':
				effortValue = '0.8';
				break;
			case 'Maximum':
				effortValue = '1.0';
				break;
		}
		return effortValue;
	};

	return (
		<div
			className={`${styles.filter__btn} ${
				filter.accessibility === effortValue(effort) ? styles.selected : undefined
			}`}
			onClick={() => handleChange('accessibility', effortValue(effort))}
		>
			<p>{effort}</p>
		</div>
	);
};

export default Effort;
