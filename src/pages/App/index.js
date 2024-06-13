import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Link} from "react-router-dom";
import AuthProvider from "../../contexts/auth-provider";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
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
import KhmerFlag from"../../assets/img/lag/cambodia.svg"
import { HeaderIcon } from '../../db/menue_logo';
import { useTranslation } from 'react-i18next';

const App = () => {
  const [modleMenu, setModleMenu] = useState(false)
  const [loading, setLoading] = useState(true);
  const [languechageModel, setLanguechageModel] = useState(false)
  const menuRef = useRef(null);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const { t, i18n } = useTranslation("global");
  const curretLanguage = i18n.language;
  const handleLangueChageModel = () => {
    setLanguechageModel(!languechageModel)
  }
  const languageChage = (language) => {
    i18n.changeLanguage(language)
  }


  const handleModleMenue = () => {
    setModleMenu(!modleMenu);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setModleMenu(false);
    }
  };

  useEffect(() => {
    if (modleMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modleMenu]);



  return loading ? (
    <Loading position={'fixed'} />
  ) : (
    <BrowserRouter>
    {/* h */}
      <AuthProvider>
            <header className=' fixed top-0 left-0 w-full' style={{zIndex:'1000'}}>
              <div id="header-sticky" className=" sticky tp-header-area top-0 header-transparent header-space header-border"
              style={{backgroundColor:'#106FBB'}}
              >
                <div className="container-fluid">
                    <div className="row g-0 align-items-center">
                      <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6">
                          <div className="tp-logo">
                            <a href="/" className='flex text-white no-underline flex-row items-center gap-2'>
                              <img src={CompanyLogo} alt="" className=' w-12 bg-white rounded-full'/>
                              KUI Alphabeted <br/> Website
                            </a>
                          </div>
                      </div>
                      <div className="col-xxl-6 col-xl-7 col-lg-8 d-none d-lg-block">
                          <div className="tp-main-menu">
                            <nav id="mobile-menu" className={``}>
                                <ul className='pb-0' style={{transform:"translateY(.5rem)"}}>
                                  <li >
                                    <Link to={'/'} className='py-2 flex flex-row items-center justify-start gap-1 no-underline'>
                                      <span className='mx-2'><img src={HeaderIcon.home} /></span>
                                      {t("header.menue_text.home")}
                                    </Link>
                                  </li>
                                  <li>                                    
                                    <Link to={'/words'} className='py-2 flex flex-row items-center justify-start gap-1 no-underline'>
                                        <span className='mx-2'><img src={HeaderIcon.words} /></span>
                                        {t("header.menue_text.words")}
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to={'/about us'} className='py-2 flex flex-row items-center justify-start gap-1 no-underline'>
                                      <span className='mx-2'><img src={HeaderIcon.about} /></span>
                                      {t("header.menue_text.about_us")}
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to={'/question'} className='py-2 flex flex-row items-center justify-start gap-1 no-underline'>
                                      <span className='mx-2'><img src={HeaderIcon.faqs} /></span>
                                      {t("header.menue_text.faqs")}
                                    </Link>
                                  </li>
                                </ul>
                            </nav>
                          </div>
                      </div>
                      <div className="col-xxl-4 col-xl-3 col-lg-2 col-md-6 col-6">
                          <div className="tp-header-right d-flex align-items-center justify-content-end">
                            <SearchForm t={t} i18n={i18n} />
                            <div className="tp-header-button d-none d-md-block relative">
                                <div className="rounded-full  bg-white flex flex-row items-center justify-around px-2 py-1.5 gap-1
                                " onClick={handleLangueChageModel}>
                                  <div>
                                    <img src={
                                      curretLanguage && curretLanguage === "en"? 
                                    englishLogo : KhmerFlag} />
                                  </div>
                                  <div className='p-0 m-0 capitalize cursor-pointer'>
                                   {t("header.menue_text.english")}
                                  </div>
                                </div>
                                {languechageModel &&
                                  <ul style={{zIndex:'10000'}} className=' fixed top-22 mt-2 flex flex-col gap-1 bg-blue-600 p-0 capitalize items-start justify-around right-4 min-h-16'>
                                    <li onClick={ ()=> languageChage ('en') } 
                                      className={`
                                        flex flex-row items-center gap-2 justify-start cursor-pointer 
                                        px-2
                                        w-full
                                        py-1.5
                                      ${curretLanguage === "en"? 'bg-white':''} 
                                      `}>
                                      <div className=''>
                                        <img src={englishLogo} />
                                      </div>
                                      {t("header.menue_text.english")}
                                    </li>
                                    <li onClick={ ()=> languageChage ('kh') } 
                                      className={`
                                      flex flex-row items-center gap-2 justify-start cursor-pointer
                                      px-2
                                      w-full
                                      py-1.5
                                      ${curretLanguage === "kh"? 'bg-white':''

                                      }
                                      `}>
                                      <div className=''>
                                        <img src={KhmerFlag} />
                                      </div>
                                      {t("header.menue_text.khmer")}
                                    </li>
                                  </ul>
                                }
                            </div>
                            <div className="tp-toggle-bar d-lg-none" ref={menuRef} onClick={handleModleMenue}>
                                <i className="fas fa-bars px-2 bg-blue-600 py-2 ml-2 text-white" ></i>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
              <div className="tp-offcanvas-area d-lg-none">
              <div className={`tpoffcanvas ${modleMenu? 'opened':''}`} style={{backgroundImage: `url(${require("../../assets/img/menue_icon/slider-shape-3-1.png")})`}}>
                <div className="tpoffcanvas__close-btn mb-4" ref={menuRef} onClick={handleModleMenue}>
                    <button className="close-btn" ><i className="fal fa-times"></i></button>
                </div>
                <div className="tpoffcanvas__logo">
                    <a href="index.html">
                      <img src="assets/img/logo/logo.png" alt=""/>
                    </a>
                </div>
                <div className="tpoffcanvas-social">
                <div className="tpcanvas-wrapper" ref={menuRef}>
                    <div className="mobile-menu mean-container">
                      <div>
                        <div className='mean-bar'>
                          <nav className='mean-nav'>
                            <ul>
                              <li className='border-b-2'>
                                <Link to={'/'}>{t("header.menue_text.home")}</Link>
                              </li>
                              <li className='border-b-2'>
                                <Link to={'/words'}>{t("header.menue_text.words")}</Link>
                              </li>
                              <li className='border-b-2'>
                                <Link to={'/about us'}>{t("header.menue_text.about_us")}</Link>
                              </li>
                              <li className='border-b-2'>
                                <Link to={'/question'}>{t("header.menue_text.faqs")}</Link>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
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
          <AllRoutes />​
      </AuthProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;