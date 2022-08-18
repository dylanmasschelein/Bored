import { findAllByRole, render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import Home from '../pages/index';
import mocked from 'ts-jest';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Actions from '../src/components/home/landingPage/Activity/Actions';

// import Activity from '../src/components/home/landingPage/Activity';
// import LandingPage from '../src/components/home/landingPage';

// const randomSpy = jest.spyOn('Math', random)
// randomSpy.mockReturnValue(0.5)

const localStorageMock = {
	getItem: jest.fn(),
	setItem: jest.fn(),
	clear: jest.fn()
};
const mockRepsonse = [
	{
		activity: 'Take your dog on a walk',
		type: 'relaxation',
		participants: 1,
		price: 0,
		link: '',
		key: '9318514',
		accessibility: 0.2
	},
	{
		activity: 'Paint the first thing you see',
		type: 'recreational',
		participants: 1,
		price: 0.25,
		link: '',
		key: '1162360',
		accessibility: 0.2
	},
	{
		activity: 'Create and follow a savings plan',
		type: 'busywork',
		participants: 1,
		price: 0,
		link: '',
		key: '9366464',
		accessibility: 0.2
	},
	{
		activity: 'Configure two-factor authentication on your accounts',
		type: 'busywork',
		participants: 1,
		price: 0,
		link: 'https://en.wikipedia.org/wiki/Multi-factor_authentication',
		key: '1572120',
		accessibility: 0
	},
	{
		activity: 'Prepare a 72-hour kit',
		type: 'busywork',
		participants: 1,
		price: 0.5,
		link: 'https://www.ready.gov/kit',
		key: '4266522',
		accessibility: 0.5
	}
];

const singleMockResponse = {
	activity: 'Take your dog on a walk',
	type: 'relaxation',
	participants: 1,
	price: 0,
	link: '',
	key: '9318514',
	accessibility: 0.2
};
const actionsProps = {
	isLocked: jest.fn(),
	handleLockedActivity: jest.fn(),
	activity: singleMockResponse,
	handleDelete: jest.fn(),
	favorited: false,
	hideAction: false
};

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

		describe('Cards', () => {
			it('a list of random activitys are rendered in cards on the page', async () => {
				const cards = await screen.findAllByRole(/activity-card/i);
				expect(cards).toHaveLength(5);
			});

			describe('Details', () => {
				it('renders 3 headings for each card', async () => {
					const heading1 = screen.getByRole('heading', {
						name: /Take your dog on a walk/i
					});
					const heading2 = screen.getByRole('heading', {
						name: /Paint the first thing you see/i
					});
					const heading3 = screen.getByRole('heading', {
						name: /Create and follow a savings plan/i
					});
					const heading4 = screen.getByRole('heading', {
						name: /Configure two-factor authentication on your accounts/i
					});
					const heading5 = screen.getByRole('heading', {
						name: /Prepare a 72-hour kit/i
					});

					expect(heading1).toBeInTheDocument();
					expect(heading2).toBeInTheDocument();
					expect(heading3).toBeInTheDocument();
					expect(heading4).toBeInTheDocument();
					expect(heading5).toBeInTheDocument();
				});
			});

			describe('Participants', () => {
				it('displays an icon with the number of participants the activities involve', async () => {
					const peopleIcon = await screen.findAllByTestId('PeopleIcon');
					expect(peopleIcon).toHaveLength(5);

					const participantNumber = await screen.findAllByText(/1/i);
					expect(participantNumber).toHaveLength(5);
				});
			});

			describe('Type', () => {
				it('displays capitalized text of the type from the list of available options', async () => {
					const typeHeading = await screen.findAllByText(/type:/i);
					const priceHeading = await screen.findAllByText(/price:/i);
					const effortHeading = await screen.findAllByText(/effort:/i);
					expect(typeHeading).toHaveLength(5);
					expect(priceHeading).toHaveLength(5);
					expect(effortHeading).toHaveLength(5);
				});
			});

			// describe('Price')
			it.todo('displays 5 dollar signs, bolds a specific amount depending on the price');

			// describe('Effort')
			it.todo('displays 5 percentage signs, bolds a specific amount depending on the price');

			
		});

		
	});

	describe('Favorites Page', () => {
		// describe('Header)
		it.todo('renders a heading "Favorites"');
		it.todo('renders a speed dial');
		it.todo('hovering the speed dial reveals 1 option');
		it.todo('clicking the home options navigates back to "/"');

		// describe('List)
		it.todo('gets a list from local storage and displays on the page');
	});
});
