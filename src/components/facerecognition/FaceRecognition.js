import React from 'react';

const FaceRecognition = ({ imageURL, setImageURL }) => {
    return (
        <div className="center">
            <img
                src={imageURL}
                alt=''
                style={{ height: '100%', width: '70vw' }} />
        </div>
    )
}

export default FaceRecognition;