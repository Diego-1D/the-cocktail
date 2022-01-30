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
        <div className='container_cocktailist'>
            <SearchCocktail />
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
            <div className='section_cocktails'>
                <Row gutter={[52, 32]} justify='center'>
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
        </div>
    )
};

export default CocktailList;
