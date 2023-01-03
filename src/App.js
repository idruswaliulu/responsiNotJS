import logo from './logo.svg';
import './App.css';
import Accordion from 'react-bootstrap/Accordion';
import Navigation from './components/Navigation';
import Maincontent from './components/Maincontent';


function App() {
    return (
      <div>
      <Navigation />
      <Maincontent />
      </div>
    );
}

export default App;
