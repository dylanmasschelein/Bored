import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { mockRepsonse, singleMockResponse } from '../src/static/global_vars';

// const actionsProps = {
// 	isLocked: jest.fn(),
// 	handleLockedActivity: jest.fn(),
// 	activity: singleMockResponse,
// 	handleDelete: jest.fn(),
// 	favorited: false,
// 	hideAction: false
// };

describe('Home Page', () => {
	describe('initialized with a default array of responses', () => {
		beforeEach(() => {
			render(<Home defaultActivityList={mockRepsonse} />);
		});
		describe('Layout', () => {
			it('renders a heading', () => {
				const heading = screen.getByRole('heading', {
					name: /Bored no more!/i
				});

				expect(heading).toBeInTheDocument();
			});

			it('speed dial exists on render', () => {
				const speedDial = screen.getByRole('button', {
					name: /speeddial/i
				});

				expect(speedDial).toBeInTheDocument();
			});

			it('hovering the speed dial reveals 3 options', () => {
				const speedDial = screen.getByRole('button', {
					name: /speeddial/i
				});

				expect(speedDial).toBeInTheDocument();

				userEvent.hover(speedDial);

				const favoritesOption = screen.getByText(/favorites/i);
				const filterOption = screen.getByText(/filter/i);
				const randomOption = screen.getByText(/random/i);
				expect(favoritesOption).toBeInTheDocument();
				expect(filterOption).toBeInTheDocument();
				expect(randomOption).toBeInTheDocument();
			});

			it.todo('clicking favorites navigates to the "/favorites" page');
			it('clicking filter option opens the "Custom Drawer" component', () => {
				const speedDial = screen.getByRole('button', {
					name: /speeddial/i
				});
				userEvent.hover(speedDial);

				const filterOption = screen.getByText(/filter/i);
				fireEvent.click(filterOption);

				expect(screen.getByRole('heading', { name: /how many participants\?/i })).toBeInTheDocument();
				expect(screen.getByRole('heading', { name: /activity type/i })).toBeInTheDocument();
				expect(screen.getByRole('heading', { name: /activity price/i })).toBeInTheDocument();
				expect(screen.getByRole('heading', { name: /activity effort/i })).toBeInTheDocument();

				const downArrow = screen.getByTestId('KeyboardArrowDownIcon');
				expect(downArrow).toBeInTheDocument();
				fireEvent.click(downArrow);

				expect(
					screen.getByRole('heading', {
						name: /Bored no more!/i
					})
				).toBeInTheDocument();
			});

			it.todo('clicking random option fetches x amount of new activities');
		});
	});
});
