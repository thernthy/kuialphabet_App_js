import CompanyLogo from "../../assets/img/logo/company_logo.svg"
export const AboutContent  = ({t}) => {
 return (
    <div className="tp-about-area pt-130 pb-130">
        <div className="container">
        <div className="row">
            <div className="col-xl-6 col-lg-6">
                <div className="tp-about-me-section-box">
                    <h3 className="tp-section-title">{t("aboutPage.lorem")}</h3>
                    <div className="tp-ab-paragraph">
                    <p className="paragraph-space-1">{t("aboutPage.lorem_explain")}</p>
                    </div>
                </div>
                {/* <div className="tp-about-list">
                    <ul>
                        <li><i className="fal fa-check"></i>{t("aboutPage.list.we_are_award_winning_company")}</li>
                        <li><i className="fal fa-check"></i>{t("aboutPage.list.refreshing_to_get_such_a_personal_touch")}</li>
                        <li><i className="fal fa-check"></i>{t("aboutPage.list.easy_and_first_process")}</li>
                    </ul>
                </div> */}
            </div>
            <div className="col-xl-6 col-lg-6">
                <div className="about-me-img p-relative">
                    <div className="ab-lg-img">
                    <img src={require('./img/kuiMeeting.jpg')} alt="" />
                    </div>
                    <div className="about-sm-img">
                    <img src={CompanyLogo} alt="" className="w-40"/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
 )
}
