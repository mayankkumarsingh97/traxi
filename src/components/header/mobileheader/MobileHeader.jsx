import { useState, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import traxi_mobile_logo from "../../../img/traxi-logo_blue.png"
import playStoreicon from "../../../img/play_store_icon.png"
// import InlineButton from "../../styledComponents/InlineButtons"
// import InlineButton2 from "../../styledComponents/InlineButton2"

import facebook from "../../../assets/images/product/social_icons/facebook.png"
import twitter from "../../../assets/images/product/social_icons/twitter.png"
import linkded from "../../../assets/images/product/social_icons/linkedIn.png"
import insta from "../../../assets/images/product/social_icons/insta.jpeg"
import "./mobile.Module.css"

const MobileHeader = () => {
    const [position, setPosition] = useState("static")
    const [slide, setSlide] = useState("static")
    const [empty, setEmpty] = useState("block")
    const fixNavbar = () => {
        let winHeight = window.scrollY;
        winHeight > 600 ? setPosition("toFixMobilebar") : setPosition("static")
    }
    const sideBarOpen = () => {
        setSlide("active")
        setEmpty("d-none")
    }
    const removeSidebar = () => {
        setSlide("deactive")
        setEmpty("d-block")

    }
    useEffect(() => window.addEventListener('scroll', fixNavbar), [])
    return (<>
        <div className="container d-block d-lg-none">
            <div className="row">
                <div className="col-12 w-100 d-flex justify-content-between align-items-center my-1 py-1">
                    <div className='d-flex icons align-items-center justify-content-between w-50'>
                        <a href="#TwitterIcon"> <img src={facebook} width="30px" alt="" /></a>
                        <a href="#FacebookIcon"><img src={twitter} width="30px" alt="" /></a>
                        <a href="#InstagramIcon"><img src={linkded} width="30px" alt="" /></a>
                        <a href="#LinkedInIcon"><img src={insta} width="30px" alt="" /></a>
                    </div>
                    <img src={playStoreicon} alt="" className="d-inline-block" />
                </div>
            </div>
        </div>

        <div className={`d-lg-none d-block bgmobile  ${position} ${empty}`} >
            <div className="d-flex justify-content-between px-2  align-items-center">
                <div className="d-flex">
                    <h3><a href="#traxi" style={{ fontWeight: "800" }}><img height="30px" src={traxi_mobile_logo} />  </a></h3>
                </div>
                <div className="d-flex justify-content-between">
                    <MenuIcon onClick={sideBarOpen} />
                </div>
            </div>
        </div>

        <div className="container d-block d-lg-none">
            <div className="row">
                <div className="col">
                    <div className="search_se my-2">
                        <input type="search" className="search_machine" placeholder='Search your machinery here' />
                        <input className="mobile_vi_find" type="submit" value="search" />
                    </div>
                </div>
            </div>
        </div>

        <div className="container d-lg-none d-block">
            <div className="row">
                <div className="sidebar">
                    <div className={`mobile-navbar ${slide}`}>
                        <div className="wrapper">
                            <div className="d-flex justify-content-between  px-1 flex-column">
                                <div className="d-flex justify-content-between">
                                    <h3><a href="#slack" style={{ fontWeight: "800" }}>traxi</a></h3>
                                    <div className="w-25 d-flex justify-content-around ">
                                        <CloseIcon onClick={removeSidebar} />
                                    </div>
                                </div>

                                <div className="container d-lg-none d-block bg-secondary" id="stopScroll">
                                    <div className="row">
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingTwo">
                                                    <button className="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        PRODUCT
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body px-0 py-1">
                                                        <li><a href="" className="py-2">PRODUCT</a></li>

                                                    </div>
                                                </div>
                                            </div>


                                            <li><b><a href="#">Solutions</a></b></li>

                                            <li><b><a href="#">Sign in</a></b></li>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    </>)
}

export default MobileHeader