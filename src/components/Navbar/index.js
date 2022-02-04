import React from 'react';
import './styles.css';
import { Typography } from 'antd';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Typography.Title level={2} className='logo_title'>The Cocktail</Typography.Title>
            <div className='footer_nav'>
                <Typography.Text className='footer_text_nav'>
                    Copyright © 2022<br />
                    The Cocktail<br />
                    All rights reserved.
                </Typography.Text>
            </div>
        </div>
    )
};

export default Navbar;
