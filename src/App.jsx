// DO NOT DELETE

import './App.css'
import React from 'react'
import { useState } from 'react'
// ↓遊ぶために書き換えた
// import React from 'react'
// import Counter from './components/Counter.jsx'
// import InputForm from './components/InputForm.jsx';
// ↑遊ぶために書き換えた
import Header from './Header.jsx'
import Description from './Description'
import {DogListContainer} from './DogListContainer'

console.log(DogListContainer); 
// console.log("DogListContainer:", DogListContainer);

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/bulldog-boston/n02096585_6028.jpg',
  )

  const updateDogImage = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await response.json()

    // console.log(data);
    setDogUrl(data.message)
  }

  return (
    <div>
      <Header />
      <Description dogUrl={dogUrl} updateDogImage={updateDogImage} />
      <DogListContainer />
    </div>
  )
}

// export default App
