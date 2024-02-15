import React    from 'react';
import ReactDOM from 'react-dom/client';
import App      from './App.tsx';
import './index.css'
import {BrowserRouter}      from 'react-router-dom';
import MyReactQueryProvider from './service/provider/react-query/MyReactQueryProvider.tsx';
import MyReduxProvider      from './service/provider/redux/MyReduxProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyReduxProvider>
      <MyReactQueryProvider>
        <BrowserRouter>
          <App />
      </BrowserRouter>
      </MyReactQueryProvider>
    </MyReduxProvider>
  </React.StrictMode>,
)
