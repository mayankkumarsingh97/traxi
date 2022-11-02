import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';

import tractor_img from "../../img/app-download.jpg"

import "./hero.Module.css"
export default function Hero() {
  return (
    <>

      <Container  className='hero_banner mt-md-3 shadow-lg'>
        <Row>
          <Col md={12}>
              <Container>
                <Row className="align-items-center justify-content-around my-3">
                  <Col md={4} className="align-items-center flex-column hero_form_card  py-2">
                    <h2 className='find_your_trac_h2'>Find your Tractor</h2>
                    <div className='used_new_button my-2'>
                      <button className=''>New Tractor</button>
                      <button>Used Tractor</button>
                    </div>
                    <div className="search_by_name_radio">
                      <input type="radio" value="buzet" name="byname" />&nbsp;<span>Byname</span>&nbsp;
                      <input type="radio" value="by_brand" name="bycost" />&nbsp;<span>bycost</span>
                    </div>
                    <Form.Select aria-label="Default select example select_for_budget" className='my-2 select_for_budget'>
                      <option >Select by budget</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>

                    <Form.Select aria-label="Default select example" className='select_for_budget'>
                      <option>All Vehicle types</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>

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
                    <div className="Home_inspection">
                      <li><b>Home Inspection</b></li>
                      <li><b>Instant Payment</b></li>
                      <li><b>Free RC transfer</b></li>
                      <li><b>Home Inspection</b></li>
                    </div>
                  </Col>
                </Row>
              </Container>

            
          </Col>
        </Row>
      </Container>
    </>
  )
}
