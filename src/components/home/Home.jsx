import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import tractor_img_one from "../../img/tractor_img_one.png"

import "./home.Module.css"
export default function Home() {
  return (
    <>
      <Container>
        <Row className="mt-md-2 py-md-3">
          <Col md={12}>
            <h3 className='text-center'>The most searched  tractors.</h3>
          </Col>
          <Col md={3}>
            <div className="main_container">
              <div className="search_img">
                <img src={tractor_img_one} alt="alt for img" />
              </div>
              <div className="name">
                <div>Renault KWID</div>
                <div>Rs 10 lakh</div>
                </div>
                <div className="offer_btn">
                  <button>check for offers</button>
                </div>
             
            </div>
          </Col>

         {/* Duplicates starts from here.. */}
          <Col md={3}>
            <div className="main_container">
              <div className="search_img">
                <img src={tractor_img_one} alt="alt for img" />
              </div>
              <div className="name">
                <div>Renault KWID</div>
                <div>Rs 10 lakh</div>
                </div>
                <div className="offer_btn">
                  <button>check for offers</button>
                </div>
             
            </div>
          </Col>

          <Col md={3}>
            <div className="main_container">
              <div className="search_img">
                <img src={tractor_img_one} alt="alt for img" />
              </div>
              <div className="name">
                <div>Renault KWID</div>
                <div>Rs 10 lakh</div>
                </div>
                <div className="offer_btn">
                  <button>check for offers</button>
                </div>
             
            </div>
          </Col>


          <Col md={3}>
            <div className="main_container">
              <div className="search_img">
                <img src={tractor_img_one} alt="alt for img" />
              </div>
              <div className="name">
                <div>Renault KWID</div>
                <div>Rs 10 lakh</div>
                </div>
                <div className="offer_btn">
                  <button>check for offers</button>
                </div>
             
            </div>
          </Col>

          <Col md={3} sm={6}>
            <div className="main_container">
              <div className="search_img">
                <img src={tractor_img_one} alt="alt for img" />
              </div>
              <div className="name">
                <div>Renault KWID</div>
                <div>Rs 10 lakh</div>
                </div>
                <div className="offer_btn">
                  <button>check for offers</button>
                </div>
             
            </div>
          </Col>

          <Col md={3} sm={6}>
            <div className="main_container">
              <div className="search_img">
                <img src={tractor_img_one} alt="alt for img" />
              </div>
              <div className="name">
                <div>Renault KWID</div>
                <div>Rs 10 lakh</div>
                </div>
                <div className="offer_btn">
                  <button>check for offers</button>
                </div>
             
            </div>
          </Col>

          <Col md={3} sm={6}>
            <div className="main_container">
              <div className="search_img">
                <img src={tractor_img_one} alt="alt for img" />
              </div>
              <div className="name">
                <div>Renault KWID</div>
                <div>Rs 10 lakh</div>
                </div>
                <div className="offer_btn">
                  <button>check for offers</button>
                </div>
             
            </div>
          </Col>

          <Col md={3} sm={6}>
            <div className="main_container">
              <div className="search_img">
                <img src={tractor_img_one} alt="alt for img" />
              </div>
              <div className="name">
                <div>Renault KWID</div>
                <div>Rs 10 lakh</div>
                </div>
                <div className="offer_btn">
                  <button>check for offers</button>
                </div>
             
            </div>
          </Col>
          
          


          

        </Row>
      </Container>

    </>
  )
}
