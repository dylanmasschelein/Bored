import { findAllByRole, render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Favorites from '../pages/favorites';
import userEvent from '@testing-library/user-event';

describe('Favorites Page', () => {
	beforeEach(() => {
		render(<Favorites />);
	});
	describe('Header', () => {
		it('renders a heading "Favorites"', () => {
			const heading = screen.getByRole('heading', { name: /favorites/i });
			expect(heading).toBeInTheDocument();
		});

		it('renders a speed dial', () => {
			const speedDial = screen.getByRole('button', {
				name: /speeddial/i
			});
			expect(speedDial).toBeInTheDocument();
		});

		it('hovering the speed dial reveals 1 option', () => {
			const speedDial = screen.getByRole('button', {
				name: /speeddial/i
			});

			expect(speedDial).toBeInTheDocument();
			userEvent.hover(speedDial);

			const homeOption = screen.getByText(/home/i);
			expect(homeOption).toBeInTheDocument();
		});

		it.todo('clicking the home options navigates back to "/"');
		// const speedDial = screen.getByRole('button', {
		// 	name: /speeddial/i
		// });
		// userEvent.hover(speedDial);

		// const homeOption = screen.getByText(/home/i);
		// await fireEvent.click(homeOption);
		// expect(router).toHaveBeenCalled();
		// setTimeout(() => {
		// expect(screen.getByRole('heading', { name: /bored no more/i })).toBeInTheDocument();
		// }, 2000);
	});

	// describe('List)
	it.todo('gets a list from local storage and displays on the page');
});
