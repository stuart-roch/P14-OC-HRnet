import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import CreateEmployee from './Pages/CreateEmployee';
import ListEmployee from './Pages/ListEmployee';
import Header from './Components/Header';
import { Provider } from 'react-redux';
import { store } from '../src/utils/store.js'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Error404 from './Pages/Error404';

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<CreateEmployee />}/>
            <Route path='/employees' element={<ListEmployee />}/>
            <Route path='*' element={<Error404 />}/>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

