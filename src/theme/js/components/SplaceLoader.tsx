import { FC } from 'react';

import AdminLTELogo from '../../assets/img/AdminLTELogo.png';

const SplashLoader: FC = () => {
	return (
		<div className="preloader flex-column justify-content-center align-items-center">
			<img
				className="animation__shake"
				src={AdminLTELogo}
				alt="AdminLTELogo"
				height="60"
				width="60"
			/>
		</div>
	);
};

export default SplashLoader;
