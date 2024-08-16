import React, { useContext } from 'react';
import {Outlet} from 'react-router-dom'

import { AuthContext } from '../provider/AuthProvider';
import Footer from '../Components/Footer/Footer';
import Nav from '../Components/Nav/Nav';

const MainLayout = () => {
    const {loading}=useContext(AuthContext);
    // if (loading) {
    //     return <>
    //         <div className="flex items-center justify-center ">
    //             <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
    //         </div>
    //     </>;

    // }


    return (

        <div>
          
            <div className='max-w-6xl mx-auto'>
                   <Nav></Nav>
                <Outlet></Outlet>
               
            </div> 
            <Footer ></Footer>
        </div>
    );
};

export default MainLayout;