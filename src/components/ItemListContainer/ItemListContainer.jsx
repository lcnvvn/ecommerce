import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { productsFetch } from '../../helpers/productsFetch';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const ItemListContainer = ( ) => {

  const [ products, setProduct ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const { categoryId } = useParams()
  
  useEffect( () => {

    if (categoryId) {

      productsFetch()
      .then(data => setProduct(data.filter(product => product.category == categoryId)))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
      
      
    } else {

      productsFetch()
      .then(data => setProduct(data))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))

    }

  }, [categoryId])


  return (
    <section style={{padding:"2em"}}>
      { loading ? <p>cargando <AiOutlineLoading3Quarters /></p> :

        products.map ( product => 
        
          <div key={product.id} >

            <Card style={{ width: '18rem', margin: "1em"}}>
                <Card.Img variant="top" src={product.photo+'.jpg'} />
                <Card.Body>
                  <Card.Title>
                    {`${product.name}`}
                  </Card.Title>
                  <Card.Text>
                  {`$${product.price}`}
                  </Card.Text>
                  <Card.Text>
                  <label>Categoría: {`${product.category}`}</label>
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Button variant='dark'>
                    <Link to={`/detail/${product.id}`}>Ver detalle</Link>
                  </Button> 
                </Card.Body>
            </Card>

          </div>
          
          )
      }
           
    </section>
  )
}

export default ItemListContainer
