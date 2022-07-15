import { useState } from "react";
import { registerUser } from "../../services/userService";
import { setSession } from "../../util/session";

import "./SignUp.css";

export default function SignUp() {
	const [formState, setFormState] = useState({
		username: "",
		email: "",
		password: "",
		imageUrl: "",
	});

	const handleChange = e => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();

		registerUser(formState).then(data => {
			setSession(data.username, data.email, data.token, data._id);
		});
	};

	return (
		<div className="signup">
			<form onSubmit={handleSubmit}>
				<div className="form-field">
					<label htmlFor="username">Username:</label>

					<input
						type="text"
						id="username"
						name="username"
						placeholder="Username"
						required
						value={formState.username}
						onChange={handleChange}
					/>
				</div>

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
					<label htmlFor="confirmPassword">Confirm Password:</label>

					<input
						type="password"
						id="confirmPassword"
						name="confirmPassword"
						placeholder="Password"
						required
						value={formState.password}
						onChange={handleChange}
					/>
				</div>

				<div className="form-field">
					<label htmlFor="imageUrl">Image Url (Not Required):</label>

					<input
						type="text"
						id="imageUrl"
						name="imageUrl"
						placeholder="https://www.example.com/image.jpg"
						value={formState.imageUrl}
						onChange={handleChange}
					/>
				</div>

				<div className="form-field">
					<button type="submit">SignUp</button>
				</div>
			</form>
		</div>
	);
}
