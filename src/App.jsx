import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css'
import CartWidget from "./components/CartWidget/CartWidget"

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={ '¡Saludos!' }/>
    </div>
  )
}

export default App
