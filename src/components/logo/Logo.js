import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 65 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pd3 ">
                    <img src={brain} alt='brain-logo' id='brain' />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;