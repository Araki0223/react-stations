import React, { useState, useEffect } from "react";

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((res) => res.json())
      .then((data) => {
        const dogList = Object.keys(data.message);
        setBreeds(dogList);
      });
  }, []);

  return (
    <div>
      <h2>犬種一覧</h2>
      <ul>
          {breeds.map((breed, index) => (
            <li key={index}>{breed}</li>
          ))};
      </ul>
    </div>
  );
};

console.log("DogListContainer Component Loaded"); // ここでコンポーネントが読み込まれているか確認

// export default DogListContainer;