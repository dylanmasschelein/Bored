import { useState, useEffect, FC } from 'react';
import { IHandleChange, IFilterState } from '../../../../types';
import styles from '../drawer.module.scss';
import Effort from './Effort';

interface IProps {
	effortLevels: string[];
	handleChange: IHandleChange;
	filter: IFilterState;
}

const EffortFilter: FC<IProps> = ({ effortLevels, handleChange, filter }) => (
	<>
		<h3>Activity Effort</h3>
		<div className={styles.filter}>
			{effortLevels.map(effort => (
				<Effort key={effort} effort={effort} handleChange={handleChange} filter={filter} />
			))}
		</div>
	</>
);

export default EffortFilter;
