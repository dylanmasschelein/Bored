import { useState, useEffect, FC } from 'react';
import styles from '../drawer.module.scss';
import { IActivityObj, IHandleChange, IFilterState } from '../../../../types';
import { capitalize } from '../../../../static/global_functions';

interface IProps {
	activity: IActivityObj;
	handleChange: IHandleChange;
	filter: IFilterState;
}

const Activity: FC<IProps> = ({ activity, handleChange, filter }) => (
	<div
		role="type-option"
		className={`${styles.activity} ${filter.type === activity.type ? styles.selected : undefined}`}
		onClick={() => handleChange('type', activity.type)}
	>
		<h5 className={`${styles.activity__type} ${filter.type === activity.type ? styles.text_select : undefined}`}>
			{capitalize(activity.type)}
		</h5>
		{activity.icon}
	</div>
);

export default Activity;
