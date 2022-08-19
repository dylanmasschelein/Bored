import { FC } from 'react';
import styles from '../landing.module.scss';

// Components
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import LockIcon from '@mui/icons-material/Lock';
import { IActivity } from '../../../../types';

interface IProps {
	favorited: boolean;
	handleFavorite: () => void;
	activity: IActivity;
	handleDelete?: () => void;
	handleLockedActivity?: (a: IActivity) => void;
	isLocked?: (a: IActivity) => boolean;
	favorite: boolean | undefined;
}

const Actions: FC<IProps> = ({
	favorited,
	handleLockedActivity,
	isLocked,
	handleFavorite,
	handleDelete,
	activity,
	favorite
}) => {
	const locked = isLocked ? isLocked(activity) : undefined;
	return (
		<div className={styles.home__card__actions}>
			<FavoriteIcon
				className={styles.home__card__actions__icon}
				sx={{ color: `${favorited || favorite ? 'red' : undefined}` }}
				onClick={handleFavorite}
			/>
			{!favorite && (
				<>
					<DeleteIcon className={styles.home__card__actions__icon} onClick={handleDelete} />
					<LockIcon
						className={styles.home__card__actions__icon}
						sx={{ color: `${locked ? 'gold' : undefined}` }}
						onClick={handleLockedActivity ? () => handleLockedActivity(activity) : undefined}
					/>
				</>
			)}
		</div>
	);
};

export default Actions;
