import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState, useEffect } from 'react'

import axios from 'axios'
import tractor_img_one from "../../img/tractor_img_one.png"

import "./home.Module.css"
export default function Home() {


  const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {






   
    
    // console.log(products, 'ooooooooooooooooooooooooooooooooo')


    // setIsLoading(true)
    // fetch(`https://sfaapi.traxi.in/api/showroom/api/v1/product_list&apiKey=${api_key}`)
    //     .then(response => response.json())
    //     .then((json) => {
    //         setProducts(json)
    // setIsLoading(false)
    // })
    // console.log(products)
  }, []);
  return (
    <>
      <Container>
        <Row className="mt-md-2 py-md-3">
          <Col md={12}>
            <h3 className='text-center'>Our Popular Machinery.</h3>
          </Col>
          <Col md={3} xs={6}>
            <div className="main_container">
              <div className="search_img">
                <img src={tractor_img_one} alt="alt for img one" />
              </div>
              <div className="name">
                <div>john deere 5310</div>
                </div>
                <div className="desc mt-1">
                The John Deere model 4440 was the most popular tractor of the 
                Iron Horses series. At the end of the first production year.
                </div>
              
              <div className="offer_btn mt-2">
                <button>check for offers</button>
              </div>

            </div>
          </Col>

          {/* Duplicates starts from here.. */}
          <Col md={3} xs={6}>
            <div className="main_container">
              <div className="search_img">
                <img src={tractor_img_one} alt="alt for img one" />
              </div>
              <div className="name">
                <div>john deere 5310</div>
                </div>
                <div className="desc mt-1">
                The John Deere model 4440 was the most popular tractor of the 
                Iron Horses series. At the end of the first production year.
                </div>
              
              <div className="offer_btn mt-2">
                <button>check for offers</button>
              </div>

            </div>
          </Col>

          <Col md={3} xs={6}>
            <div className="main_container">
              <div className="search_img">
                <img src={tractor_img_one} alt="alt for img one" />
              </div>
              <div className="name">
                <div>john deere 5310</div>
                </div>
                <div className="desc mt-1">
                The John Deere model 4440 was the most popular tractor of the 
                Iron Horses series. At the end of the first production year.
                </div>
              
              <div className="offer_btn mt-2">
                <button>check for offers</button>
              </div>

            </div>
          </Col>


          <Col md={3} xs={6}>
            <div className="main_container">
              <div className="search_img">
                <img src={tractor_img_one} alt="alt for img one" />
              </div>
              <div className="name">
                <div>john deere 5310</div>
                </div>
                <div className="desc mt-1">
                The John Deere model 4440 was the most popular tractor of the 
                Iron Horses series. At the end of the first production year.
                </div>
              
              <div className="offer_btn mt-2">
                <button>check for offers</button>
              </div>

            </div>
          </Col>

          <Col md={3} xs={6}>
            <div className="main_container">
              <div className="search_img">
                <img src={tractor_img_one} alt="alt for img one" />
              </div>
              <div className="name">
                <div>john deere 5310</div>
                </div>
                <div className="desc mt-1">
                The John Deere model 4440 was the most popular tractor of the 
                Iron Horses series. At the end of the first production year.
                </div>
              
              <div className="offer_btn mt-2">
                <button>check for offers</button>
              </div>

            </div>
          </Col>


          <Col md={3} xs={6}>
            <div className="main_container">
              <div className="search_img">
                <img src={tractor_img_one} alt="alt for img one" />
              </div>
              <div className="name">
                <div>john deere 5310</div>
                </div>
                <div className="desc mt-1">
                The John Deere model 4440 was the most popular tractor of the 
                Iron Horses series. At the end of the first production year.
                </div>
              
              <div className="offer_btn mt-2">
                <button>check for offers</button>
              </div>

            </div>
          </Col>

          <Col md={3} xs={6}>
            <div className="main_container">
              <div className="search_img">
                <img src={tractor_img_one} alt="alt for img one" />
              </div>
              <div className="name">
                <div>john deere 5310</div>
                </div>
                <div className="desc mt-1">
                The John Deere model 4440 was the most popular tractor of the 
                Iron Horses series. At the end of the first production year.
                </div>
              
              <div className="offer_btn mt-2">
                <button>check for offers</button>
              </div>

            </div>
          </Col>

          <Col md={3} xs={6}>
            <div className="main_container">
              <div className="search_img">
                <img src={tractor_img_one} alt="alt for img one" />
              </div>
              <div className="name">
                <div>john deere 5310</div>
                </div>
                <div className="desc mt-1">
                The John Deere model 4440 was the most popular tractor of the 
                Iron Horses series. At the end of the first production year.
                </div>
              
              <div className="offer_btn mt-2">
                <button>check for offers</button>
              </div>

            </div>
          </Col>






        </Row>
      </Container>

    </>
  )
}
