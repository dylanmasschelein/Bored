import { useState } from 'react';
import { IActivity } from '../src/types';

export const useLockedActivities = () => {
	const [lockedActivities, setLockedActivities] = useState<IActivity[]>([]);

	const addActivity = (activity: IActivity) => {
		setLockedActivities([...lockedActivities, activity]);
	};

	const removeActivity = (activity: IActivity) => {
		setLockedActivities(lockedActivities.filter(a => a.key !== activity.key));
	};

	const handleLockedActivity = (activity: IActivity) => {
		if (lockedActivities.find(a => a.key === activity.key)) {
			removeActivity(activity);
		} else {
			addActivity(activity);
		}
	};

	const isLocked = (activity: IActivity) => {
		return Boolean(lockedActivities.find(a => a.key === activity.key));
	};

	return { lockedActivities, handleLockedActivity, isLocked };
};
