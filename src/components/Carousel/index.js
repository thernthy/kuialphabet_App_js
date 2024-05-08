import { MdHeight } from "react-icons/md";
import TopGonImg from "../../assets/comic_banner1.jpg";
import MarloweImg from "../../assets/Marlowe.jpg";
import Midway from "../../assets/midway-movie.jpg";
import { useEffect, useState } from "react";
import { getPosterBanner } from '../../hooks/posterBanner';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import SliderShapeOne from "../../assets/img/slider/slider-shape-1.png";
import bannerOne from "../../assets/img/banner/banner1.svg"
import { Link } from "react-router-dom";
const Carousel = () => {
    const [bannerData, setBannerData] = useState([])
    useEffect(() => {
        getPosterBanner("new", "200", "150", setBannerData);
    },[])

    return (
        <div id="myCarousel" className="tp-slider-active slider-arrow-style carousel slide pointer-event" data-bs-ride="carousel" style={{paddingTop:"0rem"}}>
            <div className="carousel-indicators">
                
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" style={{height:'100vh'}}>
                    <img src={TopGonImg} className="" alt="logo" width="100%"  />
                    <div className="container">
                        <div className="carousel-caption text-start">
                        </div>
                    </div>
                </div>
                <div className="carousel-item" style={{height:'100vh'}}>
                    <img src={MarloweImg} className="" alt="logo" width="100%"  />
                    <div className="container">
                        <div className="carousel-caption">
                        </div>
                    </div>
                </div>
                <div className="carousel-item" style={{height:'100vh'}}>
                   <div className="relative ">
                        <div class="tp-slider-content-box text-center z-index-3 absolute left-1/2 top-32 xl:top-60 -translate-x-1/2">
                                <h2 class="text-white md:text-3xl  lg:text-5xl leading-relaxed font-bold">
                                KUI Alphabeted Website <br /> your family</h2>
                                <p>KUI Alphabeted WebsiteKUI Alphabeted WebsiteKUI 
                                    Alphabeted Website
                                </p>
                                <Link className="tp-btn tp-hover-white no-underline" href="about-us.html" tabindex="0">
                                 <span><FontAwesomeIcon icon={faSearch} /></span> Search the words
                                </Link>
                                <a className="tp-btn-yellow tp-hover-white" href="contact.html" tabindex="0">Contact us today</a>
                        </div>
                        <img src={bannerOne} className="" alt="logo" height="100%" width="100%"  />
                        <div className="container">
                            <div className="carousel-caption text-end">
                            </div>
                        </div>
                   </div>
                </div>
            </div>
            <button type="button" className="carousel-control-prev slick-prev slick-arrow text-white" data-bs-target="#myCarousel" data-bs-slide="prev">
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button type="button" className="slick-next slick-arrow carousel-control-next" data-bs-target="#myCarousel" data-bs-slide="next" >
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <div className="tp-slider-bottom-shape bottom-0">
              <img src={SliderShapeOne} alt=""/>
            </div>
        </div>
    )
}

export default Carousel