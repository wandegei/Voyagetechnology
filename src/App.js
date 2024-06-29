import './App.css';
import Footer from './components/footer/footer';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/main/home';
import AboutUs from './components/About/AboutUs.js';
// import Blog from './components/blog/blog';
import Terms from './components/About/Pages/Terms';
import RequestQuotation from './components/About/RequestQuotation';
import ScrollToTop from './components/header/ScrollToTop';
import NotFound from './components/static/notFound';
import Contact from './components/Contacts/Contact';
import Service from './components/services/service';
import Product from './components/product/index';

function App () {
  return (
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/aboutus' element={<AboutUs/>} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/quote' element={<RequestQuotation />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service' element={<Service />} />
          <Route path='/products' element={<Product />} />
          {/* <Route path='/blog/*' element={<Blog/>} /> */}
          <Route path="*" element={<NotFound />} exact />
        </Routes>
        { window.location.pathname !== '/quote' && <Footer /> }
      </Router>
    
  );
}

export default App;
