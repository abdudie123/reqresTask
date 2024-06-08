import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';
import { useRecoilState } from 'recoil';
import { authState } from '../store';
import Modal from '../components/Modal';

interface SignInProps {
  onSignIn: (email: string, password: string) => void;
}

const SignIn: React.FC = () => {
    const navigate = useNavigate()
  const [auth, setAuth] = useRecoilState(authState);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showWrongUserModal, setShowWrongUserModal] = useState(false);

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault()
    // Logic to handle login
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const handleSubmit = () => {
    // event.preventDefault();
    handleSignIn(email, password);
  };

  const handleWrongUser = () => {
    setShowWrongUserModal(true)
  }
  const handleSignIn = async (email: string, password: string) => {
    console.log('Sign In', { email, password });

    try {
      // Call loginUser asynchronously
      await loginUser(email, password);
      
      // Update authState after successful login
      setAuth({
        isAuthenticated: true,
        user: email, // Update this with actual user data if available
      });
      navigate('/dashboard')
      
    } catch (error) {
      // Handle login error
    //   handleLogin()
    closeModal()
    handleWrongUser()
      console.error('Login failed:', error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign In
          </button>
          <div className='flex mt-3'>
                <span className='text-xs'>Not a user<span className='text-blue-500 cursor-pointer' onClick={() => navigate("/signup")}> Signup Now</span></span>
          </div>
        </form>
      </div>
      {showModal && (
        <Modal
          title="Login Confirmation"
          body="Are you sure, You want to Login"
          footer={<div className='flex gap-4'><button onClick={() =>handleSubmit()}>Yes, Login</button>
          <button onClick={closeModal}>Close</button></div>}
        />
      )}
      {showWrongUserModal && (
        <Modal
          title="Login Failed"
          body="Wrong User"
          footer={<button onClick={() => setShowWrongUserModal(false)}>Close</button>}
        />
      )}
    </div>
  );
};

export default SignIn;
