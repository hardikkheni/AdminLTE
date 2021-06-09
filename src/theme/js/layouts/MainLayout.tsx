import { FC, useEffect } from 'react';

import { useAppDispatch } from '../../../store';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { AppRoute } from '../../../AppRouter';

const MainLayout: FC<Omit<AppRoute, 'children' | 'layout' | 'component'>> = ({
	children,
	name,
}) => {
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
			<div className="content-wrapper">
				<section className="content-header">
					<div className="container-fluid">
						<div className="row mb-2">
							<div className="col-sm-6">
								<h1>{name}</h1>
							</div>
							<div className="col-sm-6">
								<ol className="breadcrumb float-sm-right">
									<li className="breadcrumb-item">
										<a href="#">Home</a>
									</li>
									<li className="breadcrumb-item active">Blank Page</li>
								</ol>
							</div>
						</div>
					</div>
				</section>
				<div className="content">{children}</div>
			</div>
			<Footer />
		</div>
	);
};

export default MainLayout;
