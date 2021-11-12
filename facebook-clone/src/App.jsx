import './App.scss';
import Feed from './components/feed/feed';
import Widgets from './components/feed/widgets/widgets';
import Header from './components/header/header';
import Login from './components/login/login';
import Sidebar from './components/sidebar/sidebar';

const App = () => {
	const user = null;

	return (
		<div className="app">
			{!user ? (<Login/>
			):(
				<>
					<Header />
					<div className="app__body">
						<Sidebar />
						<Feed />
						<Widgets />
					</div>
				</>
			)}
		</div>
	);
}

export default App;
