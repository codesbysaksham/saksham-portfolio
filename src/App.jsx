import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MainLayout from './layouts/MainLayout';
import Loader from './components/Loader';

import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import NotFound from './pages/NotFound';

const App = () => {
  const [onFinish, setIsLoading] = useState(true);
  const location = useLocation();

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' in window ? 'instant' : 'auto',
    });
  }, [location.pathname]);

  return (
    <>
      {onFinish ? (
        <Loader onFinish={() => setIsLoading(false)} />
      ) : (
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      )}

      <ToastContainer
        position="bottom-right"
        theme="dark"
        autoClose={4000}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </>
  );
};

export default App;