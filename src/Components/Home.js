import React, { Fragment, useState } from 'react'
import MetaData from './Layout/Metadata'
import axios from 'axios'
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
    return (
        <Fragment>
            <MetaData title={'Buy Best Products Online'} />
            <div className="container container-fluid">

                <h1 id="products_heading">Latest Products</h1>
                <section id="products" className="container mt-5">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                            <div className="card p-3 rounded">
                                <img
                                    className="card-img-top mx-auto"
                                    src="https://m.media-amazon.com/images/I/617NtexaW2L._AC_UY218_.jpg"
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">
                                        <a href="">128GB Solid Storage Memory card - SanDisk Ultra</a>
                                    </h5>
                                    <div className="ratings mt-auto">
                                        <div className="rating-outer">
                                            <div className="rating-inner"></div>
                                        </div>
                                        <span id="no_of_reviews">(5 Reviews)</span>
                                    </div>
                                    <p className="card-text">$45.67</p>
                                    <a href="#" id="view_btn" className="btn btn-block">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>
    )
}

export default Home