export const capitalize = (string: string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

export const buildQueryString = (obj: any) => {
	let query: string[] = [];
	Object.keys(obj).forEach((key: string) => {
		if (obj[key] && query.length === 0) {
			query.push(`?${key}=${obj[key]}`);
		} else if (obj[key]) {
			query.push(`&${key}=${obj[key]}`);
		}
	});
	return query.join('');
};

export const removeDuplicates = (arr: any[]) => {
	let uniqueArr: any[] = [];
	const unique = arr.filter(element => {
		const isDuplicate = uniqueArr.includes(element.key);

		if (!isDuplicate) {
			uniqueArr.push(element.key);

			return true;
		}

		return false;
	});
	return unique;
};

export function getRandomInt(max: number) {
	return Math.floor(Math.random() * max);
}
