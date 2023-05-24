export const changeTheme = (): void => {
	if (document.body.classList.value === 'theme-light') {
		document.body.setAttribute('class', 'theme-dark');
		localStorage.setItem('data-theme', 'theme-dark');
	} else {
		document.body.setAttribute('class', 'theme-light');
		localStorage.setItem('data-theme', 'theme-light');
	}
};

const storageTheme = () => {
	const theme = localStorage.getItem('data-theme');
	if (theme) {
		if (theme === 'theme-light') {
			document.body.setAttribute('class', 'theme-light');
		} else {
			document.body.setAttribute('class', 'theme-dark');
		}
	}
};

storageTheme();
