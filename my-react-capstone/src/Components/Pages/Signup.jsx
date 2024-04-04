import  { useState } from 'react';
import { supabase } from '../../Client';


const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      // Perform password match validation
      if (formData.password !== formData.confirmPassword) {
        throw new Error('Passwords do not match');
      }

      // Sign up with Supabase
      const { user, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password
      });

      if (error) {
        throw error;
      }

      alert('Sign up successful!');
      // Redirect or perform any other action upon successful sign-up
    } catch (error) {
      alert('Sign up failed. Please try again.');
      console.error('Sign up error:', error.message);
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="surname"
        placeholder="Surname"
        value={formData.surname}
        onChange={handleChange}
      />
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
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
