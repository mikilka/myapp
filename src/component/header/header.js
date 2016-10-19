import './header.css';

import React from 'react';


const HeaderView = () => {
	return (
			<div>
				<a href="/contacts">Contacts</a>
				{' | '}
				<a href="/about">About</a>
                {' | '}
                <a href="/">Home</a>
			</div>
		)
};

export default HeaderView;