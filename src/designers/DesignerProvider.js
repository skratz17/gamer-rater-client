import React, { createContext, useState } from 'react';

import { request } from '../utils/request';

export const DesignerContext = createContext();

export const DesignerProvider = props => {
  const [ designers, setDesigners ] = useState([]);

  const getDesigners = async () => {
    const response = await request('http://localhost:8000/designers');
    const designers = await response.json();

    setDesigners(designers);
  };

  return (
    <DesignerContext.Provider value={{ designers, getDesigners }}>
      {props.children}
    </DesignerContext.Provider>
  );
};