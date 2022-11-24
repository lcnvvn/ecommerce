import './ItemListContainer.css'

const ItemListContainer = ( { greeting } ) => {

  return (
    <section className="itemList">
        <p>ItemListContainer</p>
        <p>{ greeting }</p>
    </section>
  )
}

export default ItemListContainer