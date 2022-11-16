import React from 'react';
import { Provider } from 'react-redux';
import './index.css';
import { createRoot } from 'react-dom/client';
import store from './redux/configureStore';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
