

function productList() {
    useEffect(() => {   
        console.log(products, 'ooooooooooooooooooooooooooooooooo')
        setIsLoading(true)
        fetch(`https://sfaapi.traxi.in/api/showroom/api/v1/product_list&apiKey=${api_key}`)
            .then(response => response.json())
            .then((json) => {
                setProducts(json)
        setIsLoading(false)
        })
        console.log(products)
      }, []);

  return (
    <>
       <h2>Hello</h2>
    </>
  )
}

export default productList