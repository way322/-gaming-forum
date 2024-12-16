//main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from './store'; 
import Rout from './routs.jsx'; // Change Roust to Rout

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Rout/> {/* Change Roust to Rout */}
    </Provider>
  </StrictMode>
);