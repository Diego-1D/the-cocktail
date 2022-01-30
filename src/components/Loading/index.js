import React from 'react';
import './styles.css';

const Loading = () => {
    return (
        <div className='loader' >
            <img 
            className='loader_img'
            src='https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/1c452c50852035.58db6295af86e.gif' 
            />
        </div>
    )
};

export default Loading;
