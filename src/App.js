import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { Projects } from './components/Projects';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
