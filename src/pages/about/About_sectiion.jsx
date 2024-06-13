export const AboutSection = ({t}) =>  {
    return (
        <div className="tpabout__area pt-130 pb-100">
        <div className="container">
           <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                 <div className="tpabout__thumb2">
                    <img src={require("../../assets/img/about/about-2-1.png")} alt=""/>
                 </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                 <div className="tpabout__section-title-box">
                    <h4 className="tp-section-subtitle">About us</h4>
                    <h3 className="tp-section-title pb-20">{t("aboutPage.change_the_way_but_life_insurance")}</h3>
                    <p className="text-black">{t("aboutPage.change_the_way_content")}</p>
                 </div>
              </div>
           </div>
        </div>
     </div>
    )
}