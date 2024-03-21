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
	return (
		<>
			<main>
				<h1>Create account</h1>
				<form>
					<div>
						<h2>Name</h2>
						<input type="text" placeholder="Your name..." name="name" />
					</div>
					<div>
						<h2>Email</h2>
						<input type="email" placeholder="Your email..." name="email" />
					</div>
					<div>
						<h2>Password</h2>
						<input
							type="password"
							placeholder="Your password..."
							name="password"
						/>
					</div>
					<div>
						<h2>Confirm your password</h2>
						<input
							type="password"
							placeholder="Confirm your password..."
							name="passwordConfirm"
						/>
					</div>
					<input type="submit" value="Register" />
				</form>
			</main>
		</>
	);
};

export default Form;
