import { findAllByRole, render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

// import Activity from '../src/components/home/landingPage/Activity';
// import LandingPage from '../src/components/home/landingPage';

// const randomSpy = jest.spyOn('Math', random)
// randomSpy.mockReturnValue(0.5)

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

// const singleMockResponse = {
// 	activity: 'Take your dog on a walk',
// 	type: 'relaxation',
// 	participants: 1,
// 	price: 0,
// 	link: '',
// 	key: '9318514',
// 	accessibility: 0.2
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

				fireEvent.mouseOver(speedDial);

				const favoritesOption = screen.getByText(/favorites/i);
				const filterOption = screen.getByText(/filter/i);
				const randomOption = screen.getByText(/random/i);
				expect(favoritesOption).toBeInTheDocument();
				expect(filterOption).toBeInTheDocument();
				expect(randomOption).toBeInTheDocument();
			});

			it.todo('clicking favorites navigates to the "/favorites" page');
			it.todo('clicking filter option opens the "Custom Drawer" component');
			it.todo('clicking random option fetches x amount of new activities');
		});

		describe('Cards', () => {
			it('a list of random activitys are rendered in cards on the page', async () => {
				const cards = await screen.findAllByRole(/activity-card/i);
				expect(cards).toHaveLength(5);
			});

			// describe('Details')
			it.todo('renders 3 headings for each card');

			// describe('Participants')
			it.todo('displays an icon with the number of participants the axcticity involves');

			// describe('Type')
			it.todo('displays capitalized text of the type from the list of available options');

			// describe('Price')
			it.todo('displays 5 dollar signs, bolds a specific amount depending on the price');

			// describe('Effort')
			it.todo('displays 5 percentage signs, bolds a specific amount depending on the price');

			// describe ("Action Icons")
			it.todo('renders 3 actions for each card');

			// describe('Heart')
			it.todo('clicking the heart action adds the activity to local storage');
			it.todo('clicking the heart action changed the color to red');

			// describe('Bin')
			it.todo('clicking the bin action removed the activity from the activity list');

			// describe('Locked')
			it.todo('clicking the lock action removed sets the activity to "locked"');
			it.todo('clicking the random button keeps the locked item in the activity list');
		});

		describe('Filter Drawer', () => {
			// describe('Caret toggle')
			it.todo('icon renders in the header');
			it.todo('clicking toggles the filter drawer closed');

			// describe('Participants)
			it.todo('renders a title');
			it.todo('renders an input');
			it.todo('renders an increments when the icon is clicks');
			it.todo('renders an decrements when the icon is clicks');

			// describe('Type')
			it.todo('renders a title');
			it.todo('renders a 9 type options all with a title and icon');
			it.todo('clicking one adds the specific filter to state');
			it.todo('clicking one then clicking a second replaces the first in state');

			// describe('Price')
			it.todo('renders a title');
			it.todo('renders a 6 price options, each with a title');
			it.todo('clicking one adds the specific filter to state');
			it.todo('clicking one then clicking a second replaces the first in state');

			// describe('Effort')
			it.todo('renders a title');
			it.todo('renders a 6 effort options, each with a title');
			it.todo('clicking one adds the specific filter to state');
			it.todo('clicking one then clicking a second replaces the first in state');

			// describe('Buttons')
			it.todo('both buttons render');

			// describe('Find Activity')
			it.todo(
				'clicking tiggers a series of actions: a query is built, fetch functions is called, and a filtered set of activities are returned and set to state'
			);
			it.todo('clicking toggles the filter drawer closed');

			// describe('Clear Filter')
			it.todo('clicking set the filter state fields to empty');
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
