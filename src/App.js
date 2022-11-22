import './App.css';
import {Routes,Route} from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<SignupPage/>} />
        <Route path='/login' exact element={<LoginPage/>} />
      </Routes>
    </div>
  );
}

export default App;
