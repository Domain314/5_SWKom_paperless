import React, { useEffect, useState, useContext } from 'react';
import UserConfigProvider from './settings/UserConfigProvider';

import RenderedApp from './RenderedApp';
// import Syncer from './utils/Syncer';

import ButtonLogInOut from './components/ButtonLogInOut.jsx';
import { checkUser, logout } from './utils/auth.js';

const Bedrock = () => {

  // const { createUser, getAll } = useContext(UserConfigContext);
  const [loggedIn, setLoggedIn] = useState(true);
  const [selectedApp, setSelectedApp] = useState('blogs');
  // const [photos, setPhotos] = useState([]);


  useEffect(() => {
    const url = window.location.href;
    console.log(url);

  }, [])

  const handleLogin = () => {
    checkUser(loginCallback)
  };

  const loginCallback = () => {
    setLoggedIn(true)
  }

  const handleLogout = () => {
    setLoggedIn(false);
    logout();
  }

  const renderApp = () => {
    switch (selectedApp) {
      // case 'blogs': return <Blogs />
      // case 'backup': return <Backup />
      default: return <>NO APP SELECTED</>
    }
  }

  const loginButton = () => {
    return loggedIn ?
      <ButtonLogInOut content={'Logout'} onClick={handleLogout} className={'bg-red-500 text-slate-50 hover:bg-red-600'} />
      :
      <ButtonLogInOut content={'Login'} onClick={handleLogin} className={'bg-green-500 text-slate-50 hover:bg-green-600'} />
  }

  return (
    <UserConfigProvider>
      <div className={''}>
        {/* <Syncer /> */}

        {loggedIn && <RenderedApp content={renderApp()} />}
      </div>
    </UserConfigProvider>
  );
};

export default Bedrock;
