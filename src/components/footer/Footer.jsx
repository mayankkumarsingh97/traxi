import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import ecs_log from "../../img/esc_logo_footer.png"
import "./footer.Module.css"
export default function Footer() {
    return (
        <>
            <Container fluid className='footer_bg' style={{ "background": "#FFCB08" }}>
                <footer>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col md={4}>
                                <ul className='d-flex justify-content-md-around'>
                                    <div>
                                        <li className='heading'>Overview&nbsp;</li>
                                        <li><a href="#Aboutus">Aboutus</a></li>
                                        <li><a href="#Privacy_Policy">Privacy Policy</a></li>
                                        <li><a href="#Sweaters">Terms and conditions</a></li>
                                        <li><a href="#Dress">Coorporate policy</a></li>
                                        <li><a href="#Shoes">investors</a></li>
                                    </div>
                                    <div>
                                        <li className='heading'>Others</li>
                                        <li><a href="#">Contact us</a></li>
                                        <li><a href="#">Blog</a></li>
                                    </div>
                                </ul>

                            </Col>
                            <Col md={4}>
                                <ul className='d-flex justify-content-md-around'>
                                    <div>
                                        <li className='heading'>Contact with us</li>
                                        <li><a href="#order">order status</a></li>
                                        <li><a href="#Shipping">Shipping</a></li>
                                        <li><a href="#">FAQ'S & Help</a></li>
                                        <li><a href="#">Tems and Conditions</a></li>
                                        
                                    </div>
                                    <div>
                                        <li className='heading'>&nbsp;Exclusive Services</li>
                                        <li><a href="#">Call us 1800 572 6095</a></li>
                                        <li><a href="#">Send us email</a></li>
                                        <li><a href="#">See our store</a></li>

                                    </div>
                                </ul>
                            </Col>


                            <Col md={4}>
                                <ul className='d-flex justify-content-md-around'>
                                    <div>
                                        <li className='heading'><a href="#"><img src={ecs_log} alt="" /></a></li>
                                        <li><a href="#">2nd Floor, Plot No. 4, Near Metro Pillar 599, 15/1 Mathura Road, NH-2 FARIDABAD, HARYANA 121003</a></li>
                                        <li><a href="#">Call us 1800 572 6095</a></li>
                                        <li><a href="#">info@escortscropsolutions.com</a></li>
                                    </div>
                                  
                                </ul>
                            </Col>
                        </Row>
                        <div className="border-bottom"></div>
                        <Row>
                            <Col md={12}>
                                <div className="text-dark my-2" style={{ fontSize: "14px" }}>
                                    traxi.in @ All rights Reserved.
                                </div>
                            </Col>
                        </Row>
                    </Container>

                </footer>
            </Container>
        </>
    )
}
