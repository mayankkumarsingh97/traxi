import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';

import AgricultureIcon from '@mui/icons-material/Agriculture';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import MoveUpIcon from '@mui/icons-material/MoveUp';

import tractor_img from "../../img/app-download.jpg"

import "./hero.Module.css"
export default function Hero() {
  return (
    <>
      <Container  className='hero_banner mt-md-3 shadow-lg p-md-4 p-1'>
        <Row>
          <Col md={12}>
              <Container>
                <Row className="align-items-center justify-content-around my-3">
                  <Col md={4} className="align-items-center flex-column hero_form_card  py-2 px-2 bg-white">
                    <h2 className='find_your_trac_h2'>Find your Machinery</h2>
                    <div className='used_new_button my-2'>
                      <button className=''>New</button>
                      <button>Used</button>
                    </div>
                    <div className="search_by_name_radio">
                      <input type="radio" value="buzet" name="byname" />&nbsp;<span>By name</span>&nbsp;
                      <input type="radio" value="by_brand" name="byname" />&nbsp;<span>by brand</span>
                    </div>
                     
                     <input type="text" className='search_by_Name' name="search_by_Name" placeholder='Search by Name' />
                     <input type="text" className='search_by_Name' name="search_by_type" placeholder='Search by Vehicle type' />

                  

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
                    {/* <div className="Home_inspection">
                      <li><AgricultureIcon/>&nbsp;<b>Home Inspection</b></li>
                      <li><ElectricBoltIcon/>&nbsp;<b>Instant Payment</b></li>
                      <li><MoveUpIcon/>&nbsp;<b>Free RC transfer</b></li>
                      <li><AgricultureIcon/>&nbsp;<b>Home Inspection</b></li>
                    </div> */}
                  </Col>
                </Row>
              </Container>

            
          </Col>
        </Row>
      </Container>
    </>
  )
}
