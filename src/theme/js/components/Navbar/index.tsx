import { FC } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Notifications from './Notifications';
import Comments from './Comments';

const Navbar: FC = () => {
	return (
		<nav className="main-header navbar navbar-expand navbar-white navbar-light">
			<ul className="navbar-nav">
				<li className="nav-item">
					<a className="nav-link" data-widget="pushmenu" href="#" role="button">
						<i className="fas fa-bars"></i>
					</a>
				</li>
				<li className="nav-item d-none d-sm-inline-block">
					<Link to="/" className="nav-link">
						Home
					</Link>
				</li>
				<li className="nav-item d-none d-sm-inline-block">
					<a href="#" className="nav-link">
						Contact
					</a>
				</li>
			</ul>
			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
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
				</li>

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
