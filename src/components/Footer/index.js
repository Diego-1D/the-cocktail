import React from 'react';
import './styles.css';
import { Typography } from 'antd';

const Footer = () => {
    return (
        <div className='footer'>
            <Typography.Text level={3} className='footer_text'>
                Copyright © 2022<br />
                The Cocktail<br />
                All rights reserved.
            </Typography.Text>
        </div>
    );
};

export default Footer;
