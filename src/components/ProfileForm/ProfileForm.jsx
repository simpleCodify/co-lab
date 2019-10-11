import React from "react";

const ProfileForm = props => {
	return (
		<>
			<div>
				<h1> Edit your Profile! </h1>
				<hr />
				<div>
					<h4>{props.user.name}</h4>
					<h5>{props.user.email}</h5>
				</div>
			</div>
		</>
	);
};

export default ProfileForm;
