import './App.css';
import Navbar from './components/Navbar.jsx'
import MainContent from './components/MainContent.jsx'
import Services from './components/Services';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainContent/>
      <Services/>
      <About/>
    </div>
  );
}

export default App;