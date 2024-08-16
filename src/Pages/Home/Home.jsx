import React, { useContext, useState } from 'react';
import './toggle.css';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import { AuthContext } from '../../provider/AuthProvider';
import LogRegComponent from './LogRegComponent';
import AllProducts from '../../Components/AllProducts/AllProducts';

const Home = () => {
 const { user, loading } = useContext(AuthContext);

  return (
        <div>
            {!user?
            <LogRegComponent/>
            :
            <div>
                <h1 className='text-2xl lg:text-5xl font-bold text-center'>Welcome to StyleRoom</h1>
                <p>Your Fashion at Home</p>
                <AllProducts/>
            </div>}
        </div>
    );
};

export default Home;
