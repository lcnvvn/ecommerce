import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { useParams } from "react-router"
import { productsFetch } from "../../helpers/productsFetch"


const ItemDetail = () => {
    const [ product, setProduct ] = useState({})
    const { productId } = useParams()
    
    useEffect(() => {

            productsFetch()
            .then(data => setProduct(data.find(product => product.id == productId)))
            .catch((error => console.log(error)))

    })


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.photo+'.jpg'} />
      <Card.Title>
        {`${product.name}`}
      </Card.Title>
      <Card.Body>
      <Card.Text>
        <label>Categoría: {`${product.category}`}</label>
      </Card.Text>
      <Card.Text>
        Precio: {`$${product.price}`}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ItemDetail