import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'; // Create this file with the code you already have
import Signup from './pages/SignUp';
import Blog from './pages/Blog';
import Support from './pages/Support'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/home" element={<Home/>}/>

      </Routes>
    </Router>
  );
};

export default App;
