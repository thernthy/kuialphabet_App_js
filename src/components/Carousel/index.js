import { MdHeight } from "react-icons/md";
import TopGonImg from "../../assets/comic_banner1.jpg";
import MarloweImg from "../../assets/Marlowe.jpg";
import Midway from "../../assets/midway-movie.jpg";
import bannerOne from "../../assets/banner/banner1.JPG"
import bannerTwo from "../../assets/banner/banner2.jpg"
import bannerThree from "../../assets/banner/banner3.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faBook, faFileDownload, faSearch } from "@fortawesome/free-solid-svg-icons";
import SliderShapeOne from "../../assets/img/slider/slider-shape-1.png";
// import bannerOne from "../../assets/img/banner/banner1.svg"
import { Link } from "react-router-dom";
import { HookBannerListing } from "../../hooks/hookBanner";
import {useTranslation } from "react-i18next";
const Carousel = () => {
  const {t, i18n} = useTranslation("global")
  
  const {data, isLoading, error, refetch} = HookBannerListing()
  //console.log(data)
const renderBanner = () => {
    if(isLoading){
        return <p>Loading.....</p>
    }
    if(data && data.length <= 0 || error){
        return(
            <div className="carousel-item active h-96 lg:h-screen " >
                <div className="relative ">
                    <div class="tp-slider-content-box text-center z-index-3 absolute left-1/2 top-32 xl:top-40 -translate-x-1/2">
                            <h2 class="text-blue-600 md:text-2xl  lg:text-3xl leading-relaxed font-bold">
                            KUI Alphabeted Website <br /> your family</h2>
                            <p>KUI Alphabeted WebsiteKUI Alphabeted WebsiteKUI 
                                Alphabeted Website
                            </p>
                           
                            <a className="tp-btn-yellow tp-hover-white" href="contact.html" tabindex="0">Contact us today</a>
                    </div>
                    <img src={bannerThree} className="" alt="logo" height="100%" width="100%"  />
                    <div className="container">
                        <div className="carousel-caption text-end">
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return data?.map((banner, index)=> {
        return (
            <div key={index+1} className={`carousel-item ${index+1 === 1 && 'active'} h-96 lg:h-screen`}>
                <div className="relative ">
                    <div class="tp-slider-content-box text-center z-index-3 absolute left-1/2 top-20  sm:top-24 xl:bottom-1/2 md:translate-y-1/2 -translate-x-1/2">
                            <h2 class="text-blue-600 md:text-2xl  lg:text-3xl leading-relaxed font-bold">
                                {
                                 i18n.language === "kh"&&  banner?.title_kh 
                                 
                                }
                                {i18n.language === "en" && banner?.title_en 
                                }
                            </h2>
                            <p className="font-bold">
                                {
                                 i18n.language === "kh"&&  banner?.explain_kh 
                                }
                                {i18n.language === "en" && banner?.explain_en 
                                }
                            </p>
                           <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
                            <a className="py-2 text-nowrap text-sm bg-blue-600 font-bold px-3 lg:px-5 rounded-full no-underline text-white" href="#app" tabindex="0">
                                <FontAwesomeIcon icon={faBook} className="mx-3"/>Search the words
                            </a>
                            <a className="py-2 text-nowrap text-sm bg-green-500 font-bold px-3 rounded-full no-underline text-white" href="#app" tabindex="0">
                               <FontAwesomeIcon icon={faFileDownload} className="md:mx-3" /> Download KUI Dictionary App
                            </a>
                           </div>
                    </div>
                    <img src={`${process.env.REACT_APP_BASED_URL}storage/${banner.banner_img}`} className="" alt="logo" height="100%" width="100%"  />
                    <div className="container">
                        <div className="carousel-caption text-end">
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    
}
    return (
        <div id="myCarousel" className="tp-slider-active slider-arrow-style carousel slide pointer-event" data-bs-ride="carousel" style={{paddingTop:"0rem"}}>
            <div className="carousel-indicators">
                
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                {renderBanner()}
            </div>
            <button type="button" className="carousel-control-prev  slick-prev slick-arrow text-white" data-bs-target="#myCarousel" data-bs-slide="prev">
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