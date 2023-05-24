import React from 'react';

// Style

import './Header.css';

// interfaces
import {IHeader} from '../interfaces/IHeader';

function Header({changeTheme}: IHeader) {
	return (
		<header className='header'>
			<h1>TODO</h1>
			<span className='logo' onClick={() => changeTheme()}></span>
		</header>
	);
}

export default Header;
