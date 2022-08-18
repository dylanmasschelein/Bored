import type { GetServerSideProps, NextPage } from 'next';
import { FC } from 'react';
import { getActivityArray } from '../src/api';
import { defaultQueryArr } from '../src/static/global_vars';
import { IActivityResponse } from '../src/types';
import Home from '../src/components/home';

interface IProps {
	defaultActivityList: IActivityResponse[];
}

export const getServerSideProps: GetServerSideProps = async () => {
	const defaultActivityList: IActivityResponse[] = await getActivityArray(defaultQueryArr);
	return {
		props: { defaultActivityList }
	};
};

const HomePage: FC<IProps> = ({ defaultActivityList }) => {
	return <Home defaultActivityList={defaultActivityList} />;
};

export default HomePage;
