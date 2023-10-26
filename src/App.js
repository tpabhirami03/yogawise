

import './App.css';
import About from './Components/About';
import Blog from './Components/Blog';
import Clients from './Components/Clients';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import Home from './Components/Home';
import Quote from './Components/Quote';
import Services from './Components/Services';
import Status from './Components/Status';
import Trainers from './Components/Trainers';











function App() {
  return (
    <div className="App">
      
      <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#"><span class="text-info">Yoga</span>wise</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav1 ms-auto mb-2 mb-lg-0" />
              <li class="nav-item">
                <a class="nav-link home" href="#">Home</a>
              </li>
             
              
            <li class="nav-item">
                <a class="nav-link about" href="#about">About</a>
              </li>

              <li class="nav-item">
                <a class="nav-link services" href="#services">Services</a>
              </li>

              <li class="nav-item">
                <a class="nav-link trainers" href="#trainer">Trainers</a>
              </li>

              <li class="nav-item">
                <a class="nav-link blog" href="#blog">Blog</a>
              </li>

              <li class="nav-item">
                <a class="nav-link contact" href="#contact">Contact</a>
              </li>
              



          </div>
        </div>
    </nav>

    <Home />
    <About />
    <Status />
    <Services />
    <Clients />
    <Trainers />
    <Blog />
    <Quote />
    <Contact />
    <Footer />

    </div>
  );
}

export default App;
