import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../store';

const Login: FC = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch({ type: 'theme.classes', payload: ['login-page'] });
	}, [dispatch]);

	return (
		<div className="login-box">
			<div className="login-logo">
				<Link to="/">
					<b>Admin</b>LTE
				</Link>
			</div>
			<div className="card">
				<div className="card-body login-card-body">
					<p className="login-box-msg">Sign in to start your session</p>

					<form action="../../index3.html" method="post">
						<div className="input-group mb-3">
							<input
								type="email"
								className="form-control"
								placeholder="Email"
							/>
							<div className="input-group-append">
								<div className="input-group-text">
									<span className="fas fa-envelope"></span>
								</div>
							</div>
						</div>
						<div className="input-group mb-3">
							<input
								type="password"
								className="form-control"
								placeholder="Password"
							/>
							<div className="input-group-append">
								<div className="input-group-text">
									<span className="fas fa-lock"></span>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-8">
								<div className="icheck-primary">
									<input type="checkbox" id="remember" />
									<label>Remember Me</label>
								</div>
							</div>
							<div className="col-4">
								<button type="submit" className="btn btn-primary btn-block">
									Sign In
								</button>
							</div>
						</div>
					</form>

					<div className="social-auth-links text-center mb-3">
						<p>- OR -</p>
						<button className="btn btn-block btn-primary">
							<i className="fab fa-facebook mr-2"></i> Sign in using Facebook
						</button>
						<button className="btn btn-block btn-danger">
							<i className="fab fa-google-plus mr-2"></i> Sign in using Google+
						</button>
					</div>

					<p className="mb-1">
						<a href="forgot-password.html">I forgot my password</a>
					</p>
					<p className="mb-0">
						<Link to="/register" className="text-center">
							Register a new membership
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
