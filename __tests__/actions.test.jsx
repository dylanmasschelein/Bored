import Actions from '../src/components/home/landingPage/Activity/Actions';
import '@testing-library/jest-dom';
import { singleMockResponse } from '../src/static/global_vars';
import { render, screen, fireEvent } from '@testing-library/react';

const actionsProps = {
	isLocked: jest.fn(),
	activity: singleMockResponse,
	favorited: false,
	hideAction: false
};

describe('Action Icons', () => {
	it('renders 3 actions for each card', () => {
		render(<Actions {...actionsProps} />);

		const deleteIcon = screen.getByTestId('DeleteIcon');
		const favIcon = screen.getByTestId('FavoriteIcon');
		const lockIcon = screen.getByTestId('LockIcon');
		expect(favIcon).toBeInTheDocument();
		expect(deleteIcon).toBeInTheDocument();
		expect(lockIcon).toBeInTheDocument();
	});

	describe('Heart', () => {
		it('clicking the heart action adds the activity to local storage', () => {
			const handleFavMock = jest.fn();
			render(<Actions handleFavorite={handleFavMock} {...actionsProps} />);

			const favoriteIcon = screen.getByTestId('FavoriteIcon');
			fireEvent.click(favoriteIcon);

			expect(handleFavMock).toBeCalled();
		});

		it.todo('clicking the heart action changed the color to red');
	});

	describe('Bin', () => {
		it('clicking the bin action removed the activity from the activity list', () => {
			const handleDeleteMock = jest.fn();
			render(<Actions handleDelete={handleDeleteMock} {...actionsProps} />);

			const deleteIcon = screen.getByTestId('DeleteIcon');
			fireEvent.click(deleteIcon);

			expect(handleDeleteMock).toBeCalled();
		});
	});

	describe('Locked', () => {
		it('clicking the lock action removed sets the activity to "locked"', () => {
			const handleLockedActivityMock = jest.fn();
			render(<Actions handleLockedActivity={handleLockedActivityMock} {...actionsProps} />);

			const lockIcon = screen.getByTestId('LockIcon');
			fireEvent.click(lockIcon);

			expect(handleLockedActivityMock).toBeCalled();
		});

		it.todo('clicking the random button keeps the locked item in the activity list');
	});
});
