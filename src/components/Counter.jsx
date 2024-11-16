import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0); // 初期値0

    const increment = () => {
        setCount(count + 1);
        console.log(`現在のカウント: ${count + 1}`); // 更新後の値をログ出力    
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>カウント: {count}</h1>
            <button
                onClick={increment}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                }}
            >
                カウントを増やす
            </button>
        </div>
    );
}

export default Counter;
