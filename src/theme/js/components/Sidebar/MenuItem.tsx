import { FC, useState } from 'react';
import { useHistory } from 'react-router';
import { useSpring, animated } from 'react-spring';

import { IMenuItem } from './menu';

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const history = useHistory();
	const [opend, setOpend] = useState(item.opened || false);
	const menuAppear = useSpring({
		from: {
			opacity: 0,
		},
		to: {
			opacity: opend ? 1 : 0,
		},
	});
	return (
		<li className={`nav-item ${opend ? 'menu-is-opening menu-open' : ''}`}>
			<span
				style={!opend ? { color: '#c2c7d0' } : {}}
				onClick={(e) => {
					if (item.children?.length) {
						e.preventDefault();
						setOpend(!opend);
					} else {
						history.push(item.path || '/');
					}
				}}
				className={`nav-link ${opend ? 'active' : ''}`}
			>
				<i className={`nav-icon ${item.icon}`}></i>
				<p>
					{item.name}
					{item.children?.length && <i className="right fas fa-angle-left"></i>}
					{item.badge && <item.badge />}
				</p>
			</span>
			{item.children?.length && (
				<animated.div style={menuAppear}>
					{opend && (
						<ul className="nav nav-treeview" style={{ display: 'block' }}>
							{item.children.map((tmpitem, i) => (
								<MenuItem key={i} item={tmpitem} />
							))}
						</ul>
					)}
				</animated.div>
			)}
		</li>
	);
};

export default MenuItem;
