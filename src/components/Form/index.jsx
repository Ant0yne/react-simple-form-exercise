import { useState } from "react";

import Result from "../Result";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
	const [isFieldEmpty, setisFieldEmpty] = useState(false);
	const [isFormHidden, setIsFormHidden] = useState(false);
	const [eyeIcon, setEyeIcon] = useState("eye");
	const [passwordType, setPasswordType] = useState("password");

	const handleSubmit = (e) => {
		if (password !== passwordConfirm) {
			e.preventDefault();
			setIsPasswordDiff(true);
			setisFieldEmpty(false);
		} else if (!name || !email || !password || !passwordConfirm) {
			e.preventDefault();
			setisFieldEmpty(true);
			setIsPasswordDiff(false);
		} else {
			e.preventDefault();
			setIsPasswordDiff(false);
			setisFieldEmpty(false);
			setIsFormHidden(true);
		}
	};

	const revealPassword = () => {
		if (eyeIcon === "eye") {
			setEyeIcon("eye-slash");
			setPasswordType("text");
		} else {
			setEyeIcon("eye");
			setPasswordType("password");
		}
	};

	return (
		<>
			<main>
				<div className={isFormHidden ? "hidden" : ""}>
					<h1>Create account</h1>
					<form onSubmit={handleSubmit}>
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
						<div className={isPasswordDiff ? "wrong-confirm" : ""}>
							<h2>Password</h2>
							<input
								type={passwordType}
								placeholder="Your password..."
								name="password"
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
							/>
							<div>
								<FontAwesomeIcon icon={eyeIcon} onClick={revealPassword} />
							</div>
						</div>
						<div className={isPasswordDiff ? "wrong-confirm" : ""}>
							<h2>Confirm your password</h2>
							<input
								type={passwordType}
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
						{isFieldEmpty && <h3>Tous les champs doivent être remplis.</h3>}
					</form>
				</div>
				<div className={!isFormHidden ? "hidden" : ""}>
					<Result
						name={name}
						email={email}
						password={password}
						setIsFormHidden={setIsFormHidden}
					/>
				</div>
			</main>
		</>
	);
};

export default Form;
