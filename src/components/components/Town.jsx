import React, { useState } from 'react';

export const Town = () => {
	const [text, setText] = useState('');
	return (
		<input placeholder="Введите город" value={text} onChange={(e) => setText(e.target.value)} />
	);
};
