import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import React, { ReactNode } from 'react';


interface ReactQueryProviderProps {
    children: ReactNode;
  }


const ReactQueryProvider:React.FC<ReactQueryProviderProps> = ({children}) => {
    const client = new QueryClient();
  return (
   
      <QueryClientProvider client={client}>
        {children}
    </QueryClientProvider>
    
  )
}

export default ReactQueryProvider