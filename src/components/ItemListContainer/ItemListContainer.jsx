import { useState, useEffect } from "react"
import { getProducts, getProductByIdCategory} from "../../asynMock"
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState ([])

    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductByIdCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.erro(error)
            })
    },[categoryId])


    return(
            <div>
                <h2>{greeting}</h2>
                <ItemList products={products}/>
            </div>
    )
}

export default ItemListContainer