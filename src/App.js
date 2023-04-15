import logo from './logo.svg';
import './App.css';
import Signup from '../src/components/Signup';
import Home from '../src/components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from '../src/components/ProtectedRoute';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/signup" element={<Signup />} />
       <Route exact path='/' element={<ProtectedRoute/>}>
         <Route exact path='/' element={<Home/>}/>
       </Route>
      </Routes>
    </Router>
  );
}

export default App;
