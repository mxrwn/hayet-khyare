import { Routes, Route } from 'react-router-dom';
import Formations from './pages/formations';
import Consultations from './pages/consultations';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div className="app">
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
