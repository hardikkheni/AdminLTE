import { FC } from 'react';
import { Dropdown } from 'react-bootstrap';

import { IconDropDownRef } from '../../utils/components/DropDownRef';

const Notifications: FC = () => {
	return (
		<Dropdown>
			<Dropdown.Toggle as={IconDropDownRef}>
				<i className="far fa-bell"></i>
				<span className="badge badge-warning navbar-badge">15</span>
			</Dropdown.Toggle>
			<Dropdown.Menu className="dropdown-menu-lg dropdown-menu-right">
				<Dropdown.Item>
					<i className="fas fa-envelope mr-2"></i> 4 new messages
					<span className="float-right text-muted text-sm">3 mins</span>
				</Dropdown.Item>
				<Dropdown.Item>
					<i className="fas fa-users mr-2"></i> 8 friend requests
					<span className="float-right text-muted text-sm">12 hours</span>
				</Dropdown.Item>
				<Dropdown.Item>
					<i className="fas fa-file mr-2"></i> 3 new reports
					<span className="float-right text-muted text-sm">2 days</span>
				</Dropdown.Item>
				<Dropdown.Divider />
				<Dropdown.Item className="dropdown-footer">
					See All Notifications
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default Notifications;
