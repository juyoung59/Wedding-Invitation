import React from 'react';
import { Route } from 'react-router-dom';
import Top from './components/top/Top'
import Invite from './components/invitation/Invite';

function App() {
  return (
    <div className="App">
      <Top/>
      <Invite/>
    </div>
  );
}

export default App;
