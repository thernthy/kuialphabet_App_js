
import MeetingImg from '../../assets/img/service/meetting.svg'
const ConatactForm = ({t}) => {
    const handleOnSubmit = (e) => {
      alert("Under developing!")
    }
    return(
        <div className="tp-insurance-area pb-130">
            <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6">
                    <div className="tp-insurance-section-box mb-50">
                        <h3 className="tp-section-subtitle">{t("homePage.cantactForm.email_us")}</h3>
                        <h3 className="tp-section-title">{t("homePage.cantactForm.contact")}<span> {t("homePage.cantactForm.our_team")}</span></h3>
                        <p>
                            
                            {t("homePage.cantactForm.If you have any concern or want to support us!")}
                        </p>
                    </div>
                    <div className="tp-inurance-tab-section">
                        <img src={MeetingImg} className="w-100" alt='' />
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="Home" role="tabpanel" aria-labelledby="nav-Home-tab"
                        tabindex="0">
                        <div className="tp-contact-form-wrapper">
                            <div className="contact-section-title-box">
                                <h4 className="tp-contact-sm-title">{t("homePage.cantactForm.email_us")}</h4>
                            </div>
                            <div className="contactform">
                                <form  onSubmit={handleOnSubmit}>
                                    <div className="contactform__input">
                                    <input type="text" placeholder={t("homePage.cantactForm.your_name")}/>
                                    </div>
                                    <div className="contactform__input">
                                    <input type="text" placeholder={t("homePage.cantactForm.your_email")}/>
                                    </div>
                                    <div className="contactform__input">
                                    <input type="text" placeholder={t("homePage.category")}/>
                                    </div>
                              
                                    <div className="contactform__textarea">
                                    <textarea placeholder={t("homePage.cantactForm.enter_message")}></textarea>
                                    </div>
                                    <div className="contactform__button">
                                    <button type="submit" className="tp-btn-yellow-similar w-100">{t("homePage.cantactForm.submit")}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        </div>
                        <div className="tab-pane fade" id="Car" role="tabpanel" aria-labelledby="nav-Car-tab"
                        tabindex="0">
                        <div className="tp-contact-form-wrapper">
                            <div className="contact-section-title-box">
                                <h4 className="tp-contact-sm-title">Car Insurance</h4>
                            </div>
                            <div className="contactform">
                                <form action="#">
                                    <div className="contactform__input">
                                    <input type="text" placeholder="Enter Name"/>
                                    </div>
                                    <div className="contactform__input">
                                    <input type="text" placeholder="Enter Mail"/>
                                    </div>
                                    <div className="contactform__select">
                                    <div className="tp-sp-icon">
                                        <select>
                                            <option>Property Type</option>
                                            <option>Home Insurance</option>
                                            <option>Car Insurance</option>
                                            <option>Health Insurance</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div className="contactform__textarea">
                                    <textarea placeholder="Enter Message"></textarea>
                                    </div>
                                    <div className="contactform__button">
                                    <button type="submit" className="tp-btn-yellow-similar w-100">Get a quote now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        </div>
                        <div className="tab-pane fade" id="Health" role="tabpanel" aria-labelledby="nav-Health-tab"
                        tabindex="0">
                        <div className="tp-contact-form-wrapper">
                            <div className="contact-section-title-box">
                                <h4 className="tp-contact-sm-title">Health Insurance</h4>
                            </div>
                            <div className="contactform">
                                <form action="#">
                                    <div className="contactform__input">
                                    <input type="text" placeholder="Enter Name"/>
                                    </div>
                                    <div className="contactform__input">
                                    <input type="text" placeholder="Enter Mail"/>
                                    </div>
                                    <div className="contactform__select">
                                    <div className="tp-sp-icon">
                                        <select>
                                            <option>Property Type</option>
                                            <option>Home Insurance</option>
                                            <option>Car Insurance</option>
                                            <option>Health Insurance</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div className="contactform__textarea">
                                    <textarea placeholder="Enter Message"></textarea>
                                    </div>
                                    <div className="contactform__button">
                                    <button type="submit" className="tp-btn-yellow-similar w-100">Get a quote now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        </div>
                        <div className="tab-pane fade" id="Education" role="tabpanel" aria-labelledby="nav-Education-tab"
                        tabindex="0">
                        <div className="tp-contact-form-wrapper">
                            <div className="contact-section-title-box">
                                <h4 className="tp-contact-sm-title">Education Insurance</h4>
                            </div>
                            <div className="contactform">
                                <form action="#">
                                    <div className="contactform__input">
                                    <input type="text" placeholder="Enter Name" />
                                    </div>
                                    <div className="contactform__input">
                                    <input type="text" placeholder="Enter Mail" />
                                    </div>
                                    <div className="contactform__select">
                                    <div className="tp-sp-icon">
                                        <select>
                                            <option>Property Type</option>
                                            <option>Home Insurance</option>
                                            <option>Car Insurance</option>
                                            <option>Health Insurance</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div className="contactform__textarea">
                                    <textarea placeholder="Enter Message"></textarea>
                                    </div>
                                    <div className="contactform__button">
                                    <button type="submit" className="tp-btn-yellow-similar w-100">Get a quote now</button>
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