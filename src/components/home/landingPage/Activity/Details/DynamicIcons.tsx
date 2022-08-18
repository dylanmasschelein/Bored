import { useState, useEffect, FC } from 'react';
import { capitalize } from '../../../../../static/global_functions';
import { IActivity } from '../../../../../types';
import styles from '../../landing.module.scss';

interface IProps {
	activity: IActivity;
	heading: string;
}

const DynamicIcons: FC<IProps> = ({ activity, heading }) => {
	// number of icons to print based on a number parameter
	const printIcons = (number: number, type: string) => {
		let num;
		if (number === 0) {
			num = 0;
		} else if (number <= 0.2) {
			num = 1;
		} else if (number <= 0.4) {
			num = 2;
		} else if (number <= 0.6) {
			num = 3;
		} else if (number <= 0.8) {
			num = 4;
		} else {
			num = 5;
		}

		let icons: any[] = [];
		const initialSpan = [];
		const secondarySpan = [];
		for (let i = 0; i < num; i++) {
			if (type === 'price') {
				initialSpan.push('$');
			} else {
				initialSpan.push('%');
			}
		}
		// if (icons.length === 0) return type === 'price' ? 'Free' : 'None!';
		for (let j = initialSpan.length; j < 5; j++) {
			if (type === 'price') {
				secondarySpan.push('$');
			} else {
				secondarySpan.push('%');
			}
		}
		return { initialSpan, secondarySpan };
	};
	return (
		<div className={styles.home__card__container}>
			<p>{capitalize(heading)}: </p>
			<span className={styles.home__card__container__bold_span}>
				{printIcons(activity.price, heading).initialSpan}
				<span className={styles.home__card__container__light_span}>
					{printIcons(activity.price, heading).secondarySpan}
				</span>
			</span>
		</div>
	);
};

export default DynamicIcons;
