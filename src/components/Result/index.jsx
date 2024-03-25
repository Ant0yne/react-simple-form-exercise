import "./result.css";

const Result = ({ name, email, password, setIsFormHidden }) => {
	return (
		<>
			<h1>Results</h1>
			<div className="container">
				<div id="result">
					<div>
						<p>
							<span>Name: </span>
							{name}
						</p>
						<p>
							<span>Email: </span>
							{email}
						</p>
						<p>
							<span>Password: </span>
							{password}
						</p>
					</div>
					<button onClick={() => setIsFormHidden(false)}>
						Edit your informations
					</button>
				</div>
			</div>
		</>
	);
};

export default Result;
