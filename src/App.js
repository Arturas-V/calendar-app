import React from "react";
import { Provider } from "react-redux";

// Components
import Main from './Components/Main.js'
import store from './store'

// style imports
import './App.css';

class App extends React.Component {

	render() {
		return(
			<Provider store={store}>
				<React.Fragment>
				    <Main />
				</React.Fragment>
			</Provider>
		)		
	}

}

export default App;