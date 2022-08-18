import { findAllByRole, render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';
import Activity from '../src/components/home/landingPage/Activity';
import LandingPage from '../src/components/home/landingPage';

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

const singleMockResponse = {
	activity: 'Take your dog on a walk',
	type: 'relaxation',
	participants: 1,
	price: 0,
	link: '',
	key: '9318514',
	accessibility: 0.2
};

describe('Home Page', () => {
	it('renders a heading', () => {
		render(<Home />);
		const heading = screen.getByRole('heading', {
			name: /Bored no more!/i
		});

		expect(heading).toBeInTheDocument();
	});

	it('speed dial exists on render', () => {
		render(<Home />);
		const speedDial = screen.getByRole('presentation');

		expect(speedDial).toBeInTheDocument();
	});

	it('test', async () => {
		render(<Activity activity={singleMockResponse} />);

		const activity = await screen.findByRole('heading', { name: /Take your dog on a walk/i });
		expect(activity).toBeInTheDocument();
	});
});
