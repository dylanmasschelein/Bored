import Actions from '../src/components/home/landingPage/Activity/Actions';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CustomDrawer from '../src/components/customLibrary/CustomDrawer';
import Home from '../pages/index';

function forEach(items, callback) {
	for (let index = 0; index < items.length; index++) {
		callback(items[index]);
	}
}

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
const filterState = {
	participants: '2',
	type: 'education',
	price: '0',
	accessibility: '0'
};

const props = {
	open: true,
	toggleDrawer: jest.fn(),
	handleChange: jest.fn(),
	filter: filterState,
	handleFilter: jest.fn(),
	clearFilter: jest.fn()
};

describe('Filter Drawer', () => {
	beforeEach(() => {
		const handleChangeMock = jest.fn();
		render(<CustomDrawer {...props} handleChange={handleChangeMock} />);

		// const speedDial = screen.getByRole('button', {
		// 	name: /speeddial/i
		// });
		// userEvent.hover(speedDial);

		// const filterOption = screen.getByText(/filter/i);
		// fireEvent.click(filterOption);
	});

	// afterAll(() => {
	// 	const downArrow = screen.getByTestId('KeyboardArrowDownIcon');
	// 	expect(downArrow).toBeInTheDocument();
	// 	fireEvent.click(downArrow);

	// 	expect(
	// 		screen.getByRole('heading', {
	// 			name: /Bored no more!/i
	// 		})
	// 	).toBeInTheDocument();
	// });

	describe('initialize filter drawer', () => {
		it('down arrow is present in the filter drawer', () => {
			const downArrow = screen.getByTestId('KeyboardArrowDownIcon');
			expect(downArrow).toBeInTheDocument();
		});
	});

	describe('Participants', () => {
		it('renders a title', () => {
			expect(screen.getByRole('heading', { name: /how many participants\?/i })).toBeInTheDocument();
		});

		it('renders an input', () => {
			expect(screen.getByRole('spinbutton')).toBeInTheDocument();
		});

		it('renders value changes when user types in input', async () => {
			const participantsInput = screen.getByRole('spinbutton');
			fireEvent.click(participantsInput);

			expect(participantsInput.value).toEqual('2');

			// fireEvent.keyPress(participantsInput, { key: 'ArrowUp', code: 'ArrowUp' });
			// console.log(participantsInput.value);
			// expect(participantsInput.value).toEqual('3');
		});
	});

	describe('Type', () => {
		it('renders a title', () => {
			expect(screen.getByRole('heading', { name: /activity type/i })).toBeInTheDocument();
		});

		it('renders a 9 type options all with a title and icon', () => {
			const typeOptions = screen.getAllByRole('type-option');
			expect(typeOptions).toHaveLength(9);
		});

		it('clicking one adds the specific filter to state', () => {
			const handleChangeMock = jest.fn();
			render(<CustomDrawer {...props} handleChange={handleChangeMock} />);

			const typeOption = screen.getAllByRole('type-option')[0];
			fireEvent.click(typeOption);

			expect(handleChangeMock).toBeCalledWith('type', 'education');
		});

		it('clicking one then clicking a second replaces the first in state', () => {
			const handleChangeMock = jest.fn();
			render(<CustomDrawer {...props} handleChange={handleChangeMock} />);

			const educationOption = screen.getAllByRole('type-option')[0];
			// const educationOption = screen.getByRole('type-option', { name: /education/i });

			fireEvent.click(educationOption);
			expect(handleChangeMock).toBeCalledWith('type', 'education');

			// const recOption = screen.getByRole('type-option', { name: /recreational/i });
			const recOption = screen.getAllByRole('type-option')[1];

			fireEvent.click(recOption);
			expect(handleChangeMock).toBeCalledWith('type', 'recreational');
		});
	});

	describe('Price', () => {
		it('renders a title', () => {
			expect(screen.getByRole('heading', { name: /activity price/i })).toBeInTheDocument();
		});

		it('renders a 6 price options, each with a title', () => {
			const priceOptions = screen.getAllByRole('price-option');
			expect(priceOptions).toHaveLength(6);
		});

		it('clicking one adds the specific filter to state', () => {
			const handleChangeMock = jest.fn();
			render(<CustomDrawer {...props} handleChange={handleChangeMock} />);

			const priceOption = screen.getAllByRole('price-option')[3];
			fireEvent.click(priceOption);

			expect(handleChangeMock).toBeCalledWith('price', '0.6');
		});

		it('clicking one then clicking a second replaces the first in state', () => {
			const handleChangeMock = jest.fn();
			render(<CustomDrawer {...props} handleChange={handleChangeMock} />);

			const $$$Option = screen.getAllByRole('price-option')[3];
			fireEvent.click($$$Option);
			expect(handleChangeMock).toBeCalledWith('price', '0.6');

			const $$$$$Option = screen.getAllByRole('price-option')[5];
			fireEvent.click($$$$$Option);
			expect(handleChangeMock).toBeCalledWith('price', '1');
		});
	});

	describe('Effort', () => {
		it('renders a title', () => {
			expect(screen.getByRole('heading', { name: /activity effort/i })).toBeInTheDocument();
		});

		it('renders a 6 effort options, each with a title', () => {
			const effortOptions = screen.getAllByRole('effort-option');
			expect(effortOptions).toHaveLength(6);
		});

		it('clicking one adds the specific filter to state', () => {
			const handleChangeMock = jest.fn();
			render(<CustomDrawer {...props} handleChange={handleChangeMock} />);

			const negligableOption = screen.getAllByRole('effort-option')[1];
			fireEvent.click(negligableOption);

			expect(handleChangeMock).toBeCalledWith('accessibility', '0.2');
		});

		it('clicking one then clicking a second replaces the first in state', () => {
			const handleChangeMock = jest.fn();
			render(<CustomDrawer {...props} handleChange={handleChangeMock} />);

			const negligableOption = screen.getAllByRole('effort-option')[1];
			fireEvent.click(negligableOption);

			expect(handleChangeMock).toBeCalledWith('accessibility', '0.2');

			const maximumOption = screen.getAllByRole('effort-option')[5];
			fireEvent.click(maximumOption);

			expect(handleChangeMock).toBeCalledWith('accessibility', '1.0');
		});
	});

	describe('Buttons', () => {
		it('both buttons render', () => {
			const findActivityBtn = screen.getByRole('button', {
				name: /find activity/i
			});
			const clearFilterBtn = screen.getByRole('button', {
				name: /clear filter/i
			});

			expect(findActivityBtn).toBeInTheDocument();
			expect(clearFilterBtn).toBeInTheDocument();
		});

		describe('Find Activity', () => {
			it('clicking tiggers a series of actions: a query is built, fetch functions is called, and a filtered set of activities are returned and set to state', () => {
				const handleFilterMock = jest.fn();
				const handleChangeMock = jest.fn();
				render(<CustomDrawer {...props} handleFilter={handleFilterMock} handleChange={handleChangeMock} />);
				const findActivityBtn = screen.getByRole('button', {
					name: /find activity/i
				});
				fireEvent.click(findActivityBtn);

				expect(handleFilterMock).toBeCalledWith({
					accessibility: '0',
					participants: '2',
					price: '0',
					type: 'education'
				});

				// const priceOption = screen.getAllByRole('price-option')[3];
				// fireEvent.click(priceOption);

				// expect(handleChangeMock).toBeCalledWith('price', '0.6');

				// expect(handleFilterMock).toBeCalledWith({
				// 	accessibility: '0',
				// 	participants: '2',
				// 	price: '0.6',
				// 	type: 'education'
				// });
			});
			it('clicking toggles the filter drawer closed', () => {
				// const toggleDrawerMock = jest.fn();
				// render(<CustomDrawer {...props} toggleDrawer={toggleDrawerMock} />);
				// const findActivityBtn = screen.getByRole('button', {
				// 	name: /find activity/i
				// });
				// fireEvent.click(findActivityBtn);
				// expect(toggleDrawerMock).toBeCalledTimes(1);
			});
		});

		describe('Clear Filter', () => {
			it('clicking set the filter state fields to empty', () => {
				const clearFilterMock = jest.fn();
				render(<CustomDrawer {...props} clearFilter={clearFilterMock} />);

				const clearFilterBtn = screen.getByRole('button', {
					name: /clear filter/i
				});
				fireEvent.click(clearFilterBtn);

				expect(clearFilterMock).toBeCalledTimes(1);
			});
		});
	});
});
