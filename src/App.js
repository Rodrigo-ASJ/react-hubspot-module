import React from 'react';
import { Routes, Route } from "react-router-dom"
import './App.scss';



import Chat from './pages/chat/Chat';
import Home from './pages/home/Home';


function App({ moduleData }) {
  // eslint-disable-next-line no-console
  console.log(
    'all of your data typically accessed via the "module" keyword in HubL is available as JSON here!',
    moduleData,
  );
  return (      
      <Routes>
        <Route path="chat" element={ <Home  moduleData={moduleData} /> } />
        <Route path="chat-on" element={ <Chat/> } />
      </Routes>
  );
}

export default App;
