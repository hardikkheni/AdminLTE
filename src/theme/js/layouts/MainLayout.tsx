import { FC, useEffect } from 'react';

import { useAppDispatch } from '../../../store';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const MainLayout: FC = ({ children }) => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch({
			type: 'theme.classes',
			payload: ['control-sidebar-slide-open', 'sidebar-mini', 'layout-fixed'],
		});
	}, [dispatch]);

	return (
		<div className="wrapper">
			<Navbar />
			<Sidebar />
			{children}
		</div>
	);
};

export default MainLayout;
