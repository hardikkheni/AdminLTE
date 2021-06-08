import { FC } from 'react';
import { Dropdown } from 'react-bootstrap';

import { IconDropDownRef } from '../../utils/components/DropDownRef';

const Comments: FC = () => {
	return (
		<Dropdown>
			<Dropdown.Toggle as={IconDropDownRef}>
				<i className="far fa-comments"></i>
				<span className="badge badge-danger navbar-badge">3</span>
			</Dropdown.Toggle>
			<Dropdown.Menu className="dropdown-menu-lg dropdown-menu-right">
				<Dropdown.Item>
					<div className="media">
						<img
							src={require('../../../assets/img/user1-128x128.jpg').default}
							alt="User Avatar"
							className="img-size-50 mr-3 img-circle"
						/>
						<div className="media-body">
							<h3 className="dropdown-item-title">
								Brad Diesel
								<span className="float-right text-sm text-danger">
									<i className="fas fa-star"></i>
								</span>
							</h3>
							<p className="text-sm">Call me whenever you can...</p>
							<p className="text-sm text-muted">
								<i className="far fa-clock mr-1"></i> 4 Hours Ago
							</p>
						</div>
					</div>
				</Dropdown.Item>
				<Dropdown.Item>
					<div className="media">
						<img
							src={require('../../../assets/img/user8-128x128.jpg').default}
							alt="User Avatar"
							className="img-size-50 img-circle mr-3"
						/>
						<div className="media-body">
							<h3 className="dropdown-item-title">
								John Pierce
								<span className="float-right text-sm text-muted">
									<i className="fas fa-star"></i>
								</span>
							</h3>
							<p className="text-sm">I got your message bro</p>
							<p className="text-sm text-muted">
								<i className="far fa-clock mr-1"></i> 4 Hours Ago
							</p>
						</div>
					</div>
				</Dropdown.Item>
				<Dropdown.Item>
					<div className="media">
						<img
							src={require('../../../assets/img/user3-128x128.jpg').default}
							alt="User Avatar"
							className="img-size-50 img-circle mr-3"
						/>
						<div className="media-body">
							<h3 className="dropdown-item-title">
								Nora Silvester
								<span className="float-right text-sm text-muted">
									<i className="fas fa-star"></i>
								</span>
							</h3>
							<p className="text-sm">The subject goes here</p>
							<p className="text-sm text-muted">
								<i className="far fa-clock mr-1"></i> 4 Hours Ago
							</p>
						</div>
					</div>
				</Dropdown.Item>
				<Dropdown.Divider />
				<Dropdown.Item className="dropdown-footer">
					See All Messages
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default Comments;
