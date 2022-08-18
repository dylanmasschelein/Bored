import { FC } from 'react';
import styles from '../../landing.module.scss';
import CategoryIcon from '@mui/icons-material/Category';
import HardwareIcon from '@mui/icons-material/Hardware';
import { capitalize } from '../../../../../static/global_functions';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DynamicIcons from './DynamicIcons';
import { IActivity } from '../../../../../types';

interface IProps {
	activity: IActivity;
}

const Details: FC<IProps> = ({ activity }) => {
	return (
		<>
			<div className={styles.home__card__container}>
				<p>Type: </p>
				<span className={styles.home__card__type}>{capitalize(activity.type)}</span>
			</div>

			<DynamicIcons heading="price" activity={activity} />
			<DynamicIcons heading="effort" activity={activity} />

			{/* {activity.link && (
				<div className={styles.home__card__container}>
					<p>Link: </p>
					<a href={activity.link} target="_blank">
						{activity.link}
					</a>
				</div>
			)} */}
		</>
	);
};

export default Details;
