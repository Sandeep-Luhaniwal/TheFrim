import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from './Compoments/Common/NavBar';
import Footer from './Compoments/Common/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Compoments/Pages/Home';
import Solution from './Compoments/Pages/Solution';
import Cases from './Compoments/Pages/Cases';
import AboutUs from './Compoments/Pages/AboutUs';
import Bloglink from './Compoments/Pages/Bloglink';
import Contact from './Compoments/Pages/Contact';
import BacktoTop from './Compoments/BacktoTop';

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