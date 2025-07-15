import React, { FC, ReactNode } from 'react'
import Header from './components/Header';

type providerProps = {
  children: ReactNode;
};

const Provider: FC<providerProps> = ({children}) => {
  return (
    <div>
      <Header/>
      <div>
        {children}
      </div>
      
    </div>
  )
}

export default Provider
