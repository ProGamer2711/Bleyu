export const registerUser = async ({ username, email, password, imageUrl }) => {
	const response = await fetch(
		"https://bleyu-server.herokuapp.com/auth/register",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username,
				email,
				password,
				imageUrl: imageUrl || undefined,
			}),
		}
	).catch(err => {
		throw err;
	});

	const data = await response.json();

	return data;
};
