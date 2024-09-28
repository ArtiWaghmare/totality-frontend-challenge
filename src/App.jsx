
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Home from './components/Home/Home';
// import AboutUs from './components/AboutUs/AboutUs';
// import Contact from './components/Contact/Contact';
// import Villas from './components/Villa/Villas';
// import SingleVilla from './components/Villa/SingleVilla';
// import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
// import './App.css';
// import Registration from './components/Registration/Registration';
// import Login from './components/Login/Login';
// import { AuthProvider } from './context/AuthContext'; // No need to import useAuth here

// const AppContent = () => {
//   const location = useLocation();

//   // Define routes where Navbar and Footer should be hidden
//   const hideNavAndFooterRoutes = ['/login', '/register'];
//   const shouldHideNavAndFooter = hideNavAndFooterRoutes.includes(location.pathname);

//   return (
//     <>
//       {/* Conditionally render Navbar */}
//       {!shouldHideNavAndFooter && <Navbar />}

//       <Routes>
//         <Route path='/home' element={<Home />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/register' element={<Registration />} />
//         <Route path='/aboutus' element={<AboutUs />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/termsandconditions' element={<TermsAndConditions />} />
//         <Route path='/villas' element={<Villas />} />
//         <Route path='/villa/:id' element={<SingleVilla />} />
//       </Routes>

//       {/* Conditionally render Footer */}
//       {!shouldHideNavAndFooter && <Footer />}
//     </>
//   );
// };

// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <AppContent />
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;
// App.js
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Villas from './components/Villa/Villas';
import SingleVilla from './components/Villa/SingleVilla';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { AuthProvider } from './context/AuthContext';

const AppContent = () => {
  const location = useLocation();
  const hideNavAndFooterRoutes = ['/login', '/register'];
  const shouldHideNavAndFooter = hideNavAndFooterRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavAndFooter && <Navbar />}
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/termsandconditions' element={<TermsAndConditions />} />
        <Route path='/villas' element={<Villas />} />
        <Route path='/villa/:id' element={<SingleVilla />} />
      </Routes>
      {!shouldHideNavAndFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
};

export default App;
