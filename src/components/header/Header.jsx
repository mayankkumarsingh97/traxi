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
            <Container fluid className='p-1' style={{"background":"#FFCB08"}}>
                <Row className='align-items-center'>
                    <Col md={9}>
                        <div className="text-dark" style={{ fontSize: "18px" }}>
                            info@escortscropsolutions.com</div>
                    </Col>
                    <Col md={3}>
                        <div className="social_icons">
                            <a href="#TwitterIcon" className='text-dark'><TwitterIcon /></a>
                            <a href="#FacebookIcon" className='text-dark'><FacebookIcon /></a>
                            <a href="#InstagramIcon" className='text-dark'><InstagramIcon /></a>
                            <a href="#LinkedInIcon" className='text-dark'><LinkedInIcon /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>

                <Row className='justify-content-between align-items-center mt-md-0'>
                    <Col md={4}>
                        <div className="logo_header d-none d-md-block">
                            <img src={logo} width="90" alt="" />
                        </div>
                    </Col>

                    <Col md={5} className="mt-2">
                        <div className="search_se">
                            <input type="search" placeholder='search your machinery here....' />
                        </div>
                    </Col>

                    <Col md={3}>
                        <div className="d-flex justify-content-between register_login mt-md-0 mt-md-2 mt-2 mb-1">
                            <select name="" id="">
                                <option value="English">English</option>
                                <option value="Hindi">Hindi</option>
                                <option value="English">English</option>
                                <option value="Hindi">Hindi</option>
                            </select>
                            <FavoriteBorderIcon />
                            <div className='reg_login'>
                                <a href="#register"><SupervisorAccountIcon /> Login/Register</a>
                            </div>

                        </div>
                    </Col>
                </Row>

                {/* Navigation menus */}

                <Row className="d-none d-md-block mt-md-2">
                    <Col md={9}>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#home"><option value="Home">Home</option></a>
                                </li>
                                <li><select name="" id="">
                                    <option value="Farm_services">Product Division</option>
                                    <option value="Farm_services">Agri Machinery</option>
                                    <option value="Farm_services">Agri Chemicals</option>
                                    <option value="Farm_services">Spare Parts</option>


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
                    {/* <Col md={3}>
                        <div className="d-flex justify-content-end set_locattion">
                            <li><select name="" id="">
                                <option value="Faridabad">Faridabad</option>
                                <option value="Faridabad">Faridabad</option>
                                <option value="Faridabad">Faridabad</option>
                                <option value="Faridabad">Faridabad</option>
                            </select></li>
                        </div>
                    </Col> */}
                </Row>
            </Container>

        </>
    )
}
