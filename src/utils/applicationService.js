import tokenService from "./tokenService";

const BASE_URL = "/api/applications/";

export function getAllApplications() {
	return fetch(BASE_URL).then(res => res.json());
}

export function getPosApplications(id) {
	return fetch(BASE_URL + id).then(res => res.json());
}

export function appApprove(app) {
	console.log(app);
	let application = { _id: `${app}` };
	return fetch(`${BASE_URL}${app}/approve`, {
		method: "PUT",
		headers: { "content-type": "application/json" },
		body: JSON.stringify(application)
	}).then(res => res.json());
}

export function appReject(app) {
	console.log(app);
	let application = { _id: `${app}` };
	return fetch(`${BASE_URL}${app}/reject`, {
		method: "PUT",
		headers: { "content-type": "application/json" },
		body: JSON.stringify(application)
	}).then(res => res.json());
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
