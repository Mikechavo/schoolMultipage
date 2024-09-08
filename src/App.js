// CSS file created
import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home';
import Lodging from './pages/Lodging';
import Freq from './pages/Freq';
import People from './pages/Peoples';
import Todo from './pages/Todo';
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
            <Route path="/todo" element={<Todo />} />
            <Route path="/lodging" element={<Lodging />} />
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/freq" element={<Freq />} /> 
            <Route path="/people" element={<People />} /> 
          </Routes>
        </div>
      </main>
      <Footer />
    </div>

  );
}

export default App;