import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ToastContainerComponent from './components/ToastContainerComponent.jsx'
import { store,persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
      <App />
      <ToastContainerComponent/>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
