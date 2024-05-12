export const AboutContent  = () => {
 return (
    <div className="tp-about-area pt-130 pb-130">
        <div className="container">
        <div className="row">
            <div className="col-xl-6 col-lg-6">
                <div className="tp-about-me-section-box">
                    <h3 className="tp-section-title">Lorem</h3>
                    <div className="tp-ab-paragraph">
                    <p className="paragraph-space-1">Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo claritatem insitamconse quat.Exerci tation ullamcorper suscipit lobort Exerci tation ullamcorper suscipit lobortis nisl aliquip</p>
                    <p>ex ea commodo claritatem insitamconse quat.Exerci tation ullamcorper suscipit lobort Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo claritatem insitamconse quat.Exerci tation ullamcorper suscipit lobort</p>
                    </div>
                </div>
                <div className="tp-about-list">
                    <ul>
                    <li><i className="fal fa-check"></i> We are Award Winning Company</li>
                    <li><i className="fal fa-check"></i> Refreshing to get such a personal touch. </li>
                    <li><i className="fal fa-check"></i> Easy and first process</li>
                    <li><i className="fal fa-check"></i> Save your money</li>
                    </ul>
                </div>
            </div>
            <div className="col-xl-6 col-lg-6">
                <div className="about-me-img p-relative">
                    <div className="ab-lg-img">
                    <img src={require('../../assets/img/about/ab-me-1.jpg')} alt="" />
                    </div>
                    <div className="about-sm-img">
                    <img src={require('../../assets/img/about/ab-me-sm-1.jpg')} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
 )
}
