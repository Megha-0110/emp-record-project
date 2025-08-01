import React from 'react';
import ReactDOM from 'react-dom/client';
import { FindAll }  from './components/FindAll';
import { Delete } from './components/Delete';
import { Update } from './components/Update';
import { Find } from './components/Find';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
   <App/>
   </BrowserRouter>
  
);
