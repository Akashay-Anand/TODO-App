import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import './styleForm.css';
import { login } from '../../services/api';

function Login() {
  const navigation = useNavigate();

  const info = localStorage.getItem('user');
  const [user, setUser] = useState(JSON.parse(info));
  
  useEffect(() => {
    if (user) {
      navigation('/todo');
    }
  }, []);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const result = await login(formData);

      if (result.status === 200) {
        localStorage.setItem('user', JSON.stringify(result.data));
        navigation('/todo');
      } else {
        setError(result.data.error);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-page">
        <div className="form">
          <form className="login-form" method="POST">
            <input
              type="text"
              placeholder="email"
              onChange={handleChange}
              name="email"
              required
            />
            <input
              type="password"
              placeholder="password"
              onChange={handleChange}
              name="password"
              required
            />
            {error && <p>details might be wrong</p>}
            <button type="submit" onClick={handleSubmit}>login</button>
            <p className="message">
              Not registered?
              <a href="/signup">Create an account</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
