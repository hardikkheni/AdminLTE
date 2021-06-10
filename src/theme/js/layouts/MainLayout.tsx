import { FC, useEffect } from 'react';

import { useAppDispatch } from '../../../store';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { AppRoute } from '../../../AppRouter';
import { Link } from 'react-router-dom';

const MainLayout: FC<Omit<AppRoute, 'children' | 'layout' | 'component'>> = ({
	children,
	name,
	meta,
}) => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch({
			type: 'theme.classes',
			payload: ['sidebar-mini', 'layout-fixed'],
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
								{meta?.breadcrumb && (
									<ol className="breadcrumb float-sm-right">
										{meta.breadcrumb.map(({ name, active, path }) => (
											<li
												className={`breadcrumb-item ${
													!!active ? 'active' : ''
												}`}
											>
												{!active ? <Link to={path || '/'}>{name}</Link> : name}
											</li>
										))}
									</ol>
								)}
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
