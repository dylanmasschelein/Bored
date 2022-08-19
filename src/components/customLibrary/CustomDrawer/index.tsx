import { FC } from 'react';
import styles from './drawer.module.scss';
import { IActivityObj, IHandleChange, IHandleFilter, IFilterState } from '../../../types';

// Components
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import SchoolIcon from '@mui/icons-material/School';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import GroupIcon from '@mui/icons-material/Group';
import HandymanIcon from '@mui/icons-material/Handyman';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import ActivityFilter from './Activity';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PriceFilter from './Price';
import ParticipantsFilter from './Participants';
import PrimaryButton from '../../customLibrary/PrimaryButton';
import EffortFilter from './Effort';
import { effortLevels, prices } from '../../../static/global_vars';
import useWindowSize from '../../../../hooks/useScreenWidth';

interface IProps {
	open: boolean;
	toggleDrawer: () => void;
	handleChange: IHandleChange;
	filter: IFilterState;
	handleFilter: IHandleFilter;
	clearFilter: () => void;
}

const activities: IActivityObj[] = [
	{
		type: 'education',
		icon: <SchoolIcon />
	},
	{
		type: 'recreational',
		icon: <SportsHandballIcon />
	},
	{
		type: 'social',
		icon: <GroupIcon />
	},
	{
		type: 'diy',
		icon: <HandymanIcon />
	},
	{
		type: 'charity',
		icon: <FoodBankIcon />
	},
	{
		type: 'cooking',
		icon: <DinnerDiningIcon />
	},
	{
		type: 'relaxation',
		icon: <SelfImprovementIcon />
	},
	{
		type: 'music',
		icon: <MusicNoteIcon />
	},
	{
		type: 'busywork',
		icon: <WorkHistoryIcon />
	}
];

const CustomDrawer: FC<IProps> = ({ open, toggleDrawer, handleChange, filter, handleFilter, clearFilter }) => {
	const screenSize = useWindowSize();
	return (
		<SwipeableDrawer
			role="swipeable-drawer"
			anchor={screenSize.width < 450 ? 'bottom' : 'left'}
			open={open}
			onClose={toggleDrawer}
			onOpen={toggleDrawer}
			sx={{ height: '80vh !important' }}
			className={styles.drawer}
		>
			<div className={styles.drawer__header}>
				<KeyboardArrowDownIcon
					fontSize="large"
					className={styles.drawer__header__icon}
					onClick={toggleDrawer}
				/>
			</div>
			<ParticipantsFilter handleChange={handleChange} filter={filter} />
			<ActivityFilter activities={activities} handleChange={handleChange} filter={filter} />
			<PriceFilter prices={prices} handleChange={handleChange} filter={filter} />
			<EffortFilter effortLevels={effortLevels} handleChange={handleChange} filter={filter} />

			<div className={styles.drawer__btns}>
				<PrimaryButton handleClick={() => handleFilter(filter)} text="Find Activity" />
				<PrimaryButton handleClick={clearFilter} text="Clear Filter" styles={styles.drawer__btns__secondary} />
			</div>
		</SwipeableDrawer>
	);
};

export default CustomDrawer;
