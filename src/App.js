import './App.css';
import Competence from './Components/Competence';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Header from './Components/Header';
import Porfolio from './Components/Porfolio';
import Section1 from './Components/Section1';

function App() {
  return (
    <div className="App">
        <Header/>
        <Section1/>
        <Porfolio/>
        <Competence/>
        <Experience/>
        <Contact/>
    </div>
  );
}

export default App;