import React from 'react';
import './styles.css';
import CocktailList from '../../components/CocktailList';
import SearchCocktail from '../../components/SearchCocktail';

const Home = () => {
    return (
        <div className='container_home'>
            <SearchCocktail />
            <CocktailList />
        </div>
    )
};

export default Home;

