import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from './compoments/common/NavBar';
import Footer from './compoments/common/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './compoments/pages/Home';
import Solution from './compoments/pages/Solution';
import Cases from './compoments/pages/Cases';
import AboutUs from './compoments/pages/AboutUs';
import Bloglink from './compoments/pages/Bloglink';
import Contact from './compoments/pages/Contact';
import BacktoTop from './compoments/BacktoTop';

function App() {


    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={< Home />}></Route>
                <Route path='/solution' exact element={<Solution />}></Route>
                <Route path='/case' element={< Cases />}></Route>
                <Route path='/aboutus' element={<AboutUs />}></Route>
                <Route path='/blog' element={<Bloglink />}></Route>
                <Route path='/contactus' element={< Contact />}></Route>
            </Routes>
            <BacktoTop />
            <Footer />
        </>
    );
}

export default App;