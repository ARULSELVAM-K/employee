import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddEmployeeComponent from './Component/AddEmployeeComponent'
import ListEmployeeComponent from './Component/ListEmployeeComponent'
import HeaderComponent from './Component/HeaderComponent';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path='/' element={<ListEmployeeComponent />} />
        <Route path='/add-employee' element={<AddEmployeeComponent />} />
        <Route path='/update-employee/:id' element={<AddEmployeeComponent/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App