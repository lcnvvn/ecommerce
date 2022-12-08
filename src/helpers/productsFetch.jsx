

let products = [
    {id: '1', name: 'Taza 1', category: 'tazas', stock: '50', price:'600', photo: './img/taza1'}, 
    {id: '2', name: 'Taza 2', category: 'tazas', stock: '50', price:'500', photo: './img/taza2'},
    {id: '3', name: 'Taza 3', category: 'tazas', stock: '50', price:'600', photo: './img/taza3'},
    {id: '4', name: 'Vaso 1', category: 'vasos', stock: '50', price:'700', photo: './img/vaso1'},
    {id: '5', name: 'Vaso 2', category: 'vasos', stock: '50', price:'650', photo: './img/vaso2'},
    {id: '6', name: 'Vaso 3', category: 'vasos', stock: '50', price:'600', photo: './img/vaso3'} 
]

export const productsFetch = (id) => {
    return new Promise( (resolve, reject) => {
        const condition = true
        if (condition) {
            setTimeout( () => {
                resolve(products)
            }, 1000 )
        } else { (
            reject
            )
        }
    }

    )
}