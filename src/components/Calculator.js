import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString()); // ⚠️ Note: eval is for demo use only
      } catch {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  return (
    <div style={styles.container}>
      <div style={styles.display}>
        <div>{input || '0'}</div>
        <div style={styles.result}>{result}</div>
      </div>
      <div style={styles.buttons}>
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            style={styles.button}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: 300,
    margin: '50px auto',
    padding: 20,
    border: '2px solid #ccc',
    borderRadius: 10,
    textAlign: 'center',
    fontFamily: 'Arial',
    backgroundColor: '#f9f9f9',
  },
  display: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#eaeaea',
    borderRadius: 5,
    textAlign: 'right',
    fontSize: 18,
    minHeight: 40,
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 10,
  },
  button: {
    padding: '15px 0',
    fontSize: 18,
    cursor: 'pointer',
    borderRadius: 5,
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    transition: 'background 0.2s',
  },
};

export default Calculator;
