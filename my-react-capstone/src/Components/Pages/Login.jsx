import  { useState } from 'react';
import { supabase } from '../../Client';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Sign in with Supabase
      const { user, error } = await supabase.auth.signIn({
        email: formData.email,
        password: formData.password
      });

      if (error) {
        throw error;
      }

      alert('Login successful!');
      // Redirect or perform any other action upon successful login
    } catch (error) {
      alert('Login failed. Please check your email and password.');
      console.error('Login error:', error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Log In</button>
    </form>
  );
};

export default Login;
