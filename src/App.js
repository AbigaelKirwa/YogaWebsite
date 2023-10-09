import './App.css';
import Navbar from './components/Navbar.jsx'
import MainContent from './components/MainContent.jsx'
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainContent/>
      <Services/>
    </div>
  );
}

export default App;