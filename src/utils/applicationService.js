import tokenService from "./tokenService";

const BASE_URL = "/api/applications/";

export function create(application) {
	return fetch(BASE_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + tokenService.getToken()
		},
		body: JSON.stringify(application)
	}).then(res => res.json());
}
