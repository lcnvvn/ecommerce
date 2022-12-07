import { IconContext } from 'react-icons/lib'
import { TfiShoppingCart } from 'react-icons/tfi'

const CartWidget = () => {
    return (
      <div>
          <IconContext.Provider value={{ size: "2em", color: "white" }}>
            <TfiShoppingCart />
          </IconContext.Provider>  
          <label style={{paddingLeft: "15px"}}>5 items</label>      
      </div>
    )
  }
  
  export default CartWidget