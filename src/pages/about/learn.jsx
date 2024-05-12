import { Link } from "react-router-dom"
import { AboutContent } from "./about_content"

export const LearnSection  = () => {
    return (
        <>
            <AboutContent />
            <div className="tp-counter-area  tp-counter-bg" data-background="assets/img/fun-fact/counter-shape-bg.png">
                <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="counter-item text-center counter-color-one mb-30">
                            <Link to={'/'}>
                            <i className="fas fa-house-damage"></i>
                            </Link>
                            <h3><span className="counter">26</span>K</h3>
                            <span>Gave insurances</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="counter-item text-center counter-color-two mb-30">
                            <Link to={'/'}>
                            <i className="fas fa-users"></i>
                            </Link>
                            <h3><span className="counter">34</span>K</h3>
                            <span>Professional team</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="counter-item text-center counter-color-three mb-30">
                            <Link to={'/'}>
                            <i className="fas fa-users-crown"></i>
                            </Link>
                            <h3><span className="counter">54</span>K</h3>
                            <span>Satisfied customers</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="counter-item text-center counter-color-four mb-30">
                            <Link to={'/'}>
                            <i className="fas fa-heart-rate"></i>
                            </Link>
                            <h3><span className="counter">100</span>%</h3>
                            <span>Our success rate</span>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}