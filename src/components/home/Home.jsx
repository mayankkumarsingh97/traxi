import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState, useEffect } from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import axios from 'axios'
import tractor_img_one from "../../img/tractor_img_one.png"
import product1 from "../../img/product/product1.png"
import product2 from "../../img/product/product2.png"
import product3 from "../../img/product/product3.png"
import product4 from "../../img/product/product4.png"
import product5 from "../../img/product/product5.png"
import product6 from "../../img/product/product6.png"
import product7 from "../../img/product/product7.png"
import product8 from "../../img/product/product8.png"
import product9 from "../../img/product/product9.png"
import "./home.Module.css"

import Form from 'react-bootstrap/Form';

import Register from '../login_register/Register'
export default function Home() {

  const [openModel, setModel] = useState(true)
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton className='px-2 py-0'>
          <Modal.Title>Enquire Now</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Form>
          <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="name" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput2">
              <Form.Control type="email" placeholder="email" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput3">
              <Form.Control type="phone" placeholder="phone number" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput4">
              <Form.Control type="text" placeholder="JHON DHERE 5310" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput5">
              <Form.Control type="text" placeholder="state" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput6">
              <Form.Control type="text" placeholder="Distict" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput7">
              <Form.Control type="text" placeholder="Tehsil" />
            </Form.Group>
            <Form.Group className="" controlId="exampleForm.ControlTextarea8">

              <Form.Control as="textarea" rows={2} placeholder='Enter message' />
            </Form.Group>
            <button type='submit' className='w-100 bg-success my-1'> send</button>
          </Form>
        </Modal.Body>


        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
      <Container>
        <Row className="">
          <Col md={12}>
            <h3 className='text-center our_popular_machine mt-md-0 mt-4'>Our Popular Machinery.</h3>
          </Col>
          <Col md={3} xs={6}>
            <div className="main_container">
              <div className="search_img">
                <img src={product9} alt="alt for img one" />
              </div>
              <div className="name">
                <div>john deere 5310</div>
              </div>


              <div className="offer_btn mt-2">
                <button className='enquireButton' onClick={handleShow}>Enquire Now</button>


              </div>

            </div>

          </Col>


          {/* Duplicates starts from here.. */}
          <Col md={3} xs={6}>
            <div className="main_container">
              <div className="search_img">
                <img src={product2} alt="alt for img one" />
              </div>
              <div className="name">
                <div>john deere 5310</div>
              </div>


              <div className="offer_btn mt-2">
                <button onClick={handleShow}>Enquire Now</button>
              </div>

            </div>
          </Col>

          <Col md={3} xs={6}>
            <div className="main_container">
              <div className="search_img">
                <img src={product3} alt="alt for img one" />
              </div>
              <div className="name">
                <div>john deere 5310</div>
              </div>


              <div className="offer_btn mt-2">
                <button onClick={handleShow}>Enquire Now</button>
              </div>

            </div>
          </Col>


          <Col md={3} xs={6}>
            <div className="main_container">
              <div className="search_img">
                <img src={product4} alt="alt for img one" />
              </div>
              <div className="name">
                <div>john deere 5310</div>
              </div>


              <div className="offer_btn mt-2">
                <button onClick={handleShow}>Enquire Now</button>
              </div>

            </div>
          </Col>

          <Col md={3} xs={6}>
            <div className="main_container">
              <div className="search_img">
                <img src={product5} alt="alt for img one" />
              </div>
              <div className="name">
                <div>john deere 5310</div>
              </div>


              <div className="offer_btn mt-2">
                <button onClick={handleShow}>Enquire Now</button>
              </div>

            </div>
          </Col>


          <Col md={3} xs={6}>
            <div className="main_container">
              <div className="search_img">
                <img src={product6} alt="alt for img one" />
              </div>
              <div className="name">
                <div>john deere 5310</div>
              </div>


              <div className="offer_btn mt-2">
                <button onClick={handleShow}>Enquire Now</button>
              </div>

            </div>
          </Col>

          <Col md={3} xs={6}>
            <div className="main_container">
              <div className="search_img">
                <img src={product6} alt="alt for img one" />
              </div>
              <div className="name">
                <div>john deere 5310</div>
              </div>


              <div className="offer_btn mt-2">
                <button onClick={handleShow}>Enquire Now</button>
              </div>

            </div>
          </Col>

          <Col md={3} xs={6}>
            <div className="main_container">
              <div className="search_img">
                <img src={product7} alt="alt for img one" />
              </div>
              <div className="name">
                <div>john deere 5310</div>
              </div>


              <div className="offer_btn mt-2">
                <button onClick={handleShow}>Enquire Now</button>
              </div>

            </div>
          </Col>






        </Row>
      </Container>

    </>
  )
}
