import { Link } from "react-router-dom";

import "./NavBar.css";

export default function NavBar() {
	return (
		<div className="nav-bar">
			<div className="logo">
				<Link to="/">
					<img src="./icons/android-chrome-192x192.png" alt="Bleyu Logo" />
				</Link>
			</div>
			<div className="links">
				<Link to="/posts">Posts</Link>
			</div>
			<div className="auth-buttons">
				<Link to="/login">Log In</Link>
				<Link to="/signup">Sign Up</Link>
			</div>
		</div>
	);
}
