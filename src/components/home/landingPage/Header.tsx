import { useState, useEffect, FC } from 'react';
import { IHandleFilter } from '../../../types';
import CustomSpeedDial from '../../customLibrary/CustomSpeedDial';
import styles from './landing.module.scss';

interface IProps {
	toggleDrawer?: () => void;
	handleFilter?: IHandleFilter;
	favoritesPage?: boolean;
	title: string;
}

const Header: FC<IProps> = ({ toggleDrawer, handleFilter, favoritesPage, title }) => (
	<div className={styles.home__header}>
		<div className={styles.home__header_container}>
			<h1>{title}</h1>
			<CustomSpeedDial toggleDrawer={toggleDrawer} handleFilter={handleFilter} favoritesPage={favoritesPage} />
		</div>
	</div>
);

export default Header;
