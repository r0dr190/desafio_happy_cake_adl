import './App.css';
import { Enrutador } from './components/Enrutador';
import { NavBar } from './components/NavBar';
import { BrowserRouter/* , Route, Routes  */} from 'react-router-dom';
/* import { Home } from './views/Home';
import { Contacto } from './views/Contacto'; */

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <NavBar/>
        <Enrutador/>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes> */}
      </BrowserRouter>  
    </div>
  );
}

export default App;
