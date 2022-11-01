import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';

import tractor_img from "../../img/app-download.jpg"

import "./hero.Module.css"
export default function Hero() {
  return (
    <>

      <Container fluid>
        <Row>
          <Col md={12} className="my-md-2">
            <div className="hero_banner">

              <Container>
                <Row className="align-items-center">
                  <Col md={4} className="p-3">
                    <h2>Find your Tractor</h2>
                    <Form.Group className="mb-3">
                      <Form.Label>Disabled input</Form.Label>
                      <Form.Control placeholder="Disabled input" disabled />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Disabled select menu</Form.Label>
                      <Form.Select disabled>
                        <option>Disabled select</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Check type="checkbox" label="Can't check this" disabled />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                   <div className="banner_tractor_img">
                    <img src={tractor_img} alt="tractor img" />
                   </div>
                  </Col>
                  <Col md={4}>
                   <div className="Home_inspection">
                    <li><b>Home Inspection</b></li>
                    <li><b>Instant Payment</b></li>
                    <li><b>Free RC transfer</b></li>
                    <li><b>Home Inspection</b></li>
                   </div>
                  </Col>
                </Row>
              </Container>

            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
