import React from "react";
import "./signIn-styles.scss";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ email: "", password: "" });
	};

	handleChange = (e) => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						label="email"
						value={this.state.email}
						onChange={this.handleChange}
						required
					/>

					<FormInput
						name="password"
						type="password"
						label="password"
						value={this.state.password}
						onChange={this.handleChange}
						required
					/>

					<div className="buttons">
						<CustomButton type="submit"> Sign In </CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
