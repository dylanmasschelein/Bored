import { useState, useEffect, FC, Dispatch, SetStateAction } from 'react';
import styles from './landing.module.scss';
import { capitalize, getRandomInt } from '../../../static/global_functions';
import { IActivity, IActivityResponse, IHandleFilter } from '../../../types';
import CustomSpeedDial from '../../customLibrary/CustomSpeedDial';
import Activity from './Activity';
import Header from './Header';

interface IProps {
	activityList: any;
	handleFilter: IHandleFilter;
	toggleDrawer: () => void;
	setActivityList: Dispatch<SetStateAction<IActivity[]>>;
	handleLockedActivity: (a: IActivity) => void;
	isLocked: (a: IActivity) => boolean;
}

const LandingPage: FC<IProps> = ({
	activityList,
	toggleDrawer,
	handleFilter,
	setActivityList,
	handleLockedActivity,
	isLocked
}) => {
	const handleDelete = (idx: number) => {
		setActivityList(prevList => {
			prevList.splice(idx, 1);
			return [...prevList];
		});
	};
	return (
		<>
			<Header toggleDrawer={toggleDrawer} handleFilter={handleFilter} title="Bored no more!" />
			<div className={styles.home__list}>
				{activityList?.map((activity: any, idx: number) => (
					<Activity
						key={`${activity.key}-${idx}`}
						activity={activity}
						handleDelete={() => handleDelete(idx)}
						handleLockedActivity={handleLockedActivity}
						isLocked={isLocked}
					/>
				))}
			</div>
		</>
	);
};

export default LandingPage;
