import { Typography } from 'antd';
import React from 'react';
import './styles.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Typography.Title level={1} className='logo_title'>The Cocktail</Typography.Title>
            <div className='footer'>
                <Typography.Text level={3} className='footer_text'>
                    Copyright © 2022<br/>
                    The Cocktail<br/>
                    Todos os direitos reservados.
                </Typography.Text>
            </div>
        </div>
    )
};

export default Navbar;
