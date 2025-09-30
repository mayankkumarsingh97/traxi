import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./latestTractos.Module.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import carsoul_img from "../../img/tractor_img_caro.png"
import carsoul_img from "../../img/tractor_img_one.png"
import product9 from "../../img/product/product9.jpg"
import product2 from "../../img/product/product2.png"
import product5 from "../../img/product/product5.png"

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function LatestTractors() {
    return (
        <>
            <Container className="mt-md-4">
                <Row>
                    <Col md={12}>

                        <Col md={12}>
                            <h3 className='py-md-1 mt-3 our_popular_machine'>Latest Machinery<ArrowDownwardIcon className="d-none d-lg-inline" /></h3>
                        </Col>

                    </Col>
                </Row>
            </Container>

            <Container className='py-3'>
                <Row className='mb-md-4'>
                    <Col>
                        <Carousel responsive={responsive} autoPlaySpeed={1000} customTransition="all .5" autoPlay={true} swipeable={true}>
                            <div className='d-flex justify-content-center'>
                                <div className='d-flex justify-content-center flex-column'>
                                    <div className="main_container" >
                                        <div className="search_img">
                                            <img src={product9} alt="alt for img one" />
                                        </div>
                                        <div className="name">
                                            <div>john deere 1455</div>
                                        </div>
                                        <div className="offer_btn mt-2">
                                            <button className='enquireButton'>Enquire Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='d-flex justify-content-center'>
                                <div className='d-flex justify-content-center flex-column'>
                                    <div className="main_container" >
                                        <div className="search_img">
                                            <img src={product2} alt="alt for img one" />
                                        </div>
                                        <div className="name">
                                            <div>john deere 1455</div>
                                        </div>
                                        <div className="offer_btn mt-2">
                                            <button className='enquireButton'>Enquire Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='d-flex justify-content-center'>
                                <div className='d-flex justify-content-center flex-column'>
                                    <div className="main_container" >
                                        <div className="search_img">
                                            <img src={product9} alt="alt for img one" />
                                        </div>
                                        <div className="name">
                                            <div>john deere 1455</div>
                                        </div>
                                        <div className="offer_btn mt-2">
                                            <button className='enquireButton'>Enquire Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className='d-flex justify-content-center'>
                                <div className='d-flex justify-content-center flex-column'>
                                    <div className="main_container" >
                                        <div className="search_img">
                                            <img src={product5} alt="alt for img one" />
                                        </div>
                                        <div className="name">
                                            <div>john deere 1455</div>
                                        </div>
                                        <div className="offer_btn mt-2">
                                            <button className='enquireButton'>Enquire Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='d-flex justify-content-center'>
                                <div className='d-flex justify-content-center flex-column'>
                                    <div className="main_container" >
                                        <div className="search_img">
                                            <img src={product9} alt="alt for img one" />
                                        </div>
                                        <div className="name">
                                            <div>john deere 1455</div>
                                        </div>
                                        <div className="offer_btn mt-2">
                                            <button className='enquireButton'>Enquire Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='d-flex justify-content-center'>
                                <div className='d-flex justify-content-center flex-column'>
                                    <div className="main_container" >
                                        <div className="search_img">
                                            <img src={product9} alt="alt for img one" />
                                        </div>
                                        <div className="name">
                                            <div>john deere 1455</div>
                                        </div>
                                        <div className="offer_btn mt-2">
                                            <button className='enquireButton'>Enquire Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>







                            {/* <div className='d-flex justify-content-center'><img src={carsoul_img} className="im" alt="ooooo" /></div>
                            <div className='d-flex justify-content-center'><img src={carsoul_img} className="im" alt="ooooo" /></div>
                            <div className='d-flex justify-content-center'><img src={carsoul_img} className="im" alt="ooooo" /></div>
                            <div className='d-flex justify-content-center'><img src={carsoul_img} className="im" alt="ooooo" /></div>
                            <div className='d-flex justify-content-center'><img src={carsoul_img} className="im" alt="ooooo" /></div>
                            <div className='d-flex justify-content-center'><img src={carsoul_img} className="im" alt="ooooo" /></div>
                            <div className='d-flex justify-content-center'><img src={carsoul_img} className="im" alt="ooooo" /></div>
                            <div className='d-flex justify-content-center'><img src={carsoul_img} className="im" alt="ooooo" /></div> */}
                        </Carousel>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
