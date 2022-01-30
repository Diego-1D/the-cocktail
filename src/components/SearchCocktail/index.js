import React from 'react';
import './styles.css';
import { Input } from 'antd';

import { useGlobalContext } from '../../services/context';

const SearchCocktail = () => {

    const { setSearchTerm } = useGlobalContext();

    return (
        <div className='search_cocktail'>
            <Input
                placeholder='Pesquisar por bebidas'
                style={{ borderRadius: 3 }} 
                onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            />
        </div>
    )
};

export default SearchCocktail;
