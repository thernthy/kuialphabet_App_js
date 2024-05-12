import { AboutSection } from './About_sectiion'
import { LearnSection } from './learn'
import { Messing } from './messing'

export const About = () => {
    return (
        <>
            <section className="breadcrumb__area background-bg pt-180 pb-180 include-bg p-relative fix"
            style={{backgroundImage:`url(${require('../../assets/img/breadcurmb/breadcurmb.jpg')})`}}>
                <div className="tp-breadcrmb-circle-one"></div>
                <div className="tp-breadcrmb-circle-two"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                        <div className="breadcrumb__wrapper z-index-6 d-flex justify-content-between align-items-center">
                            <div className="breadcrumb__content">
                                <h3 className="breadcrumb__title">About KUI Alphabeted</h3>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <LearnSection />
            <AboutSection />
            <Messing />
        </>
    )
}