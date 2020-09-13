import React from 'react';
import './Widgets.css';
import pic4 from './images/Our Sci-Fi Future.png'

const Widgets = () => {
    return (
        <div className="widgets">
            <iframe 
            src={pic4} 
            frameborder="0" 
            width='340' 
            height='100%' 
            style={{ border:'none', overflow: 'hidden'}} 
            scrolling='no' 
            allowTransparency='true' 
            allow='encrypted-media'>

            </iframe>
        </div>
    );
};

export default Widgets;