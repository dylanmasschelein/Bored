import { IActivity } from '../types';

export const getActivityArray = async (queryArr: string[]): Promise<IActivity[]> => {
	const array = await Promise.all(
		queryArr.map(async query => {
			const res = await fetch(`http://www.boredapi.com/api/activity${query}`, { method: 'GET' });
			const activity = await res.json();
			return activity;
		})
	);
	return array;
};
