// import { useMovies } from "../../hooks/useMovies";

import Carousel from "../../components/Carousel";
// import Loading from "../../components/Loading";
// import ErrorMessage from "../../components/ErrorMessage";
// import MovieCards from "../../components/MovieCards";
import { Supporters } from "../../db/supporter_logo";
import Meetting from '../../assets/img/service/meetting.svg'
import SwapperJas from "../../components/swapperComponents/testingWraper";
import ServiceComponents from "../../components/service";
import GooGleMape from "../../components/mape/mape";
import ConatactForm from "../../components/contacForm/contact";
import { GalleryImg } from "../../db/gallary";
import { Link } from "react-router-dom";

const Home = () => {
    // const { data, isLoading, error, setPage, pageCount, refetch } = useMovies()
    // const [bannerData, setBannerData]  = useState([])
    // const renderMovies = () => {
    //     if (isLoading) {
    //         return <Loading />
    //     }
        
    //     if (error) {
    //         return <ErrorMessage refetch={refetch} />
    //     }
      
    //     return data.data?.map(movie => {
    //         return (
    //             <MovieCards
    //                 key={movie.comic_title_id}
    //                 title={movie.title}
    //                 poster={movie.photo_cover_path}
    //                 id={movie.comic_title_id}
    //                 genres={movie?.genres?.join(', ')}
    //                 year={movie.created_at}
    //                 rating={movie.imdb_rating}
    //             />
    //         );
    //     })
    // }


    return (
        <main>
         <Carousel  /> 

         {/* supporter section start */}
         <div className="album py-5 bg-body-tertiary">
            <div className="px-3">
                <ul className="flex flex-row items-center justify-around p-0">
                    <li className="text-center">
                        <h4>Sponsor</h4>
                        <ul className="flex flex-row items-center justify-around p-0">
                            <li>
                                <img src={Supporters.Voice} alt="" />
                            </li>
                        </ul>
                    </li>
                    <li className="text-center">
                        <h4>Supported</h4>
                        <ul className="flex flex-row items-center justify-around p-0">
                            <li>
                                <img src={Supporters.LiveLearn} alt="" />
                            </li>
                            <li>
                                <img src={Supporters.LinkLearn} alt="" />
                            </li>
                            <li>
                                <img src={Supporters.Phumaisa} alt="" />
                            </li>
                            <li>
                                <img src={Supporters.Kuipedia} alt="" />
                            </li>
                        </ul>
                    </li>
                    <li className="text-center">
                        <h4>Deploy Project</h4>
                        <ul className="flex flex-row items-center justify-around p-0">
                            <li>
                                <img src={Supporters.Company} alt="" className="h-20" />
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
         </div>
         {/* supporter section end */}
         {/* about section start */}
        <div className="container">
                    <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="tp-about-thumb">
                            <img src={Meetting} alt=""/>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 ">
                        <div className="tp-about-section-box ">
                            <h4 className="tp-section-subtitle">About us</h4>
                            <h3 className="tp-section-title pb-20">Change the way but <span><br/> life Insurance</span></h3>
                            <p className="paragraph-one">Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo
                                claritatem insitamconse
                                quat.Exerci tation ullamcorper suscipit loborti excommodo habent claritatem insitamconse
                                quat.Exerci tationlobortis nisl aliquip ex ea commodo
                                n ullamcorper suscipit loborti excommodo</p>
                            <p>Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo claritatem insitamconse
                                quat.Exerci tation ullamcorper suscipit loborti </p>
                        </div>
                        <div className="tp-about-button-box d-flex align-items-center mb-6">
                            <Link className="tp-btn tp-ab-button-one" to={"/about us"}>About us</Link>
                            <Link className="tp-ab-play-button popup-video" to={"https://www.youtube.com/watch?v=PfPP5ac_aQo"}><i class="fas fa-play"></i></Link>
                        </div>
                    </div>
                    </div>
        </div>
        {/* about section end */}
        {/* category section start */}
            <ServiceComponents />
        {/* category section end */}
        {/* category slider section start */}

        <div className="tp-case-area pt-130 pb-130">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="tp-case-section-box text-center mb-20">
                     <h4 className="tp-section-subtitle">Gallery</h4>
                     <h3 className="tp-section-title">Our<span>Gallery</span></h3>
                  </div>
               </div>
            </div>
            <div className="tp-case-slider-box">
                <SwapperJas img_Data={GalleryImg}/>
            </div>
         </div>
        {/* google map section start */}
            <GooGleMape />
        {/* google map section  ending */}
        {/* contact form section start */}
           <ConatactForm />
        {/* contact form section end */}
      </div>
    </main>
    )
}

export default Home