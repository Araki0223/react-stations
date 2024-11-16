import React, { useState } from 'react';

function InputForm() {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
        console.log(`現在の入力値: ${event.target.value}`); // 入力値をログ出力
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <input
                type="text"
                value={text}
                onChange={handleChange}
                style={{
                    padding: '10px',
                    fontSize: '16px',
                    width: '300px',
                }}
                placeholder="テキストを入力してください"
            />
            <p>入力内容: {text}</p>
        </div>
    );
}

export default InputForm;
