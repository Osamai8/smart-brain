import React, { useState } from 'react';
import './App.css';
import SignOut from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageForm from './components/imageLinkForm/ImageForm';
import Rank from './components/rank/Rank';
import FaceRecognition from './components/facerecognition/FaceRecognition';
import Particles from 'react-particles-js';

function App() {
  const particleOptions = {
    particles: {
      number: {
        value: 80, density: {
          enable: true, value_area: 900
        }
      }
    }
  }
  const [input, setInput] = useState('');
  const [imageURL, setImageURL] = useState('');
  return (
    <div className="App">
      <Particles className='particles' params={particleOptions} />
      <SignOut />
      <Logo />
      <Rank />
      <ImageForm input={input} setInput={setInput} imageURL={imageURL} setImageURL={setImageURL} />
      <FaceRecognition imageURL={imageURL} setImageURL={setImageURL} />
    </div>
  );
}

export default App;
