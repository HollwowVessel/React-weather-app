import React, { useEffect, useState } from 'react';

export const Theme = () => {
	return (
		<img
			src="/images/svg/theme.svg"
			alt="theme"
			style={{ cursor: 'pointer' }}
			onClick={() => document.querySelector('body').classList.toggle('dark')}
		/>
	);
};
