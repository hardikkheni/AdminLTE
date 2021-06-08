import React, { useEffect } from 'react';

import { useAppSelector } from '../../store';

const AdminLTE: React.FC = ({ children }) => {
	const classes = useAppSelector((state) => state.theme.classes);
	useEffect(() => {
		document.body.className = classes.join(' ');
	}, [classes]);

	return <>{children}</>;
};

export default AdminLTE;
