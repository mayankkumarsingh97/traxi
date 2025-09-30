import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';

import AgricultureIcon from '@mui/icons-material/Agriculture';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import MoveUpIcon from '@mui/icons-material/MoveUp';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


import tractor_img from "../../img/app-download.jpg"
import caro_one from "../../img/banner-0.jpg"
import caro_two from "../../img/banner-0.png"
import caro_three from "../../img/banner-1.jpg"

import mobile_view_img from "../../img/mobile_view_img.png"

import Carousel from 'react-bootstrap/Carousel';

import "./hero.Module.css"
export default function Hero() {
  return (
    <>

      <Container className='d-md-none d-block'>

        <Row className='my-1'>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 bg-green rounded"
                src={caro_one}

                alt="First slide"
              />
              <Carousel.Caption>
                {/* <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img

                className="d-block w-100 rounded"
                src={caro_one}
                alt="Second slide"
              />

              <Carousel.Caption>
                {/* <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded"

                src={caro_one}
                alt="Third slide"
              />

              <Carousel.Caption>
                {/* <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>










        <Row className="mt-2 p-1">
          <Col xs={6} className="px-1 my-1">
            <div className="">
              <div className="mobile_view_img" style={{ height: "150px", 'borderRadius': "10px", background: "#985DED" }}>
                <small className='mx-auto'>NEW</small>
                <div className="desc">with exciting offers. &nbsp;<span style={{fontSize:"8px"}}><ArrowRightAltIcon/></span></div>
                <a href=""><img src={mobile_view_img} width='80px' alt="" /></a>
              </div>
            </div>
          </Col>

          <Col xs={6} className="px-1 my-1">
            <div className="">

              <div className="mobile_view_img" style={{ height: "150px", 'borderRadius': "10px", background: "#F65D34" }}>
                <small className='text-center'>USED</small>
                <div className="desc">with exciting offers.&nbsp;<ArrowRightAltIcon/></div>
                <a href=""><img src={mobile_view_img} width='80px' alt="" /></a>
              </div>
            </div>
          </Col>

          <Col xs={6} className="px-1 my-1">
            <div className="">

              <div className="mobile_view_img" style={{ height: "150px", 'borderRadius': "10px", background: "#5CA7FA" }}>
                <small className='text-center'>SELL</small>
                <div className="desc">with exciting offers.&nbsp;<ArrowRightAltIcon/></div>
                <a href=""><img src={mobile_view_img} width='80px' alt="" /></a>
              </div>
            </div>
          </Col>

          <Col xs={6} className="px-1 my-1">

            <div className="">

              <div className="mobile_view_img" style={{ height: "150px", 'borderRadius': "10px", background: "#51DC99" }}>
                <small className='text-center'>COMPARE</small>
                <div className="desc">with exciting offers.&nbsp;<ArrowRightAltIcon/></div>
                <a href=""><img src={mobile_view_img} width='80px' alt="" /></a>
              </div>
            </div>
          </Col>






        </Row>
      </Container>







      <Container className='hero_banner mt-md-3  p-md-4 d-none d-md-block'>
        <Row>
          <Col md={12}>
            <Container>
              <Row className="align-items-center justify-content-around my-3">
                <Col md={4} className="align-items-center flex-column hero_form_card  py-2 px-2 bg-white">
                  <h2 className='find_your_trac_h2'>Find your Machinery</h2>
                  <div className='used_new_button my-2'>
                    <button className=''>New</button>
                    <button>Used</button>
                  </div>
                  <div className="search_by_name_radio">
                    <input type="radio" value="buzet" name="byname" />&nbsp;<span>By name</span>&nbsp;
                    <input type="radio" value="by_brand" name="byname" />&nbsp;<span>by brand</span>
                  </div>

                  <input type="text" className='search_by_Name' name="search_by_Name" placeholder='Search by Name' />
                  <input type="text" className='search_by_Name' name="search_by_type" placeholder='Search by Vehicle type' />
                  <button className='w-100 mt-2 search_find'>
                    Search
                  </button>
                </Col>
                {/* <Col md={4}>
                    <div className="banner_tractor_img">
                      <img src={tractor_img} alt="tractor img" />
                    </div>
                  </Col> */}
                <Col md={4} className="py-3">
                  {/* <div className="Home_inspection">
                      <li><AgricultureIcon/>&nbsp;<b>Home Inspection</b></li>
                      <li><ElectricBoltIcon/>&nbsp;<b>Instant Payment</b></li>
                      <li><MoveUpIcon/>&nbsp;<b>Free RC transfer</b></li>
                      <li><AgricultureIcon/>&nbsp;<b>Home Inspection</b></li>
                    </div> */}
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  )
}
