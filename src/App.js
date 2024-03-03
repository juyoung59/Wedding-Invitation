import React from 'react';
import Top from './components/top/Top'
import Invite from './components/invitation/Invite';
import Contact from './components/contact/Contact';
import Date from './components/date/Date';
import Gallery from './components/gallery/Gallery';
import Location from './components/location/Location';

function App() {
  return (
    <div className="App">
      <Top/>
      <Invite/>
      <Contact/>
      <Date />
      <Gallery />
      <Location />
    </div>
  );
}

export default App;


