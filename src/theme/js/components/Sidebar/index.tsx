import { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { mapRoutes, menu } from './menu';
import MenuItem from './MenuItem';

const Sidebar: FC = () => {
	const match = useRouteMatch();
	const tmpMenu = menu.map((item) => mapRoutes(item, match.path));
	return (
		<aside className="main-sidebar sidebar-dark-primary elevation-4">
			<a href="/" onClick={(e) => e.preventDefault()} className="brand-link">
				<img
					src={require('../../../assets/img/AdminLTELogo.png').default}
					alt="AdminLTE Logo"
					className="brand-image img-circle elevation-3"
					style={{ opacity: 0.8 }}
				/>
				<span className="brand-text font-weight-light">AdminLTE 3</span>
			</a>
			<div className="sidebar">
				<div className="user-panel mt-3 pb-3 mb-3 d-flex">
					<div className="image">
						<img
							alt="User"
							src={require('../../../assets/img/user2-160x160.jpg').default}
							className="img-circle elevation-2"
						/>
					</div>
					<div className="info">
						<a href="/" onClick={(e) => e.preventDefault()} className="d-block">
							Alexander Pierce
						</a>
					</div>
				</div>
				<nav className="mt-2">
					<ul className="nav nav-pills nav-sidebar flex-column">
						{tmpMenu.map(({ item }, i) => (
							<MenuItem key={i} item={item} />
						))}
					</ul>
				</nav>
			</div>
		</aside>
	);
};

export default Sidebar;
