import './App.css';
import Mensaje from "./Mensaje";

function App() {
	
	return (
		<div className="App">
			<Mensaje color='red' message='Estamos trabajando' />
			<Mensaje color='green' message='En un curso' />
			<Mensaje color='orange' message='De React' />
		</div>
	);
}

export default App;
