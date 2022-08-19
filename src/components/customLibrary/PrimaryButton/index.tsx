import { FC, memo } from 'react';
import defaultStyles from './primary-button.module.scss';

interface IProps {
	type?: 'button' | 'submit' | 'reset' | undefined;
	styles?: string | any;
	handleClick?: any;
	text: string | JSX.Element;
	disabled?: boolean | string | any;
}

const PrimaryButton: FC<IProps> = ({ styles, handleClick, text, disabled, type = 'button' }) => (
	<button
		type={type}
		onClick={handleClick}
		className={`${defaultStyles.base} ${styles} ${disabled && defaultStyles.disabled}`}
		disabled={disabled}
	>
		<span>{`${text} `}</span>
	</button>
);

export default memo(PrimaryButton);
