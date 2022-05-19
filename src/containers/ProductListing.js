import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent'
// import axios from 'axios'
import { fetchProductsAction } from '../redux/actions/productActions'
import { useSelector } from 'react-redux'
import classes from './ProductListing.module.css'
// import loadingImage from '../images/loading.gif'

function ProductListing(props) {
    const [itemDisplay,setItemDisplay] = useState(8)
    const dispatch = useDispatch()
    const products = useSelector(state => state.allProducts.products)
    const { isLoading } = useSelector(state => state.loading)
    
    const filteredProducts = products.filter(item=>item.title.toLowerCase().includes(props.searchTerm.toLowerCase()))

    const handleItemDisplay = () =>{
        if(itemDisplay<products.length){
            setItemDisplay((prevValue)=>prevValue + 8)
        }
        
    }
    const loading = <div className={classes.loading}>
                    <p>Loading....</p>
                </div>
    useEffect(() => {
        dispatch(fetchProductsAction())
    }, [])
    return (
        <div className={classes.product_container}>
            {isLoading && loading}
            <div className={classes.product_list_container}>
                {!isLoading && filteredProducts.slice(0, itemDisplay).map(item => <ProductComponent item={item} key={item.id} />)}
            </div>
            <div className={classes.load_more}>
               { !isLoading && <button onClick={handleItemDisplay}>Load More</button>}
            </div>
        </div>

    )
}

export default ProductListing