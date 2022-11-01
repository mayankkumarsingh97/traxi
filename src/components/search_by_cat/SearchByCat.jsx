import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./searchbycat.Module.css"
import carsoul_search_by_cat from "../../img/tractor_img_two.png"
import carsoul_search_img from "../../img/tractor_img_one.png"


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
            <Container className='py-md-5'>
                <Row>
                    <Col md={12}>
                        <h3>Search by Category</h3>
                        <div className="search_by_category">
                            <ul className='d-flex p-0 justify-content-between'>
                                <li><a href="#UtilityTractors">Utility Tractors</a></li>
                                <li><a href="#CompactTractors">CompactTractors</a></li>
                                <li><a href="#UtilityTractors">Utility Tractors</a></li>
                                <li><a href="#IndustrialTractors">Industrial Tractors</a></li>
                                <li><a href="#CompactTractors">CompactTractors</a></li>
                                <li><a href="#GardenTractors">Garden Tractors</a></li>
                                <li><a href="#"></a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={12}>
                    <Carousel responsive={responsive}>
                            <div className='d-flex justify-content-center row-direction-column'>
                                <img src={carsoul_search_by_cat} className="im" alt="ooooo" />
                                <div className="name">
                                    Maruti
                                </div>
                                <div className="name">
                                    Starting @12 lakh
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'><img src={carsoul_search_by_cat} className="im" alt="ooooo" /></div>
                            <div className='d-flex justify-content-center'><img src={carsoul_search_by_cat} className="im" alt="ooooo" /></div>
                            <div className='d-flex justify-content-center'><img src={carsoul_search_by_cat} className="im" alt="ooooo" /></div>
                            <div className='d-flex justify-content-center'><img src={carsoul_search_by_cat} className="im" alt="ooooo" /></div>
                            <div className='d-flex justify-content-center'><img src={carsoul_search_by_cat} className="im" alt="ooooo" /></div>
                            <div className='d-flex justify-content-center'><img src={carsoul_search_by_cat} className="im" alt="ooooo" /></div>
                            <div className='d-flex justify-content-center'><img src={carsoul_search_by_cat} className="im" alt="ooooo" /></div>
                            <div className='d-flex justify-content-center'><img src={carsoul_search_by_cat} className="im" alt="ooooo" /></div>
                        </Carousel>
                    </Col>


                   
                </Row>
            </Container>
        </>
    )
}
