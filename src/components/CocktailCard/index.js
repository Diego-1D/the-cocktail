import { Card, Col, Row } from 'antd';
import React from 'react';

const CocktailCard = () => {
    return (
        <>
            <Row gutter={[32, 32]}>
                <Col xs={24} sm={12} lg={6}>
                    <Card
                        title='Karsk'
                    >
                        <p>Karsk</p>
                        <p>Highball glass</p>
                        <p>Alcoholic</p>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default CocktailCard;
