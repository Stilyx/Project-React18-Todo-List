export const getLocalStorage = () => {
	const data = localStorage.getItem('tasks');
	if (data) {
		return JSON.parse(data);
	} else {
		return [];
	}
};
