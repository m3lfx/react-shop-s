import React, { Fragment, useState, useEffect } from 'react'
import MetaData from './Layout/Metadata'
import axios from 'axios'
import Product from './Product/Product'
const Home = () => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [error, setError] = useState()
    const [productsCount, setProductsCount] = useState(0)

    const getProducts = async () => {
        let link = `http://localhost:4001/api/v1/products`
        console.log(link)
        let res = await axios.get(link)
        console.log(res)
        setProducts(res.data.products)
        // setResPerPage(res.data.resPerPage)
        setProductsCount(res.data.productsCount)
        setLoading(false)
    }
    useEffect(() => {
        getProducts()
    }, []);
    return (
        <Fragment>
            <MetaData title={'Buy Best Products Online'} />
            <div className="container container-fluid">

                <h1 id="products_heading">Latest Products</h1>
                <section id="products" className="container mt-5">
                    <div className="row">
                        {products && products.map(product => (
                            <div keys={product._id} className="col-sm-12 col-md-6 col-lg-3 my-3">
                                <Product key={product._id } product={product} />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </Fragment>
    )
}

export default Home