import React from 'react';
import Top from './components/top/Top'
import Invite from './components/invitation/Invite';
import Contact from './components/contact/Contact';
import Date from './components/date/Date';

function App() {
  return (
    <div className="App">
      <Top/>
      <Invite/>
      <Contact/>
      <Date />
    </div>
  );
}

export default App;
