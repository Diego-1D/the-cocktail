import React, { useEffect, useState } from 'react';
import './styles.css';
import Loading from '../../components/Loading';
import { useParams, Link } from 'react-router-dom';
import { Button, Typography } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

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
        return <Loading />
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
        <div className='container_detail'>
            <Link to='/' >
                <Button size='large' className='back_button' >
                    <ArrowLeftOutlined />Voltar</Button>
            </Link>
            <div className='area_info'>
                <img className='img_detail' src={image} alt={name} />
                <div className='info'>
                    <Typography.Title level={4}>Name:
                        <Typography.Text className='text_desc'>{name}</Typography.Text>
                    </Typography.Title>
                    <Typography.Title level={4} >Info:
                        <Typography.Text className='text_desc' >{info}</Typography.Text>
                    </Typography.Title>
                    <Typography.Title level={4}>Glass:
                        <Typography.Text className='text_desc' >{glass}</Typography.Text>
                    </Typography.Title>
                    <Typography.Title level={4}>Instructions:
                        <Typography.Text className='text_desc' >{instructions}</Typography.Text>
                    </Typography.Title>
                    <Typography.Title level={4}>Ingredients:
                        {
                            ingredients.map((item, index) => {
                                return item ?
                                    <Typography.Text key={index} className='text_desc' >{item}, </Typography.Text>
                                    :
                                    null
                            })
                        }
                    </Typography.Title>
                </div>
            </div>
        </div>
    );
};

export default CocktailDetails;
