import Home from './pages/Home';
import Industries from './pages/Industries';
import Companies from './pages/Companies';
import Career from './pages/Career';
import Contact from './pages/Contact';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/industries' element= {<Industries/>}/>
      <Route path='/companies' element= {<Companies/>}/>
      <Route path='/career' element= {<Career/>}/>
      <Route path='/contact' element= {<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
