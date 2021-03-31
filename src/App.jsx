import React from 'react';
import InputClass from './componets/Input/InputClass';
import A from './componets/Calculations/A';

class App extends React.Component {
  render() {
    return (
      <div className="calcContainer">
      <InputClass />
      <A />
      </div>
    );
  }
}

export default App;