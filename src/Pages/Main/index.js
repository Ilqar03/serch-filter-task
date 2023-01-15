import React, { useEffect, useState } from 'react'
import "./index.scss"
function Main() {


    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://northwind.vercel.app/api/products")
            .then((response) => response.json())
            .then((data) => setProducts(data))
    }, []);
    const [query, setQuery] = useState("");
  
    return (
        <div className='main'>
            <div className='serch'>
                <input type="text" className='serch' placeholder=' Serch...' onChange={element => setQuery(element.target.value)} />
            </div>
            {products.filter(products => products.name.toLowerCase().includes(query.toLowerCase())).map((element) => {
                return (
                    <>
                        <div className='container'>
                            <div className='name_id'>
                                <p>{element.id}</p>
                                <h2>{element.name}</h2>
                            </div>
                            <div className='stock'>
                                <p>Stock: {element.unitsInStock}</p>
                            </div>
                            <div className='price'>
                                <h3>Price: {element.unitPrice}$</h3>
                            </div>
                            <div className='status'>Order: {element.unitsOnOrder}</div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Main