import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Packages from './components/Packages';

function App() {
	return (
		<>
			<Hero />
			<About />
			<Packages />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
