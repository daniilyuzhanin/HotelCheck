// import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SignInPage } from 'pages/SignInPage';
import { HomePage } from 'pages/HomePage';

export const Router = () => {
  return (
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<SignInPage />}/>
      </Routes>
  )
};
