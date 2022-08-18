import type { GetServerSideProps } from 'next';
import { FC } from 'react';
import { getActivityArray } from '../src/api';
import { defaultQueryArr } from '../src/static/global_vars';
import { IActivity } from '../src/types';
import Home from '../src/components/home';

interface IProps {
	defaultActivityList: IActivity[];
}

export const getServerSideProps: GetServerSideProps = async () => {
	const defaultActivityList: IActivity[] = await getActivityArray(defaultQueryArr);
	return {
		props: { defaultActivityList }
	};
};

const HomePage: FC<IProps> = ({ defaultActivityList }) => {
	return <Home defaultActivityList={defaultActivityList} />;
};

export default HomePage;
