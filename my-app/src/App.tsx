import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { loginUser, registerUser } from './services/api';
import { useRecoilState, useRecoilValue } from 'recoil';
import { authState } from './store';


function App() {
  const { isAuthenticated } = useRecoilValue(authState);
//Authentication ----
 
 
  // console.log()

  // const handleSignUp = (email: string, password: string) => {
  //   console.log('Sign Up', { email, password });
  //   // Implement your sign-up logic here
  //   registerUser(email, password)
  // };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <ProtectedRoute path="/dashboard" component={Dashboard} /> */}
        <Route path="/dashboard" element={isAuthenticated ?  <Dashboard /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
