import { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './pages/LandingPage';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Navbar from './components/CustomNavbar';
import Skills from './pages/Skills';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './asset/styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Router>
    <Fragment>
      <Navbar />
        <Routes>
          <Route path='/*' element={<LandingPage />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path='/skills' element={<Skills />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
      </Routes>
    </Fragment>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
