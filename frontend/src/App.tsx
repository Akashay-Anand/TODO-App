import {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Todo from './components/todos/Todo';
import Navbar from './components/navbar/Navbar';

function App() {
  const info = localStorage.getItem('user');
  const [user, setUser] = useState(JSON.parse(info));

  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* {user ? <Route path="/todo" element={<Todo />} />
          : <Route path="/todo" element={<p>need to login first</p>} />} */}
          <Route path="/todo" element={<Todo />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <p>.</p>
    </>
  );
}

export default App;
