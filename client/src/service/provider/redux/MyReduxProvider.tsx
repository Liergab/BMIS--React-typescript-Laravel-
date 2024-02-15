import React, { ReactNode } from 'react';
import {Provider} from 'react-redux';
import {store} from '../../state/store.ts'
interface ReduxProviderProps {
    children: ReactNode;
  }

const ReduxProvider:React.FC<ReduxProviderProps> = ({children}) => {
  return (
   <Provider store={store}>
    {children}
   </Provider>
  )
}

export default ReduxProvider