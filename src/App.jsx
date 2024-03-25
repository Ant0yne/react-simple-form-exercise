import { useState } from "react";

import Form from "./components/Form";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
library.add(faEyeSlash, faEye);

import "./App.css";

function App() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");

	return (
		<>
			{/* gérer l'apparition de Form et Result avec une ternaire */}
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
			<Footer />
		</>
	);
}

export default App;
