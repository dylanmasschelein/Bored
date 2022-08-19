import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { mockRepsonse } from '../src/static/global_vars';
import LandingPage from '../src/components/home/landingPage';

const landingPageProps = {
	activityList: mockRepsonse,
	toggleDrawer: jest.fn(),
	handleFilter: jest.fn(),
	setActivityList: jest.fn(),
	handleLockedActivity: jest.fn(),
	isLocked: jest.fn()
};

describe('Cards', () => {
	beforeEach(() => {
		render(<LandingPage {...landingPageProps} />);
	});
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
	// const effortSpan = screen.getAllByText(/%%%%%/i)[0];
	// // expect(effortSpan).toHaveLength(3);
	// console.log(effortSpan.style);
	// expect(effortSpan).toHaveStyle({ fontWeight: 'bold' });

	// describe('Effort')
	it.todo('displays 5 percentage signs, bolds a specific amount depending on the price');
});
