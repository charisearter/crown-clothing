import { Switch, Route } from "react-router";

import "./App.scss";

import SignInAndSignUpPage from "./pages/signIn-signUp/SignIn-SignUp.jsx";
import Header from "./components/header/Header";
import HomePage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/Shop";

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/signin" component={SignInAndSignUpPage} />
			</Switch>
		</div>
	);
}

export default App;
