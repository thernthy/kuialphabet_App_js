import React, { useState } from 'react';
import MeetingImg from '../../assets/img/service/meetting.svg';

const ContactForm = ({ t }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        category: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        try {
            const response = await fetch('/contact/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setSuccess(true);
            setFormData({
                name: '',
                email: '',
                category: '',
                message: ''
            });
        } catch (error) {
            setError('There was a problem with your submission. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="tp-insurance-area pb-130">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="tp-insurance-section-box mb-50">
                            <h3 className="tp-section-subtitle">{t("homePage.cantactForm.email_us")}</h3>
                            <h3 className="tp-section-title">{t("homePage.cantactForm.contact")}<span> {t("homePage.cantactForm.our_team")}</span></h3>
                            <p>{t("homePage.cantactForm.if_you_have_any_concern_or_want_to_support_us")}</p>
                        </div>
                        <div className="tp-insurance-tab-section">
                            <img src={MeetingImg} className="w-100" alt='Meeting' />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="Home" role="tabpanel" aria-labelledby="nav-Home-tab" tabIndex="0">
                                <div className="tp-contact-form-wrapper">
                                    <div className="contact-section-title-box">
                                        <h4 className="tp-contact-sm-title">{t("homePage.cantactForm.email_us")}</h4>
                                    </div>
                                    <div className="contactform">
                                        <form onSubmit={handleOnSubmit}>
                                            <div className="contactform__input">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder={t("homePage.cantactForm.your_name")}
                                                />
                                            </div>
                                            <div className="contactform__input">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder={t("homePage.cantactForm.your_email")}
                                                />
                                            </div>
                                            <div className="contactform__input">
                                                <input
                                                    type="text"
                                                    name="category"
                                                    value={formData.category}
                                                    onChange={handleChange}
                                                    placeholder={t("homePage.category")}
                                                />
                                            </div>
                                            <div className="contactform__textarea">
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder={t("homePage.cantactForm.enter_message")}
                                                ></textarea>
                                            </div>
                                            <div className="contactform__button">
                                                <button type="submit" className="tp-btn-yellow-similar w-100">{t("homePage.cantactForm.submit")}</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/* Additional Tabs can be handled similarly */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
