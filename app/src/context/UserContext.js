import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';


const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [currentView, setCurrentView] = useState();
    return (
        <UserContext.Provider value={{ currentView, setCurrentView }}>
        {children}
        </UserContext.Provider>
    );
};

UserContextProvider.propTypes = {
    children: PropTypes.node
};

export { UserContext, UserContextProvider };