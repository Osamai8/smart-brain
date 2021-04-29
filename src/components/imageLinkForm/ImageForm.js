import React from 'react';
import './ImageForm.css';
import Clarifai from 'clarifai';

const ImageForm = ({ input, setInput, imageURL, setImageURL }) => {
    // clarifai setup
    const app = new Clarifai.App({
        apiKey: "60e31c6e64044a8c9fcb1b0e38ffc8be"
    });

    const inputHandler = (e) => {
        setInput(e.target.value)
    }
    const submitSearch = () => {
        setImageURL(input)
        app.models.predict(Clarifai.FACE_DETECT_MODEL, input).then(
            function (resp) {
                console.log(resp.outputs[0].data.regions[0].region_info.bounding_box);
            },
            function (err) {
                // there is an error
            }
        )
    }
    return (
        <div >
            <p className='f3'>
                This Magic Barin will detect faces in your pictures. Give it a try..
        </p>
            <div className='center'>
                <div className='form'>
                    <input
                        type='text w-70'
                        value={input}
                        placeholder='enter image url to check'
                        onChange={inputHandler} />
                    <button
                        onClick={submitSearch}
                        className='grow f4 link dib white bg-light-green '>Detect</button>
                </div>
            </div>
        </div>

    )
}

export default ImageForm;
