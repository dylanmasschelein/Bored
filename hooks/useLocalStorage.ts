import { useState, useEffect } from 'react';

export const useLocalStorage = (key: string, item?: any) => {
	const [store, setStore] = useState<any>(undefined);
	const [itemInStorage, setItemInStorage] = useState<any>(undefined);

	const getFromLocalStorage = () => {
		const storage: string | null = localStorage.getItem(key);
		const activityList = storage ? JSON.parse(storage) : undefined;
		return activityList;
	};

	const setToLocalStorage = (key: string, item: any) => {
		localStorage.setItem(key, JSON.stringify(item));
	};

	const addToStorage = (key: string, item: any) => {
		if (store) {
			const updatedStore = getFromLocalStorage();
			const updatedList = [...updatedStore, item];
			setToLocalStorage(key, updatedList);
			setStore(updatedList);
		} else {
			setToLocalStorage(key, [item]);
			setStore([item]);
		}
	};

	const removeActivityFromStorage = (key: string, item: any) => {
		const filteredList = store ? store.filter((s: any) => s.key !== item.key) : undefined;
		setToLocalStorage(key, filteredList);
		setStore(filteredList);
	};

	const handleFavorite = () => {
		if (itemInStorage) {
			removeActivityFromStorage(key, itemInStorage);
			setItemInStorage(undefined);
		} else {
			addToStorage(key, item);
			setItemInStorage(item);
		}
	};

	const findInStorage = (item: any) => {
		const foundItem = store ? store.find((s: any) => s.key === item.key) : undefined;
		setItemInStorage(() => foundItem);
	};

	useEffect(() => {
		if (window !== undefined) {
			setStore(getFromLocalStorage());
		}
	}, []);

	useEffect(() => {
		findInStorage(item);
	}, []);

	return { store, addToStorage, removeActivityFromStorage, findInStorage, itemInStorage, handleFavorite };
};
