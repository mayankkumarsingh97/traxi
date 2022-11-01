import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import logo from "../../img/traxi-logo.png"
import "./header.Module.css"

export default function Header() {
    return (
        <>
            <Container fluid className='bg-dark'>
                <Row className='align-items-center'>
                    <Col md={9}>
                        <div className="text-white lead" style={{ fontSize: "18px" }}>info@escortscropsolutions.com</div>
                    </Col>
                    <Col md={3}>
                        <div className="social_icons">
                            <a href="#TwitterIcon"><TwitterIcon /></a>
                            <a href="#FacebookIcon"><FacebookIcon /></a>
                            <a href="#InstagramIcon"><InstagramIcon /></a>
                            <a href="#LinkedInIcon"><LinkedInIcon /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>

                <Row className='justify-content-between align-items-center'>
                    <Col md={4}>
                        <div className="logo_header">
                            <img src={logo} width="90" alt="" />
                        </div>
                    </Col>

                    <Col md={5}>
                        <div className="search_se">
                            <input type="search" placeholder='search here....' />
                        </div>
                    </Col>

                    <Col md={3}>
                        <div className="d-flex justify-content-between register_login">
                            <select name="" id="">
                                <option value="English">English</option>
                                <option value="Hindi">Hindi</option>
                                <option value="English">English</option>
                                <option value="Hindi">Hindi</option>
                            </select>
                            <FavoriteBorderIcon />
                            <div className='reg_login'>
                                <a href="#login_register"><SupervisorAccountIcon /> Login/Register</a>
                            </div>

                        </div>
                    </Col>
                </Row>

                {/* Navigation menus */}

                <Row className="mt-md-1">
                    <Col md={9}>
                        <nav>
                            <ul>
                                <li>
                                <a href="#home"><option value="Home">Home</option></a>
                                </li>
                                <li><select name="" id="">
                                    <option value="Farm_services">Farm Services</option>
                                    <option value="Farm_services">Farm Services</option>
                                    <option value="Farm_services">Farm Services</option>
                                    <option value="Farm_services">Farm Services</option>
                                    <option value="Farm_services">Farm Services</option>

                                </select></li>

                                <li><select name="" id="">
                                    <option value="Machinery">Sell by Machinery</option>
                                    <option value="Machinery">Sell by Machinery</option>
                                    <option value="Machinery">Sell by Machinery</option>
                                    <option value="Machinery">Sell by Machinery</option>
                                    <option value="Machinery">Sell by Machinery</option>

                                </select></li>


                                <li><select name="" id="">
                                    <option value="Finance">Finance</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Finance">Finance</option>

                                </select></li>

                                <li><select name="" id="">
                                    <option value="WorkShop">WorkShop</option>
                                    <option value="WorkShop">WorkShop</option>
                                    <option value="WorkShop">WorkShop</option>
                                    <option value="WorkShop">WorkShop</option>

                                </select></li>

                                <li><select name="" id="">
                                    <option value="Telematics">Telematics</option>
                                    <option value="Telematics">Telematics</option>
                                    <option value="Telematics">Telematics</option>
                                    <option value="Telematics">Telematics</option>
                                    <option value="Telematics">Telematics</option>


                                </select></li>

                            </ul>
                        </nav>
                    </Col>
                    <Col md={3}>
                        <div className="d-flex justify-content-end set_locattion">
                            <li><select name="" id="">
                                <option value="Faridabad">Faridabad</option>
                                <option value="Faridabad">Faridabad</option>
                                <option value="Faridabad">Faridabad</option>
                                <option value="Faridabad">Faridabad</option>
                            </select></li>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
