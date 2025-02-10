import Projects from "./Projects";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import {useState} from 'react'

const Portfolio = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
  
    return (
      <div className={darkMode ? "dark" : "light"}>
        <header>
          <h1 >My Portfolio</h1>
          <button onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </header>
        <main>
          <AboutMe />
          <Projects />
          <ContactMe />
        </main>
        <footer>
          <p>&copy; 2025 RC Alum</p>
        </footer>
      </div>
    );
}

export default Portfolio