import React from 'react';
import './ImageForm.css';
import Clarifai from 'clarifai';

const ImageForm = ({ input, setInput, setBox, user, box, setImageURL, id, setUser }) => {
    // clarifai setup
    const app = new Clarifai.App({
        apiKey: `${process.env.REACT_APP_APIKEY}`
    });
    const calcFaceLocation = (data) => {
        const face = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('inputimage');
        const width = Number(image.width);
        const height = Number(image.height);
        return {
            leftCol: face.left_col * width,
            topRow: face.top_row * height,
            rightCol: width - (face.right_col * width),
            bottomRow: height - (face.bottom_row * height)
        }

    }
    const displayBox = (box) => {
        setBox(box);
    }

    const inputHandler = (e) => {
        setInput(e.target.value)
    }
    const submitSearch = () => {
        setImageURL(input)
        app.models.predict(Clarifai.FACE_DETECT_MODEL, input)
            .then(resp => {
                if (resp) {
                    fetch('https://green-pumpkin.herokuapp.com/image', {
                        method: 'put',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            id: id
                        })
                    })
                        .then(res => res.json())
                        .then(count => {
                            setUser({ ...user, entries: count })
                        })
                }
                displayBox(calcFaceLocation(resp))
            })
            .catch(err => console.log(err))
    }
    return (
        <div >
            <p className='f3'>
                This Magic Brain will detect faces in your pictures. Give it a try..
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
