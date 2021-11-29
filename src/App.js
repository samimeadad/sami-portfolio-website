import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from "./Components/Shared/Footer";
import Header from "./Components/Shared/Header";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";

function App () {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/home" element={ <Home /> } />
          <Route exact path="/projects" element={ <Projects /> } />
          <Route exact path="/about" element={ <About /> } />
          <Route exact path="/contact" element={ <Contact /> } />
          <Route exact path="*" element={ <ErrorPage /> } />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
