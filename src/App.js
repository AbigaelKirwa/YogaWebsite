import './App.css';
import Navbar from './components/Navbar.jsx'
import MainContent from './components/MainContent.jsx'
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainContent/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;