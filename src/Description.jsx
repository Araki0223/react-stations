import React from 'react'
import DogImage from './DogImage'

export const Description = ({ dogUrl, updateDogImage }) => {
  return (
    <div>
      <p className="description">犬の画像を表示するサイトです</p>
      <DogImage imageUrl={dogUrl} />
      <div className="container">
        <button className="button" onClick={updateDogImage}>
          更新
        </button>
      </div>
    </div>
  )
}

export default Description
