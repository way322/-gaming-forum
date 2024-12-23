//main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from './store'; 
import Rout from './routs.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Rout/> 
    </Provider>
  </StrictMode>
);