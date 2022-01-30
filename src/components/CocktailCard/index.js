import React from 'react';
import './styles.css';
import { Card } from 'antd';

const CocktailCard = ({ id, name, image, info, glass }) => {
    return (
        <>
            <Card
                key={id}
                className='card'
                hoverable
                cover={<img className='card_img' src={image} />}
            >
                <p className='title'>{name}</p>
                <p className='subtitle'>{glass}</p>
                <p className='title_gray'>{info}</p>
            </Card>
        </>
    );
};

export default CocktailCard;
