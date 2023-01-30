
import { Route, Routes} from 'react-router-dom';
import './App.css';
import LandingPage from './pages/landing page/LandingPage';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route exact path='/' element={<LandingPage/>} />
        </Routes>
      </div>
  );
}

export default App;
