import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SingleProductPage from './SingleProductPage'
import axios from 'axios'

const SharedProductPage = () => {
    const {agentId,productId} = useParams()
    const [item,setItem] = useState()

    useEffect(() => {
        axios.get(`/products/${productId}`)
          .then(response => {
            const fetchedProduct = response.data;
            console.log(fetchedProduct);
          setItem(fetchedProduct)
          })
          .catch(error => {
            console.error("Error fetching product data:", error);
          });
      }, []);
  return (
    <>
    <SingleProductPage item={item}/>
    </>
  )
}

export default SharedProductPage
