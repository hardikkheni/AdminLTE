import { FC } from 'react';
import { Button } from 'react-bootstrap';

import Notifications from './Notifications';
import Comments from './Comments';
import { useAppDispatch } from '../../../../store';
import { THEME_ACTION } from '../../../../store/reducers/theme';

const Navbar: FC = () => {
	const dispatch = useAppDispatch();

	return (
		<nav className="main-header navbar navbar-expand navbar-white navbar-light">
			<ul className="navbar-nav">
				<li className="nav-item">
					<Button
						onClick={() => {
							dispatch({ type: THEME_ACTION.TOGGLE_SIDEBAR });
						}}
						variant="light"
						className="nav-link"
					>
						<i className="fas fa-bars"></i>
					</Button>
				</li>
			</ul>
			<ul className="navbar-nav ml-auto">
				{/* <li className="nav-item">
					<a
						className="nav-link"
						data-widget="navbar-search"
						href="#"
						role="button"
					>
						<i className="fas fa-search"></i>
					</a>
					<div className="navbar-search-block">
						<form className="form-inline">
							<div className="input-group input-group-sm">
								<input
									className="form-control form-control-navbar"
									type="search"
									placeholder="Search"
									aria-label="Search"
								/>
								<div className="input-group-append">
									<button className="btn btn-navbar" type="submit">
										<i className="fas fa-search"></i>
									</button>
									<button
										className="btn btn-navbar"
										type="button"
										data-widget="navbar-search"
									>
										<i className="fas fa-times"></i>
									</button>
								</div>
							</div>
						</form>
					</div>
				</li> */}

				<Comments />
				<Notifications />
				<li className="nav-item">
					<a href="/" onClick={(e) => e.preventDefault()} className="nav-link">
						<i className="fas fa-expand-arrows-alt"></i>
					</a>
				</li>
				<li className="nav-item">
					<a href="/" onClick={(e) => e.preventDefault()} className="nav-link">
						<i className="fas fa-th-large"></i>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
