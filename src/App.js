
import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Home from './pages/Home';
import Dallas from './pages/Dallas';
import Houston from './pages/Houston';
import Capital from './pages/Capital';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div className="App">
      
      <header>
        <Header />
      </header>
      
      <main>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/capital" element={<Capital />} />
            <Route path="/dallas" element={<Dallas />} />
            <Route path="/houston" element={<Houston />} /> 
            <Route path="/contact" element={<Contact />} /> 
          </Routes>
        </div>
      </main>
    </div>

  );
}

export default App;