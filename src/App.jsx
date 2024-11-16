// DO NOT DELETE

import './App.css'
// ↓書き換えた
// import React from 'react'
import Counter from './components/Counter.jsx'
import InputForm from './components/InputForm.jsx';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    // <>
    //   <header>Dogアプリ</header>
    //   <p>犬の画像を表示するサイトです</p>
    //   <img src="https://images.dog.ceo/breeds/bulldog-boston/n02096585_6028.jpg" alt="Dog" />
    // </>

    // ↓実験
    <div>
      <Counter />
      <InputForm />
    </div>
  )
}

// export default App