export const setSession = (username, email, token, _id) => {
	const user = { username, email, _id, token };
	sessionStorage.setItem("User", JSON.stringify(user));
};

export const getSession = () => {
	return JSON.parse(sessionStorage.getItem("User"));
};

export const logoutSession = () => {
	sessionStorage.removeItem("User");
};
