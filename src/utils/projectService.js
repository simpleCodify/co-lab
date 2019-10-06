import tokenService from "./tokenService";

const BASE_URL = "/api/projects/";

export function getAllProjects() {
	return fetch(BASE_URL).then(res => res.json());
}

export function create(project) {
	return fetch(BASE_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + tokenService.getToken()
		},
		body: JSON.stringify(project)
	}).then(res => res.json());
}
