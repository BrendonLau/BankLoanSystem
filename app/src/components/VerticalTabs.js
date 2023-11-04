import React, { useContext, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { APPLICANT_VIEW, BANK_VIEW } from '../constant';
import { UserContext } from '../context/UserContext';

export default function VerticalTabs() {
  const { currentView, setCurrentView } = useContext(UserContext);

  useEffect(() => {
    if (currentView == undefined)
      setCurrentView(APPLICANT_VIEW)
  }, [setCurrentView])

  const handleChange = (event, newValue) => {
    setCurrentView(newValue);
  };

  return (
      <Box sx={{
        width: '15%', 
        backgroundColor: '#F5F5F5', 
        float: 'left',
        height: '100vh',
        top: '0',
        bottom: '0',
        textAlign: 'center' }}>
        <h3>User View</h3>
        <Tabs value={currentView} onChange={handleChange} orientation='vertical'>
          <Tab label="Applicant"  value={APPLICANT_VIEW} />
          <Tab label="Bank" value={BANK_VIEW} />
        </Tabs> 
    </Box>
  );
}