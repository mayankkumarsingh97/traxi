import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./searchbycat.Module.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import carsoul_search_by_cat from "../../img/tractor_img_two.png"
import carsoul_search_img from "../../img/tractor_img_one.png"
import product9 from "../../img/product/product4.png"

import img_cat_1 from "../../../src/assets/images/product/product_category/drone.png"
import img_cat_2 from "../../../src/assets/images/product/product_category/harvester.png"
import img_cat_3 from "../../../src/assets/images/product/product_category/planting_equipment.png"
import img_cat_4 from "../../../src/assets/images/product/product_category/sprayr.png"



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
        items: 2
    }
};

export default function SearchByCat() {
    return (
        <>
            <Container className='py-md-1'>
                <Row>
                    <Col md={12} className=''>
                        <h3 className="our_popular_machine mt-5">Search by Category <ArrowDownwardIcon className="d-none d-md-inline" /></h3>
                            <div className="d-flex w-100 justify-content-between py-md-2 align-items-center search_by_category">
                            <a href=""><img src={img_cat_1} style={{ width: "60px" }} alt="img_cat_1" />&nbsp;Utility Tractors</a>
                            {/* <a href=""><img src={img_cat_3} style={{ width: "60px" }} alt="img_cat_3" />&nbsp; Compact  Tractors</a> */}
                            <a href=""><img src={img_cat_2} style={{ width: "60px" }} alt="img_cat_2" />&nbsp; Industrial Tractors</a>
                            <a href=""><img src={img_cat_2} style={{ width: "60px" }} alt="img_cat_2" />&nbsp; Industrial Tractors</a>
                            <a href=""><img src={img_cat_2} style={{ width: "60px" }} alt="img_cat_2" />&nbsp; Industrial Tractors</a>
                            {/* <a href=""><img src={img_cat_4} style={{ width: "60px" }} alt="img_cat_4" />&nbsp;Garden Tractors</a> */}
                        </div>
                    </Col>
                    <Col md={12}>
                        <Row className="rounded border py-md-0 py-3">
                            <Col>
                                <Carousel responsive={responsive}>
                                    <div className='d-flex justify-content-center flex-column'>
                                        <div className="main_container mx-1">
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



                                    <div className='d-flex justify-content-center flex-column'>
                                        <div className="main_container mx-1" >
                                            <div className="search_img">
                                                <img src={product9} alt="alt for img one" style={{ background: "#EAF2F4" }} />
                                            </div>
                                            <div className="name">
                                                <div>john deere 1455</div>
                                            </div>
                                            <div className="offer_btn mt-2">
                                                <button className='enquireButton'>Enquire Now</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='d-flex justify-content-center flex-column'>
                                        <div className="main_container mx-1">
                                            <div className="search_img" >
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

                                    <div className='d-flex justify-content-center flex-column'>
                                        <div className="main_container mx-1">
                                            <div className="search_img" >
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


                                    <div className='d-flex justify-content-center flex-column'>
                                        <div className="main_container mx-1">
                                            <div className="search_img" >
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



                                    <div className='d-flex justify-content-center flex-column'>
                                        <div className="main_container mx-1">
                                            <div className="search_img" >
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


                                </Carousel>
                            </Col>
                        </Row>
                    </Col>



                </Row>
            </Container>
        </>
    )
}
