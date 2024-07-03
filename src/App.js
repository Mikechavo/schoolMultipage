// CSS file created
import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Home from './pages/Home';
import Dallas from './pages/Dallas';
import Houston from './pages/Houston';
import Capital from './pages/Capital';
import Contact from './pages/Contact';

// App.js is being used to store the Header component which contains the header and nav for each page. App.js is also storing the Pages for the JS components using HTML, CSS and bootstrap

const App = () => {
  return (
    <div className="App">
      
      {/* Header component has header and nav */}
      <header>
        <Header />
      </header>
      
      <main>
        <div>
          {/* The Routes to the pages using react-router-dom */}
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