import { useState } from "react";

import "./form.css";

const Form = ({
	name,
	setName,
	email,
	setEmail,
	password,
	setPassword,
	passwordConfirm,
	setPasswordConfirm,
}) => {
	const [isPasswordDiff, setIsPasswordDiff] = useState(false);

	return (
		<>
			<main>
				<h1>Create account</h1>
				<form
					onSubmit={(e) => {
						if (password === passwordConfirm) {
							setIsPasswordDiff(false);
							e.preventDefault();
						} else {
							setIsPasswordDiff(true);
							e.preventDefault();
						}
					}}>
					<div>
						<h2>Name</h2>
						<input
							type="text"
							placeholder="Your name..."
							name="name"
							value={name}
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>
					</div>
					<div>
						<h2>Email</h2>
						<input
							type="email"
							placeholder="Your email..."
							name="email"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</div>
					<div>
						<h2>Password</h2>
						<input
							type="password"
							placeholder="Your password..."
							name="password"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
					</div>
					<div>
						<h2>Confirm your password</h2>
						<input
							type="password"
							placeholder="Confirm your password..."
							name="passwordConfirm"
							value={passwordConfirm}
							onChange={(e) => {
								setPasswordConfirm(e.target.value);
							}}
						/>
					</div>
					<input type="submit" value="Register" />
					{isPasswordDiff && (
						<h3>Les mots de passe doivent être identiques.</h3>
					)}
				</form>
			</main>
		</>
	);
};

export default Form;
