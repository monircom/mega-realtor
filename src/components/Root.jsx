import {Outlet, useLocation} from 'react-router-dom';
import Navbar from './Navbar';
import { useEffect } from 'react';
import Footer from './Footer';

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