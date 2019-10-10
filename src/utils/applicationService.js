import tokenService from "./tokenService";

const BASE_URL = "/api/applications/";
const SPECIFIC_URL = "/api/applications/:id";

export function getAllApplications() {
	return fetch(BASE_URL).then(res => res.json());
}

export function getPosApplications(id) {
	return fetch(BASE_URL + id).then(res => res.json());
}

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
