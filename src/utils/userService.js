import tokenService from "./tokenService";

const BASE_URL = "/api/users/";

function signup(user) {
	return (
		fetch(BASE_URL + "signup", {
			method: "POST",
			headers: new Headers({ "Content-Type": "application/json" }),
			body: JSON.stringify(user)
		})
			.then(res => {
				if (res.ok) return res.json();
				// Probably a duplicate email
				throw new Error("Email already taken!");
			})
			// Parameter destructuring!
			.then(({ token }) => tokenService.setToken(token))
	);
}

function updateProfile(data) {
	console.log("INSIDE USERSERVICE UPDATE PROFILE :  ", data);
	return fetch(BASE_URL + data._id + "/update", {
		method: "PUT",
		headers: { "content-type": "application/json" },
		body: JSON.stringify(data)
	}).then(res => res.json());
}

function getUser() {
	return tokenService.getUserFromToken();
}

function logout() {
	tokenService.removeToken();
}

function login(creds) {
	return fetch(BASE_URL + "login", {
		method: "POST",
		headers: new Headers({ "Content-Type": "application/json" }),
		body: JSON.stringify(creds)
	})
		.then(res => {
			// Valid login if we have a status of 2xx (res.ok)
			if (res.ok) return res.json();
			throw new Error("Bad Credentials!");
		})
		.then(({ token }) => tokenService.setToken(token));
}

export default {
	signup,
	updateProfile,
	getUser,
	logout,
	login
};
