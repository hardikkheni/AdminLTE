import React, { forwardRef } from 'react';

export const IconDropDownRef = forwardRef<
	HTMLAnchorElement,
	React.HTMLProps<HTMLAnchorElement>
>(({ children, onClick = () => {} }, ref) => (
	<a
		ref={ref}
		href="/"
		onClick={(e) => {
			e.preventDefault();
			onClick(e);
		}}
		className="nav-link"
	>
		{children}
	</a>
));
