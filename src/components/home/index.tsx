import { useState, FC, useEffect } from 'react';
import { buildQueryString, removeDuplicates } from '../../static/global_functions';
import { getActivityArray } from '../../api';
import { defaultQueryArr } from '../../static/global_vars';
import { useLockedActivities } from '../../../hooks/useLockedActivities';

// Components
import CustomDrawer from '../customLibrary/CustomDrawer';
import LandingPage from './landingPage';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import PrimaryButton from '../customLibrary/PrimaryButton';

// Types
import { IActivity, IFilterState } from '../../types';

interface IProps {
	defaultActivityList: IActivity[];
}

const Home: FC<IProps> = ({ defaultActivityList }) => {
	const [activityList, setActivityList] = useState<IActivity[]>(defaultActivityList);
	const [error, setError] = useState<string>('');
	const [open, setOpen] = useState<boolean>(false);
	const toggleDrawer = () => setOpen((prev: boolean) => !prev);
	const { lockedActivities, isLocked, handleLockedActivity } = useLockedActivities();

	const filterState: IFilterState = {
		participants: '1',
		type: '',
		price: '',
		accessibility: ''
	};

	const [filter, setFilter] = useState<IFilterState>(filterState);

	const handleChange = (name: string, value: string) => {
		setFilter(prev => {
			return { ...prev, [name]: value };
		});
	};

	const handleFilter = async (filter: IFilterState | boolean) => {
		if (!filter) {
			const randomActivities = await getActivityArray(defaultQueryArr);
			const lockedLength = lockedActivities.length;
			randomActivities.splice(0, lockedLength);
			setActivityList([...randomActivities, ...lockedActivities]);
			return randomActivities;
		}
		toggleDrawer();

		const query = buildQueryString(filter);

		// Get array of the same query
		let queryArr = [];
		for (let i = 0; i < 5; i++) {
			queryArr.push(query);
		}

		// Call Api to get a list of queries
		const activities: any = await getActivityArray(queryArr);

		if (activities[0].error) {
			setError(activities[0].error);
			return;
		}

		setActivityList(removeDuplicates(activities));
		return activities;
	};

	const clearFilter = () => {
		setFilter(filterState);
	};

	useEffect(() => {}, [activityList]);

	return (
		<>
			{error ? (
				<>
					<Alert severity="error">
						<AlertTitle>Error</AlertTitle>
						<strong>{error}</strong>
					</Alert>
					<PrimaryButton handleClick={() => setError('')} text="Go Back" />
				</>
			) : (
				<LandingPage
					isLocked={isLocked}
					handleLockedActivity={handleLockedActivity}
					activityList={activityList}
					setActivityList={setActivityList}
					toggleDrawer={toggleDrawer}
					handleFilter={handleFilter}
				/>
			)}
			<CustomDrawer
				open={open}
				toggleDrawer={toggleDrawer}
				handleChange={handleChange}
				filter={filter}
				handleFilter={handleFilter}
				clearFilter={clearFilter}
			/>
		</>
	);
};

export default Home;
