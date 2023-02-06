import React from 'react';
import CodeText from './CodeText';
import './App.css';

const CodeExample = `function getArrayMetadata(arr) {
  return {
    length: getArrayLength(arr),
    firstObject: arr[0],
  };
}
module.exports = {
  getArrayMetadata,
};`;

function App() {
  return (
    <div className="center">
      <CodeText>{CodeExample}</CodeText>
    </div>
  );
}

export default App;
