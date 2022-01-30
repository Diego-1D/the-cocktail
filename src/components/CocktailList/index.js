import React from 'react';
import './styles.css';
import { Card, Col, Row } from 'antd';

const CocktailList = () => {
    return (
        <div className='container_cocktailist'>
            <Row gutter={[32, 32]}>
                <Col xs={24} sm={12} lg={6}>
                    <Card
                        extra={<img className='card_img' src='https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg' />}
                    >
                        <p>Karsk</p>
                        <p>Highball glass</p>
                        <p>Alcoholic</p>
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card
                        extra={<img className='card_img' src='https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg' />}
                    >
                        <p>Karsk</p>
                        <p>Highball glass</p>
                        <p>Alcoholic</p>
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6} >
                    <Card
                        extra={<img className='card_img' src='https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg' />}
                    >
                        <p>Karsk</p>
                        <p>Highball glass</p>
                        <p>Alcoholic</p>
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6} >
                    <Card
                        extra={<img className='card_img' src='https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg' />}
                    >
                        <p>Karsk</p>
                        <p>Highball glass</p>
                        <p>Alcoholic</p>
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card
                        extra={<img className='card_img' src='https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg' />}
                    >
                        <p>Karsk</p>
                        <p>Highball glass</p>
                        <p>Alcoholic</p>
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card
                        extra={<img className='card_img' src='https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg' />}
                    >
                        <p>Karsk</p>
                        <p>Highball glass</p>
                        <p>Alcoholic</p>
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card
                        extra={<img className='card_img' src='https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg' />}
                    >
                        <p>Karsk</p>
                        <p>Highball glass</p>
                        <p>Alcoholic</p>
                    </Card>
                </Col>
            </Row>

        </div>
    )
};

export default CocktailList;
