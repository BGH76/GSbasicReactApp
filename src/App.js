import Nav from './components/Nav';
import Welcome from './components/Welcome';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

 const App = () => {
  return (
    <div className="App">
      <Nav />
      <Welcome />
      <About />
      <Footer />
    </div>
  );
}

export default App;
