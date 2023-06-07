import React from "react";

// Style

import "./Header.css";

// interfaces
import {IHeader} from "../interfaces/IHeader";

function Header({changeTheme}: IHeader) {
	return (
		<header className='header'>
			<h1>TODO</h1>
			<img className='logo' onClick={() => changeTheme()} alt='logoimage' />
		</header>
	);
}

export default Header;
