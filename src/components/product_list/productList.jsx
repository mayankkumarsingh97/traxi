import React from 'react'
import {useState,useEffect} from "react"
import axios from "axios"
function ProductList() {

  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false)
  useEffect(() => {
    let webApiUrl = 'https://sfaapi.traxi.in/showroom/api/v1/product_list';
    let tokenStr = 'GaZ5XdjC.5iLmnWyaxeHQgtSGR31V6LLWrUR5DM83';
    axios.get(webApiUrl, { headers: {"X-Api-key" : `${tokenStr}`}}).then((res)=>{
      setProducts(res.data.data)
    }).catch((e)=>{
     console.log(e)
    })
     console.log(products,"hlllllllllllllllllllllllllllllllll")
  }, []);
  return (
   <>
   
    {
      products.map((item,key)=>{
        return <>
        <p>{item.product_name}</p>
        <p>{item.product_number}</p>
        <h6>{item.description}</h6>
        <img src={item.image_url} width="200px" alt="iuuuuuuuuuuuuuuuuuuuuuuu" />
        <p key={key}>{item.brand.brand_name}</p>
        <p> Created at {item.created_at} </p>
        <hr />
        </>  
         
      })
    }
   
   </>
  )
}

export default ProductList

















// function productList() {

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     let webApiUrl = 'https://sfaapi.traxi.in/showroom/api/v1/product_list';
//     let tokenStr = 'GaZ5XdjC.5iLmnWyaxeHQgtSGR31V6LLWrUR5DM83';
//     axios.get(webApiUrl, { headers: { "X-Api-Key": `${tokenStr}`}}).then((res)=>{
//      setProducts(res.data)
//     });

//   }, []);

//   return (
//     <>
//       <h2>Hellokkkkkkkkkkkkkkkkkkkkkk</h2>
//     </>
//   )
// }

// export default productList