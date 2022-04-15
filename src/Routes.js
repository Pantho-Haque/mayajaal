import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import PublicRoute from './PublicRoute.jsx';
// import PrivateRoute from './PrivetRoute.jsx';
import CourseDetails from './components/CourseDetails';
import Registration from './components/Registration';
import Home from './components/Home';
import ConfirmReg from './components/ConfirmReg';

export default function MainRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/CourseDetails" element={<CourseDetails />} />
        <Route path="/regconfirm" element={<ConfirmReg />} />

        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
