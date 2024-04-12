import {Outlet, useLocation} from 'react-router-dom';
import Navbar from './Navbar';
import { useEffect } from 'react';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Root = () => {
    const loc = useLocation();
    
    useEffect(()=>{

        if(loc.pathname === '/')
        {
            document.title = "MEGA REALTOR";
        }
        else{
        document.title = `${loc.pathname.replace("/", "").toUpperCase()}`;
        }

        if (loc.state)
        {
            document.title = `${loc.state}`;
        }



        console.log(loc);
    },[loc.pathname]);
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;