import React, { useEffect, useState } from 'react';
import './styles.css';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { Typography } from 'antd';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const CocktailDetails = () => {

    const { id } = useParams();
    const [cocktail, setCocktail] = useState(null);

    useEffect(() => {
        async function getCocktail() {
            try {
                const response = await fetch(`${url}${id}`)
                const data = await response.json();
                if (data.drinks) {
                    const {
                        strDrink: name,
                        strDrinkThumb: image,
                        strAlcoholic: info,
                        strGlass: glass,
                        strInstructions: instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    } = data.drinks[0]
                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    ]
                    const newCocktail = {
                        name,
                        image,
                        info,
                        glass,
                        instructions,
                        ingredients
                    }
                    setCocktail(newCocktail);
                } else {
                    setCocktail(null);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getCocktail();
    }, [id]);

    if (!cocktail) {
        return <h2>no cocktial to display</h2>
    }

    const {
        name,
        image,
        info,
        glass,
        instructions,
        ingredients
    } = cocktail;

    return (
        <>
            <div className='container_detail'>
                <div className='area_info'>
                    <img className='img_detail' src={image} alt={name} />
                    <div className='info'>
                        <Typography.Title level={4} >Name: {name}</Typography.Title>
                        <Typography.Title level={4}>Info: {info}</Typography.Title>
                        <Typography.Title level={4}>Glass: {glass}</Typography.Title>
                        <Typography.Title level={4}>Instructions: {instructions}</Typography.Title>
                        <Typography.Title level={4}>Ingredients: </Typography.Title>
                        {
                            ingredients.map((item, index) => {
                                return item ?
                                <Typography.Title level={5} key={index}>{item}</Typography.Title>
                                    :
                                    null
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default CocktailDetails;
