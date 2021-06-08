import { FC } from 'react';
import { Link } from 'react-router-dom';

import { IMenuItem } from './menu';

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	return (
		<li className="nav-item">
			<Link
				to={item.path || '/'}
				onClick={(e) => e.preventDefault()}
				className="nav-link"
			>
				<i className={`nav-icon ${item.icon}`}></i>
				<p>
					{item.name}
					{item.children?.length && <i className="right fas fa-angle-left"></i>}
				</p>
				{item.children?.length && (
					<ul className="nav nav-treeview">
						{item.children.map((tmpitem) => (
							<MenuItem item={tmpitem} />
						))}
					</ul>
				)}
			</Link>
		</li>
	);
};

export default MenuItem;
