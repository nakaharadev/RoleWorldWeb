import './App.css';
import Auth from './components/Auth';
import Application from './components/Application';
import VideoBackground from './components/VideoBackground';

import { useState } from 'react';
import { language, setLanguage } from './util/Language';
import * as userData from './util/UserData';

export default function App() {
  let [ authData, setAuthData ] = useState(userData.data.authData);

  function login(data) {
    setAuthData(data);
    userData.set("authData", data);
    userData.writeInStorage();
  }

  return (
    <div style={{
      "width": "100%",
      "height": "100vh",
      "margin": "0 auto",
      "maxWidth": "1200px"
    }}>
      <VideoBackground/>
      {
        authData == undefined ? <Auth onAuthCallback={login}/> : <Application/>
      }
    </div>
  );
}