import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import axios from 'axios'
import Spinner from '../molicules/spinner/Spinner';
import "./home.Module.css"
import Form from 'react-bootstrap/Form';
import Register from '../login_register/Register'

import img_one from "../../img/product/product4.png"

export default function Home() {

  const [openModel, setModel] = useState(true)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let webApiUrl = `${process.env.REACT_APP_HOST}/showroom/api/v1/product_list`;
    let tokenStr = `${process.env.REACT_APP_API_KEY}`;
    axios.get(webApiUrl, { headers: { "X-Api-key": `${tokenStr}` } }).then((res) => {
      setProducts(res.data.data)
    }).catch((e) => {
      console.log(e)
    })
    console.log(products, "hlllllllllllllllllllllllllllllllll")
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
            <h3 className='our_popular_machine mt-md-4 mt-3'>Our Popular Machinery <ArrowDownwardIcon className="d-none d-md-inline" /></h3>
          </Col>
          {/* {
            products.map((item, key) => {
              return <>
                <Col md={3} xs={6} key={key}>
                  <div className="main_container">
                    <div className="search_img shadow">
                      <img src={item.image_url} alt="alt for img one" />
                    </div>
                    <div className="name">
                      <div>{item.product_name}</div>
                    </div>
                    <div className="offer_btn mt-2">
                      <button className='enquireButton' onClick={handleShow}>Enquire Now</button>
                    </div>
                  </div>
                </Col>
              </>
            })
          } */}




          {/* static data showcase purpose */}



          <Col md={3} xs={6}>
            <div className="main_container">
              <div className="search_img shadow">
                <img src={img_one} alt="alt for img one" />
              </div>
              <div className="name">
                <div>Jhon dheer 8899</div>
              </div>
              <div className="offer_btn mt-2">
                <button className='enquireButton' onClick={handleShow}>Enquire Now</button>
              </div>
            </div>
          </Col>


          <Col md={3} xs={6}>
            <div className="main_container">
              <div className="search_img shadow">
                <img src={img_one} alt="alt for img one" />
              </div>
              <div className="name">
                <div>Jhon dheer 8899</div>
              </div>
              <div className="offer_btn mt-2">
                <button className='enquireButton' onClick={handleShow}>Enquire Now</button>
              </div>
            </div>
          </Col>




          <Col md={3} xs={6}>
            <div className="main_container">
              <div className="search_img shadow">
                <img src={img_one} alt="alt for img one" />
              </div>
              <div className="name">
                <div>Jhon dheer 8899</div>
              </div>
              <div className="offer_btn mt-2">
                <button className='enquireButton' onClick={handleShow}>Enquire Now</button>
              </div>
            </div>
          </Col>

          <Col md={3} xs={6}>
            <div className="main_container">
              <div className="search_img shadow">
                <img src={img_one} alt="alt for img one" />
              </div>
              <div className="name">
                <div>Jhon dheer 8899</div>
              </div>
              <div className="offer_btn mt-2">
                <button className='enquireButton' onClick={handleShow}>Enquire Now</button>
              </div>
            </div>
          </Col>


          <Col md={3} xs={6}>
            <div className="main_container">
              <div className="search_img shadow">
                <img src={img_one} alt="alt for img one" />
              </div>
              <div className="name">
                <div>Jhon dheer 8899</div>
              </div>
              <div className="offer_btn mt-2">
                <button className='enquireButton' onClick={handleShow}>Enquire Now</button>
              </div>
            </div>
          </Col>


          <Col md={3} xs={6}>
            <div className="main_container">
              <div className="search_img shadow">
                <img src={img_one} alt="alt for img one" />
              </div>
              <div className="name">
                <div>Jhon dheer 8899</div>
              </div>
              <div className="offer_btn mt-2">
                <button className='enquireButton' onClick={handleShow}>Enquire Now</button>
              </div>
            </div>
          </Col>






        </Row>
      </Container>
    </>
  )
}
