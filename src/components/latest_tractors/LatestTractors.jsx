import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./latestTractos.Module.css"
// import carsoul_img from "../../img/tractor_img_caro.png"
import carsoul_img from "../../img/tractor_img_one.png"

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
                            <h3 className='text-center py-md-1'>Latest Tractors....</h3>
                        </Col>

                    </Col>
                </Row>
            </Container>

            <Container className='py-3'>
                <Row className='mb-md-4'>
                    <Col>
                        <Carousel responsive={responsive}>
                            <div className='d-flex justify-content-center'><img src={carsoul_img} className="im" alt="ooooo" /></div>
                            <div className='d-flex justify-content-center'><img src={carsoul_img} className="im" alt="ooooo" /></div>
                            <div className='d-flex justify-content-center'><img src={carsoul_img} className="im" alt="ooooo" /></div>
                            <div className='d-flex justify-content-center'><img src={carsoul_img} className="im" alt="ooooo" /></div>
                            <div className='d-flex justify-content-center'><img src={carsoul_img} className="im" alt="ooooo" /></div>
                            <div className='d-flex justify-content-center'><img src={carsoul_img} className="im" alt="ooooo" /></div>
                            <div className='d-flex justify-content-center'><img src={carsoul_img} className="im" alt="ooooo" /></div>
                            <div className='d-flex justify-content-center'><img src={carsoul_img} className="im" alt="ooooo" /></div>
                            <div className='d-flex justify-content-center'><img src={carsoul_img} className="im" alt="ooooo" /></div>
                        </Carousel>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
