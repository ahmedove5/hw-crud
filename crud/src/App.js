import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as  Router, Routes , Route } from 'react-router-dom';
import Creat from './component/Creat';
import Users from "./component/Users"
import Nvbar from './component/Nvbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Nvbar/>
        <Routes>
          <Route>
          <Route path="/" element={<Creat/> }></Route>
          <Route path="/Users" element={<Users/> }></Route>
          </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
