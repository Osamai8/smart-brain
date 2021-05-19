import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SignOut from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageForm from './components/imageLinkForm/ImageForm';
import Rank from './components/rank/Rank';
import FaceRecognition from './components/facerecognition/FaceRecognition';
import SignIn from './components/registration/SignIn';
import Register from './components/registration/Register';
import Particles from 'react-particles-js';

function App() {
  // states
  const [input, setInput] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [box, setBox] = useState({});
  const [route, setRoute] = useState('signin');
  const [isSignedin, setIsSignedin] = useState(false);
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  })
  // useEffect(async()=>{
  //   await axios.get('http://localhost:3000/')
  //   .then(res => console.log(res.data))
  // },[]);
  useEffect(() => {
    async function fetchData() {
      await axios.get('https://green-pumpkin.herokuapp.com/');
    }
    fetchData();
  }, [])

  const particleOptions = {
    particles: {
      number: {
        value: 80, density: {
          enable: true, value_area: 900
        }
      }
    }
  }
  const onRouteChange = (route) => {
    if (route === 'signout') {
      setIsSignedin(false)
    } else if (route === 'home') {
      setIsSignedin(true)
    }
    setRoute(route);
  }
  const loadUser = (data) => {
    setUser({
      ...user,
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    })
  }

  return (
    <div className="App">
      <Particles className='particles' params={particleOptions} />
      <SignOut isSignedin={isSignedin} onRouteChange={onRouteChange} />
      {route === 'home'
        ? <div>
          <Logo />
          <Rank name={user.name} entries={user.entries} />
          <ImageForm
            input={input}
            setInput={setInput}
            imageURL={imageURL}
            setImageURL={setImageURL}
            box={box}
            setBox={setBox}
            id={user.id}
            user={user}
            setUser={setUser} />
          <FaceRecognition imageURL={imageURL} setImageURL={setImageURL} box={box} />
        </div>
        : (route === 'signin'
          ? <SignIn onRouteChange={onRouteChange} loadUser={loadUser} />
          : <Register onRouteChange={onRouteChange} loadUser={loadUser} />
        )
      }
    </div>
  );
}

export default App;
