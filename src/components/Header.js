import React, { useState } from 'react';

import SearchFilters from './SearchFilters';

const Header = props => {
	
	const [visible, toggleVisibility] = useState(false)

	return (
		<nav className={`navbar ${visible ? 'active' : ''}`}>
			<div className="title">GitXplore</div>
			<div className="btn toggle-btn" onClick={() => toggleVisibility(!visible)}>Toggle Filters</div>
			<SearchFilters {...props} visible={visible} />
		</nav>
	);
}

export default Header;
