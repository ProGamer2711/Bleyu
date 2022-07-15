import { useState } from "react";

import "./SignUp.css";

export default function SignUp() {
	const [formState, setFormState] = useState({});

	const handleChange = e => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="signup">
			<form>
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
