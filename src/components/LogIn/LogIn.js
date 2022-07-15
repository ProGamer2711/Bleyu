import { useState } from "react";

import "./LogIn.css";

export default function LogIn() {
	const [formState, setFormState] = useState({});

	const handleChange = e => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="login">
			<form>
				<div className="form-field">
					<label htmlFor="email">Email:</label>

					<input
						type="text"
						id="email"
						name="email"
						placeholder="user@example.com"
						required
						value={formState.email}
						onChange={handleChange}
					/>
				</div>

				<div className="form-field">
					<label htmlFor="password">Password:</label>

					<input
						type="password"
						id="password"
						name="password"
						placeholder="Password"
						required
						value={formState.password}
						onChange={handleChange}
					/>
				</div>

				<div className="form-field">
					<button type="submit">Log In</button>
				</div>
			</form>
		</div>
	);
}
