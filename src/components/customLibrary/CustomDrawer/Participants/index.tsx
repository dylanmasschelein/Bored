import { FC, memo } from 'react';
import { IHandleChange, IFilterState } from '../../../../types';
import styles from '../drawer.module.scss';

interface IProps {
	handleChange: IHandleChange;
	filter: IFilterState;
}

const ParticipantsFilter: FC<IProps> = ({ handleChange, filter }) => (
	<>
		<h3>How many participants?</h3>
		<input
			type="number"
			step="1"
			min="1"
			max="8"
			name="participants"
			value={filter.participants}
			className={styles.participants}
			onChange={e => handleChange(e.target.name, e.target.value)}
		/>
	</>
);

export default memo(ParticipantsFilter);
