import { useState } from "react";

import Form from "./components/Form";
import Result from "./components/Result";
import Footer from "./components/Footer";

import "./App.css";

function App() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");

	return (
		<>
			<Form
				name={name}
				setName={setName}
				email={email}
				setEmail={setEmail}
				password={password}
				setPassword={setPassword}
				passwordConfirm={passwordConfirm}
				setPasswordConfirm={setPasswordConfirm}
			/>
			<Result
				name={name}
				setName={setName}
				email={email}
				setEmail={setEmail}
				password={password}
				setPassword={setPassword}
				passwordConfirm={passwordConfirm}
				setPasswordConfirm={setPasswordConfirm}
			/>
			<Footer />
		</>
	);
}

export default App;
