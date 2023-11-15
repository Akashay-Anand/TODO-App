import Navbar from '../navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { signup } from '../../services/api';
import './styleForm.css';

function Signup() {
  const navigation = useNavigate();

  const info = localStorage.getItem('user');
  const [user, setUser] = useState(JSON.parse(info));

  useEffect(() => {
    if (user) navigation('/todo');
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const result = await signup(formData);

      if (result.status === 200) {
        // console.log(result)
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
          <form className="register-form">
            <input
              type="text"
              placeholder="name"
              onChange={handleChange}
              name="name"
              required
            />
            <input
              type="text"
              placeholder="email address"
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
            {error && <p>{error}</p>}
            <button type="submit" onClick={handleSubmit}>SignUp </button>
            <p className="message">
              Already registered?
              <a href="/login">Sign In</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
