import React from 'react';
import { Theme } from './components/Theme';
import { Town } from './components/Town';

export const Header = () => {
	return (
		<header className="header">
			<div className="header-logo">
				<a href="#">
					<img src="/images/svg/logo.svg" />
				</a>
				<a href="#">react weather</a>
			</div>
			<div className="header-control">
				<Theme />
				<Town />
			</div>
		</header>
	);
};
