import React from 'react';
import Top from './components/top/Top'
import Invite from './components/invitation/Invite';
import Contact from './components/contact/Contact';
import Date from './components/date/Date';
import Gallery from './components/gallery/Gallery';
import Location from './components/location/Location';
import Celebrate from './components/celebrate/Celebrate';
import Wreath from './components/wreath/Wreath';
import Message from './components/message/Message';
import Share from './components/sharelink/Share';
import Bottom from './components/bottom/Bottom';

function App() {
  return (
    <div className="App">
      <Top/>
      <Invite/>
      <Contact/>
      <Date />
      <Gallery />
      <Location />
      <Celebrate />
      <Wreath />
      <Message />
      <Share />
      <Bottom />
    </div>
  );
}

export default App;


