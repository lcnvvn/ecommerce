import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetail from "./components/ItemDetail/ItemDetail"


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      
      <Routes>
          <Route path='/' element={ <ItemListContainer /> } />
          <Route path='/category/:categoryId' element={ <ItemListContainer /> } />
          <Route path='/detail/:productId' element={ <ItemDetail /> } />

          <Route path='*' element={<Navigate to='/' />} />
      </Routes>
       
    </BrowserRouter>
  )
}

export default App
