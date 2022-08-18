export type IHandleChange = (name: string, value: string) => void;
export type IError = { error: string };
export type IHandleFilter = (f: IFilterState | boolean) => Promise<IActivityResponse>;
export type IActivityObj = { type: string; icon: any };
export type IActivityResponse = IActivity[] | IError[];

export interface IFilterState {
	participants: string;
	type: string;
	price: string;
	accessibility: string;
}

export interface IActivity {
	activity: string;
	accessibility: number;
	type: string;
	participants: number;
	price: number;
	link: string;
	key: string;
	locked?: boolean;
}
