
import MeetingImg from '../../assets/img/service/meetting.svg'
const ConatactForm = () => {
    return(
        <div class="tp-insurance-area pb-130">
            <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-6 col-lg-6">
                    <div class="tp-insurance-section-box mb-50">
                        <h3 className="tp-section-subtitle">Email Us</h3>
                        <h3 class="tp-section-title">Contact<span>Our Team</span></h3>
                        <p>
                            If you have any concern or want 
                            to support us!
                        </p>
                    </div>
                    <div class="tp-inurance-tab-section">
                        <img src={MeetingImg} className="w-100" />
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="Home" role="tabpanel" aria-labelledby="nav-Home-tab"
                        tabindex="0">
                        <div class="tp-contact-form-wrapper">
                            <div class="contact-section-title-box">
                                <h4 class="tp-contact-sm-title">Home Insurance</h4>
                            </div>
                            <div class="contactform">
                                <form action="#">
                                    <div class="contactform__input">
                                    <input type="text" placeholder="Enter Name"/>
                                    </div>
                                    <div class="contactform__input">
                                    <input type="text" placeholder="Enter Mail"/>
                                    </div>
                                    <div class="contactform__select">
                                    <div class="tp-sp-icon">
                                        <select>
                                            <option>Property Type</option>
                                            <option>Home Insurance</option>
                                            <option>Car Insurance</option>
                                            <option>Health Insurance</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div class="contactform__textarea">
                                    <textarea placeholder="Enter Message"></textarea>
                                    </div>
                                    <div class="contactform__button">
                                    <button type="submit" class="tp-btn-yellow-similar w-100">Get a quote now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        </div>
                        <div class="tab-pane fade" id="Car" role="tabpanel" aria-labelledby="nav-Car-tab"
                        tabindex="0">
                        <div class="tp-contact-form-wrapper">
                            <div class="contact-section-title-box">
                                <h4 class="tp-contact-sm-title">Car Insurance</h4>
                            </div>
                            <div class="contactform">
                                <form action="#">
                                    <div class="contactform__input">
                                    <input type="text" placeholder="Enter Name"/>
                                    </div>
                                    <div class="contactform__input">
                                    <input type="text" placeholder="Enter Mail"/>
                                    </div>
                                    <div class="contactform__select">
                                    <div class="tp-sp-icon">
                                        <select>
                                            <option>Property Type</option>
                                            <option>Home Insurance</option>
                                            <option>Car Insurance</option>
                                            <option>Health Insurance</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div class="contactform__textarea">
                                    <textarea placeholder="Enter Message"></textarea>
                                    </div>
                                    <div class="contactform__button">
                                    <button type="submit" class="tp-btn-yellow-similar w-100">Get a quote now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        </div>
                        <div class="tab-pane fade" id="Health" role="tabpanel" aria-labelledby="nav-Health-tab"
                        tabindex="0">
                        <div class="tp-contact-form-wrapper">
                            <div class="contact-section-title-box">
                                <h4 class="tp-contact-sm-title">Health Insurance</h4>
                            </div>
                            <div class="contactform">
                                <form action="#">
                                    <div class="contactform__input">
                                    <input type="text" placeholder="Enter Name"/>
                                    </div>
                                    <div class="contactform__input">
                                    <input type="text" placeholder="Enter Mail"/>
                                    </div>
                                    <div class="contactform__select">
                                    <div class="tp-sp-icon">
                                        <select>
                                            <option>Property Type</option>
                                            <option>Home Insurance</option>
                                            <option>Car Insurance</option>
                                            <option>Health Insurance</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div class="contactform__textarea">
                                    <textarea placeholder="Enter Message"></textarea>
                                    </div>
                                    <div class="contactform__button">
                                    <button type="submit" class="tp-btn-yellow-similar w-100">Get a quote now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        </div>
                        <div class="tab-pane fade" id="Education" role="tabpanel" aria-labelledby="nav-Education-tab"
                        tabindex="0">
                        <div class="tp-contact-form-wrapper">
                            <div class="contact-section-title-box">
                                <h4 class="tp-contact-sm-title">Education Insurance</h4>
                            </div>
                            <div class="contactform">
                                <form action="#">
                                    <div class="contactform__input">
                                    <input type="text" placeholder="Enter Name" />
                                    </div>
                                    <div class="contactform__input">
                                    <input type="text" placeholder="Enter Mail" />
                                    </div>
                                    <div class="contactform__select">
                                    <div class="tp-sp-icon">
                                        <select>
                                            <option>Property Type</option>
                                            <option>Home Insurance</option>
                                            <option>Car Insurance</option>
                                            <option>Health Insurance</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div class="contactform__textarea">
                                    <textarea placeholder="Enter Message"></textarea>
                                    </div>
                                    <div class="contactform__button">
                                    <button type="submit" class="tp-btn-yellow-similar w-100">Get a quote now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}



export default ConatactForm;