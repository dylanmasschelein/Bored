import { FC } from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import styles from '../CustomDrawer/drawer.module.scss';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HomeIcon from '@mui/icons-material/Home';
import { IHandleFilter } from '../../../types';
import { useRouter } from 'next/router';

interface IProps {
	toggleDrawer?: () => void;
	handleFilter?: IHandleFilter;
	favoritesPage?: boolean;
}

const CustomSpeedDial: FC<IProps> = ({ toggleDrawer, handleFilter, favoritesPage }) => {
	const router = useRouter();
	const homeActions = [
		{
			icon: <FormatListBulletedIcon sx={{ color: 'white' }} />,
			name: 'Favorites',
			action: () => router.push('/favorites')
		},
		{ icon: <FilterAltIcon sx={{ color: 'white' }} />, name: 'Filter', action: toggleDrawer },
		{
			icon: <ShuffleIcon sx={{ color: 'white' }} />,
			name: 'Random',
			action: handleFilter ? () => handleFilter(false) : undefined
		}
	];

	const favoritesActions = [
		{
			icon: <HomeIcon sx={{ color: 'white' }} />,
			name: 'Home',
			action: () => router.push('/')
		}
	];

	const actions = favoritesPage ? favoritesActions : homeActions;
	return (
		<SpeedDial
			direction="down"
			ariaLabel="SpeedDial"
			sx={{ position: 'absolute', top: 0, right: 0 }}
			className={styles.speed_dial_btn}
			icon={<SpeedDialIcon />}
		>
			{actions.map(action => (
				<SpeedDialAction
					key={action.name}
					icon={action.icon}
					tooltipTitle={action.name}
					onClick={action.action}
					tooltipOpen
				/>
			))}
		</SpeedDial>
	);
};

export default CustomSpeedDial;
