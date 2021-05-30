import { Switch, Route } from "react-router";
import "./App.scss";

import Header from './components/header/Header'
import HomePage from "./pages/homepage/Homepage";
import ShopPage from './pages/shop/Shop'


function App() {
	return (
    <div>
      <Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
