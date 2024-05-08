
import { Supporters } from "../../db/supporter_logo"
import { Buttonbg } from "../../template/button"
import commentShapeTwo from '../../assets/img/slider/03_Shape.png';
import Components from "../comment"
const Footer = () => {
    return (
        <footer>
            <Components />
            <div className="tp-footer-area pt-0 black-bg p-relative">
            <div className="tp-service-shape-2">
            </div>
            {/* <div className="tp-footer-shape-1">
                <img src={commentShapeTwo} alt=""/>
                <img src={require("../../assets/img/slider/06_Shape.png")} alt="" />
            </div> */}
            <div className="container pt-20">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="tpfooter d-flex justify-content-between align-items-center">
                        <div className="tpfooter__logo">
                            <a href="index.html">
                                <img src={Supporters.Company} alt={Supporters.Company} className="h-20 rounded-full bg-white"/>
                            </a>
                        </div>
                        <div className="tpfooter__social">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-behance"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="footer-widget-space">
                    <div className="row">
                        <div className="col-lg-2 col-md-4">
                        <div className="tp-footer-widget mb-30">
                            <div className="tp-footer-widget__title">
                                <h4 className="tp-footer-title">Our Organization</h4>
                            </div>
                            <div className="tp-footer-widget__list">
                                <ul>
                                    <li><a href="#">About Organization</a></li>
                                    <li><a href="blog-details.html">About Kuipedia</a></li>
                                </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-4">
                        <div className="tp-footer-widget footer-space-2 mb-30">
                            <div className="tp-footer-widget__title">
                                <h4 className="tp-footer-title">Our App</h4>
                            </div>
                            <div className="tp-footer-widget__list">                             
                                <ul>
                                    <li><a href="#">KUI Dictionary</a></li>
                                    <li><a href="#">Home Insurance</a></li>
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
                                    <li><a href="#">Location: Phumasia, Achar Leak Commune, Krong Stueng Sean, Kampong Thom</a></li>
                                    <li><a href="tel:123 456">Phone: +855 123 456</a></li>
                                    <li><a href="mailto:kuialphabeted@email.com">Email: kuialphabeted@email.com</a></li>

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