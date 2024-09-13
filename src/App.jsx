import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Select from './components/Select';
import Info from './components/Info';
import Battle from './components/Battle';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path={"/"} element={<Select/>}/>
          <Route path='/Info' element={<Info/>}/>
          <Route path='/Battle' element={<Battle/>}/>    
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;







