import { useTranslation } from 'react-i18next';
import { AboutSection } from './About_sectiion'
import { LearnSection } from './learn'
import { Messing } from './messing'
export const About = () => {
    const { t, i18n } = useTranslation("global");
    return (
        <>
            <section className="breadcrumb__area background-bg pt-180 pb-180 include-bg p-relative fix"
            style={{backgroundImage:`url(${require('../../assets/banner/faqs.png')})`}}>
                <div className="tp-breadcrmb-circle-one"></div>
                <div className="tp-breadcrmb-circle-two"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                        <div className="breadcrumb__wrapper z-index-6 d-flex justify-content-between align-items-center">
                            <div className="breadcrumb__content">
                                <h3 className="breadcrumb__title capitalize">{t("aboutPage.about_kui_alphabeted")}</h3>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <LearnSection t={t} />
            <AboutSection t={t} />
            <Messing t={t} />
        </>
    )
}