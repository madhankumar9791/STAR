import logo from './logo.svg';
import './App.css';

import {Routes, Route, BrowserRouter} from 'react-router-dom';

import Shop from './Shop';

export default function App() {
  
  return (
  <BrowserRouter>

  <Routes>

    <Route element={<Shop />} path='/' />

  </Routes>
  
  
</BrowserRouter>

  )
 

}