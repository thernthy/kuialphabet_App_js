
import { Supporters } from "../../db/supporter_logo"
import { Buttonbg } from "../../template/button"
import commentShapeTwo from '../../assets/img/slider/03_Shape.png';
import Components from "../comment"
import { useTranslation } from "react-i18next";
const Footer = () => {
    const { t } = useTranslation("global");
    return (
        <footer>
            {/* <Components /> */}
           <div className="tp-footer-area pt-0 black-bg p-relative">
           <div className="tp-service-shape-2">
           </div>
            <div className="container pt-20">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="tpfooter d-flex justify-content-between align-items-center">
                        <div className="tpfooter__logo flex flex-row  items-start gap-2">
                            <a href="/">
                                <img src={Supporters.Company} alt={Supporters.Company} className="w-12 sm:w-auto h-12 rounded-full bg-white"/>
                            </a> 
                            <div>
                                <h6 className="text-white">KUI Alphabeted</h6>
                                <p>Website</p>
                            </div>
                        </div>
                        <div className="tpfooter__social">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            {/* <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-behance"></i></a> */}
                            <a href="#"><i className="fab fa-youtube"></i></a>
                            {/* <a href="#"><i className="fab fa-linkedin"></i></a> */}
                        </div>
                        </div>
                    </div>
                </div>
                <div className="footer-widget-space">
                    <div className="row">
                        <div className="col-lg-2 col-md-4">
                        <div className="tp-footer-widget mb-30">
                            <div className="tp-footer-widget__title">
                                <h4 className="tp-footer-title">{t("Footer.OUR_ORGANIZATION")}</h4>
                            </div>
                            <div className="tp-footer-widget__list">
                                <ul>
                                    <li><a href="/">{t("Footer.about_organization")}</a></li>
                                    <li><a href="#">{t("Footer.about_kuipedia")}</a></li>
                                </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-4">
                        <div className="tp-footer-widget footer-space-2 mb-30">
                            <div className="tp-footer-widget__title">
                                <h4 className="tp-footer-title">{t("Footer.Get_KUI_Dictionary_App")}</h4>
                            </div>
                            <div className="tp-footer-widget__list">                             
                                <ul>
                                    <li>
                                     <a href="https://apps.apple.com/us/app/kui-dictionary/id6503658958">
                                      <img src={require("../../assets/img/footer/app_store.png")} className=" w-48 sm:w-auto" />
                                     </a>
                                    </li>
                                    <li>
                                     <a href="https://play.google.com/store/apps/details?id=com.alphabet.kouy.alphabet_kouy">
                                      <img src={require("../../assets/img/footer/play_store.png")} className="w-48 sm:w-auto" />
                                     </a>
                                    </li>
                                    {/* <li><a href="#">Home Insurance</a></li> */}
                                </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-8 col-md-4">
                        <div className="tp-footer-widget footer-space-3 mb-30">
                            <div className="tp-footer-widget__title">
                                <h4 className="tp-footer-title">Contact Info</h4>
                            </div>
                            <div className="tp-footer-widget__list">                            
                                <ul className="w-full">
                                    <li><a href="#">{t("Footer.location")}: Phumasia, Achar Leak Commune, Krong Stueng Sean, Kampong Thom</a></li>
                                    <li><a href="tel:123 456">{t("Footer.phone")}: +855 123 456</a></li>
                                    <li><a href="mailto:kuialphabeted@email.com">{t("Footer.email")}: kuialphabeted@email.com</a></li>

                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </footer>
    )
}

export default Footer