import React from 'react';
import './styles.css';
import Navbar from '../../components/Navbar';
import CocktailList from '../../components/CocktailList';

const Home = () => {
    return (
        <div className='container_home'>
            <Navbar/>
            <CocktailList/>
        </div>
    )
};

export default Home;

