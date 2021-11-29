// import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SignInPage } from 'pages/SignInPage';

export const Router = () => {
  return (
      <Routes>
        <Route path='/' element={<div>Home</div>}/>
        <Route path='/login' element={<SignInPage />}/>
      </Routes>
  )
};
