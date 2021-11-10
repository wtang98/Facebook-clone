import './App.scss';
import Feed from './components/feed/feed';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';

const App = () => {
	return (
		<div className="App">
			<Header/>
			<div className="app__body">
				<Sidebar/>
				<Feed/>
			</div>
		</div>
	);
}

export default App;
