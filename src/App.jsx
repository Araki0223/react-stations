// DO NOT DELETE

import './App.css'
import { useState } from 'react'  
// ↓遊ぶために書き換えた
// import React from 'react'
// import Counter from './components/Counter.jsx'
// import InputForm from './components/InputForm.jsx';
// ↑遊ぶために書き換えた

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/bulldog-boston/n02096585_6028.jpg');

  const updateDogImage = async ()=>{
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();

    // console.log(data);
    setDogUrl(data.message);
  }

  return (
    <>
      <header>
        <h1>Dogアプリ</h1>
      </header>
      <p>犬の画像を表示するサイトです</p>
      <img src={dogUrl} alt="image of dog" />
      <button onClick={updateDogImage}>更新</button>
    </>

    // // ↓実験
    // <div>
    //   <Counter />
    //   <InputForm />
    // </div>
  )
}

// export default App