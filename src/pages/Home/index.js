
import Carousel from "../../components/Carousel";
import { Supporters } from "../../db/supporter_logo";
import Meetting from '../../assets/img/service/meetting.svg'
import SwapperJas from "../../components/swapperComponents/testingWraper";
import ServiceComponents from "../../components/service";
import GooGleMape from "../../components/mape/mape";
import ConatactForm from "../../components/contacForm/contact";
import { GalleryImg } from "../../db/gallary";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Home = () => {
    const { t, i18n } = useTranslation("global");
    return (
        <main>
            <Carousel  /> 
            {/* supporter section start */}
            <div className="album py-5 bg-body-tertiary">
                <div className="px-3">
                    <ul className="flex flex-row items-center justify-around p-0">
                        <li className="text-center">
                            <h4 className=" capitalize">{t('homePage.sponsor')}</h4>
                            <ul className="flex flex-row items-center justify-around p-0">
                                <li>
                                    <img src={Supporters.Voice} alt="" />
                                </li>
                            </ul>
                        </li>
                        <li className="text-center">
                            <h4 className="capitalize">{t("homePage.supported")}</h4>
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
                            <h4 className="capitalize">{t("homePage.deploy project")}</h4>
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
                                <h4 className="tp-section-subtitle">{t('homePage.about')} {t('homePage.us')}</h4>
                                <h3 className="tp-section-title pb-20 capitalize">{t('homePage.change the way but life insurance')}
                                    {/* <span>
                                    <br/> life Insurance</span> */}
                                </h3>
                                <p className="paragraph-one">Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo
                                    claritatem insitamconse
                                    quat.Exerci tation ullamcorper suscipit loborti excommodo habent claritatem insitamconse
                                    quat.Exerci tationlobortis nisl aliquip ex ea commodo
                                    n ullamcorper suscipit loborti excommodo</p>
                                <p>Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo claritatem insitamconse
                                    quat.Exerci tation ullamcorper suscipit loborti </p>
                            </div>
                            <div className="tp-about-button-box d-flex align-items-center mb-6">
                                <Link className="tp-btn tp-ab-button-one caption-top" to={"/about us"}>{t('homePage.about')} {t('homePage.us')}</Link>
                                <Link className="tp-ab-play-button popup-video" to={"https://www.youtube.com/watch?v=PfPP5ac_aQo"}><i class="fas fa-play"></i></Link>
                            </div>
                        </div>
                        </div>
            </div>
            {/* about section end */}
            {/* category section start */}
                <ServiceComponents t={t} />
            {/* category section end */}
            {/* category slider section start */}

            <div className="tp-case-area pt-130 pb-130">
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <div className="tp-case-section-box text-center mb-20">
                        <h4 className="tp-section-subtitle">{t('homePage.gallery')}</h4>
                        <h3 className="tp-section-title">{t("homePage.our")}<span>{t('homePage.gallery')}</span></h3>
                    </div>
                </div>
                </div>
                <div className="tp-case-slider-box">
                    <SwapperJas img_Data={GalleryImg}/>
                </div>
            </div>
            {/* google map section start */}
             <GooGleMape t={t} />
            {/* google map section  ending */}
            {/* contact form section start */}
             <ConatactForm />
            {/* contact form section end */}
        </div>
        </main>
    )
}

export default Home