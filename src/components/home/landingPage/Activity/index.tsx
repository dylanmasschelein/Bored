import { FC } from 'react';
import styles from '../landing.module.scss';
import { useLocalStorage } from '../../../../../hooks/useLocalStorage';

// Components
import Details from './Details';
import Actions from './Actions';
import PeopleIcon from '@mui/icons-material/People';

// Types
import { IActivity } from '../../../../types';

interface IProps {
	activity: IActivity;
	handleDelete?: () => void;
	handleLockedActivity?: (a: IActivity) => void;
	isLocked?: (a: IActivity) => boolean;
	hideAction?: boolean;
}

const Activity: FC<IProps> = ({ activity, handleDelete, handleLockedActivity, isLocked, hideAction }) => {
	const { handleFavorite, itemInStorage } = useLocalStorage('activityList', activity);
	return (
		<div className={styles.home__card} role="activity-card">
			<div className={styles.home__card__header}>
				<h3 className={styles.home__card__title}>{activity.activity}</h3>
				<p className={styles.home__card__participants}>
					<PeopleIcon />
					<span>{activity.participants}</span>
				</p>
			</div>
			<Details activity={activity} />
			<Actions
				isLocked={isLocked}
				handleLockedActivity={handleLockedActivity}
				activity={activity}
				handleDelete={handleDelete}
				handleFavorite={handleFavorite}
				favorited={Boolean(itemInStorage)}
				hideAction={hideAction}
			/>
		</div>
	);
};

export default Activity;
