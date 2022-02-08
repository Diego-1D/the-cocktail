import React from 'react';
import './styles.css';
import SearchCocktail from '../SearchCocktail';
import { useGlobalContext } from '../../services/context';
import CocktailCard from '../CocktailCard';
import { Col, Row, Typography } from 'antd';
import Loading from '../Loading';

const CocktailList = () => {

    const { cocktails, loading } = useGlobalContext();

    return (
        <div className='section_cocktaillist'>
            {
                loading ?
                    <Loading />
                    :
                    cocktails.length < 1 &&
                    <Typography.Title
                        level={3}
                        style={{ textAlign: 'center', marginTop: 70 }} >
                        Ops! Nenhuma uma bebida foi encontrada!
                    </Typography.Title>
            }
            <Row gutter={[42, 42]} justify='center'>
                {
                    cocktails.map((item, key) => {
                        return (
                            <Col>
                                <CocktailCard key={key} {...item} />
                            </Col>
                        )
                    })
                }
            </Row>

        </div>
    )
};

export default CocktailList;
