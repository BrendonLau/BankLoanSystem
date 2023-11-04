import React from 'react';
import HomePage from '../src/pages/HomePage'
import './App.css';
import VerticalTabs from './components/VerticalTabs';
import { UserContextProvider } from './context/UserContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
          <VerticalTabs/>
          <HomePage/>
      </UserContextProvider>
    </div>
  );
}

export default App;
