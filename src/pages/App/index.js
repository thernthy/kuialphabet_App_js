import { useEffect, useState } from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import AuthProvider from "../../contexts/auth-provider";
import GenresProvider from "../../contexts/genres-provider";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import Modal from '../Authentication/components/Modal';
import AllRoutes from "../../config/all-routes";
import CompanyLogo from "../../assets/img/logo/company_logo.svg"
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/animate.css";
import "../../assets/css/custom-animation.css";
import "../../assets/css/swiper-bundle.css";
import "../../assets/css/slick.css";
import "../../assets/css/nice-select.css";
import "../../assets/css/flaticon.css";
import "../../assets/css/meanmenu.css";
import "../../assets/css/font-awesome-pro.css";
import "../../assets/css/magnific-popup.css";
import "../../assets/css/spacing.css";
import "../../assets/css/style.css";
import SearchForm from '../../components/SearchForm';
import '../../assets/globle.css'
import englishLogo from"../../assets/img/lag/en.svg"
import { HeaderIcon } from '../../db/menue_logo';
import $ from 'jquery';

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <BrowserRouter>
    {/* h */}
      <AuthProvider>
        <Modal />
        <GenresProvider> 
            <header>
              <div id="header-sticky" className="tp-header-area top-0 header-transparent header-space header-border"
              style={{backgroundColor:'#106FBB'}}
              >
                <div className="container-fluid">
                    <div className="row g-0 align-items-center">
                      <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6">
                          <div className="tp-logo">
                            <a href="index.html" className='flex text-white no-underline flex-row items-center gap-2'>
                              <img src={CompanyLogo} alt="" className='w-20 bg-white rounded-full'/>
                              KUI Alphabeted <br/> Website
                            </a>
                          </div>
                      </div>
                      <div className="col-xxl-6 col-xl-7 col-lg-8 d-none d-lg-block">
                          <div className="tp-main-menu">
                            <nav id="mobile-menu">
                                <ul className='pb-0'>
                                  <li >
                                    <Link to={'/'} className='py-2 flex flex-row items-center justify-start gap-1'>
                                      <span className='mx-2'><img src={HeaderIcon.home} /></span>
                                      Home
                                    </Link>
                                  </li>
                                  <li>                                    
                                    <Link to={'/words'} className='py-2 flex flex-row items-center justify-start gap-1'>
                                              <span className='mx-2'><img src={HeaderIcon.words} /></span>
                                                Words
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to={'/about us'} className='py-2 flex flex-row items-center justify-start gap-1'>
                                      <span className='mx-2'><img src={HeaderIcon.about} /></span>
                                                About Us
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to={'/'} className='py-2 flex flex-row items-center justify-start gap-1'>
                                      <span className='mx-2'><img src={HeaderIcon.faqs} /></span>
                                      Faqs
                                    </Link>
                                  </li>
                                </ul>
                            </nav>
                          </div>
                      </div>
                      <div className="col-xxl-4 col-xl-3 col-lg-2 col-md-6 col-6">
                          <div className="tp-header-right d-flex align-items-center justify-content-end">
                            <SearchForm />
                            <div className="tp-header-button d-none d-md-block">
                                <div className="rounded-full  bg-white flex flex-row items-center justify-around px-2 py-1.5 gap-1">
                                  <div>
                                    <img src={englishLogo} />
                                  </div>
                                  <div className='p-0 m-0'>
                                    English
                                  </div>
                                </div>
                            </div>
                            <div className="tp-toggle-bar d-lg-none">
                                <a className="tp-menu-bar" href="javascript:void(0)"><i className="fas fa-bars"></i></a>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
              <div className="tp-offcanvas-area d-lg-none">
              <div className="tpoffcanvas" data-background="assets/img/slider/slider-shape-3-1.png">
                <div className="tpoffcanvas__close-btn">
                    <button className="close-btn"><i className="fal fa-times"></i></button>
                </div>
                <div className="tpoffcanvas__logo">
                    <a href="index.html">
                      <img src="assets/img/logo/logo.png" alt=""/>
                    </a>
                </div>
                <div className="tpoffcanvas-social">
                <div className="tpcanvas-wrapper">
                    <div className="mobile-menu"></div>
                    <div className="tpoffcanvas__content">
                      <span>Ready to work with us?</span>
                      <a href="mailto:Edeningmail@gmail.com">insurea@gmail.com</a>
                      <p className="d-none d-lg-block">Eidan theme comes with everything you need to create the perfect website for all your business
                          endeavors.</p>
                    </div>
                </div>
                <div className="tpoffcanvas__social">
                    <h4 className="offcan-social-title">Follow Us</h4>
                    <div className="social-icon">
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                      <a href="#"><i className="fab fa-facebook-square"></i></a>
                      <a href="#"><i className="fab fa-dribbble"></i></a>
                    </div>
                </div>
              </div>
              </div>
              </div>
              <div className="body-overlay"></div>
            </header>
          <AllRoutes />
        </GenresProvider>
      </AuthProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;