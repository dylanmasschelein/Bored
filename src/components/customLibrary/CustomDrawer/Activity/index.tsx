import { FC, memo } from 'react';
import styles from '../drawer.module.scss';
import Activity from './Activity';
import { IActivityObj, IHandleChange, IFilterState } from '../../../../types';

interface IProps {
	activities: IActivityObj[];
	filter: IFilterState;
	handleChange: IHandleChange;
}

const ActivityFilter: FC<IProps> = ({ activities, handleChange, filter }) => (
	<>
		<h3>Activity Type</h3>
		<div className={styles.filter}>
			{activities.map((activity, idx) => (
				<Activity key={`${activity}-${idx}`} activity={activity} handleChange={handleChange} filter={filter} />
			))}
		</div>
	</>
);

export default memo(ActivityFilter);
