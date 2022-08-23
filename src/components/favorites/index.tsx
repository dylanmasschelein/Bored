import { useState, useEffect, FC } from 'react';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { IActivity } from '../../types';
import Activity from '../home/landingPage/Activity';
import Header from '../home/landingPage/Header';
import styles from './favorites.module.scss';

interface IProps {}

const Favorites: FC<IProps> = () => {
	const { store } = useLocalStorage('activityList');

	return (
		<>
			<Header favoritesPage title="Favorites" />
			<div className={styles.favorites}>
				{store ? (
					store.map((activity: IActivity, idx: number) => (
						<Activity key={`${activity.key}-${idx}`} activity={activity} favorite />
					))
				) : (
					<h1>You have not saved any activities yet!</h1>
				)}
			</div>
		</>
	);
};

export default Favorites;
