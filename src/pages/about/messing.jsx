export const Messing = ({t}) => {
    return (
        <div className="tp-mission-area grey-bg pt-2 pb-120">
        <div>
           <div className="tp-mission-wrapper z-index-3">
              <div className="row">
                 <div className="col-xl-12">
                    <div className="tp-mission-tab-section">
                       <nav>
                          <div className="nav tp-mission-tab flex flex-row items-center justify-between flex-wrap sm:flex-nowrap" id="nav-tab" role="tablist">
                             <button className="nav-links active" id="nav-Mission-tab" data-bs-toggle="tab"
                                data-bs-target="#Mission" type="button" role="tab" aria-controls="nav-Mission-tab"
                                aria-selected="true"><span className="capitalize">{t("aboutPage.our_mission")}</span>
                             </button>
                             <button className="nav-links" id="nav-Vission-tab" data-bs-toggle="tab"
                                data-bs-target="#Vission" type="button" role="tab" aria-controls="nav-Vission-tab"
                                aria-selected="true"><span className="capitalize">{t("aboutPage.our_vision")}</span>
                             </button>
                             <button className="nav-links" id="nav-History-tab" data-bs-toggle="tab"
                                data-bs-target="#History" type="button" role="tab" aria-controls="nav-History-tab"
                                aria-selected="true"><span className="capitalize">{t("aboutPage.core_value")}</span>
                             </button>
                             <button className="nav-links" id="nav-Goal-tab" data-bs-toggle="tab" data-bs-target="#Goal"
                                type="button" role="tab" aria-controls="nav-Goal-tab" aria-selected="true"><span className="capitalize">
                                 {t("aboutPage.our_goal")}</span>
                             </button>
                             <button className="nav-links" id="nav-we_work_with-tab" data-bs-toggle="tab" data-bs-target="#we_work_with"
                                type="button" role="tab" aria-controls="nav-we_work_with-tab" aria-selected="true"><span className="capitalize">
                               We Work With</span>
                             </button>
                             <button className="nav-links" id="nav-our_unique-tab" data-bs-toggle="tab" data-bs-target="#our_unique"
                                type="button" role="tab" aria-controls="nav-our_unique-tab" aria-selected="true"><span className="capitalize">
                               Our Unique</span>
                             </button>
                          </div>
                       </nav>
                    </div>
                 </div>
              </div>
              <div className="tab-content pt-5" id="nav-tabContent">
                 <div className="tab-pane fade show active" id="Mission" role="tabpanel" aria-labelledby="nav-Mission-tab"
                    tabindex="0">
                    <div className="row align-items-center">
                       <div className="col-xl-6 col-lg-6">
                          <div className="tpmission">
                             <div className="tpmission__info">
                                <h4 className="tp-mission-title">Mission</h4>
                                <p>
                                 Organize communities and develop systems of indigenous Kui communities 
                                 to create Kui ethnic pride, protect community interests and be self-sufficient.
                                </p>
                             </div>
                             {/* <div className="tpmission__list">
                                <ul>
                                   <li><i className="fal fa-check"></i>We are Award Winning Company</li>
                                   <li><i className="fal fa-check"></i>Always Work With Energetic Team</li>
                                </ul>
                             </div> */}
                          </div>
                       </div>
                       <div className="col-xl-6 col-lg-6">
                          <div className="tpmission__thumb">
                             <img src={require("./img/categories (4).jpg")} alt=""/>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="tab-pane fade " id="Vission" role="tabpanel" aria-labelledby="nav-Vission-tab"
                    tabindex="0">
                    <div className="row align-items-center">
                       <div className="col-xl-6">
                          <div className="tpmission">
                             <div className="tpmission__info">
                                <h4 className="tp-mission-title">Vision </h4>
                                <p>
                                Indigenous Communities are strong solidarity 
                                and have the right to self-determination for sustainable development and conservation.
                                </p>
                             </div>
                             {/* <div className="tpmission__list">
                                <ul>
                                   <li><i className="fal fa-check"></i>We are Award Winning Company</li>
                                   <li><i className="fal fa-check"></i>Always Work With Energetic Team</li>
                                </ul>
                             </div> */}
                          </div>
                       </div>
                       <div className="col-xl-6">
                          <div className="tpmission__thumb">
                             <img src={require("./img/categories (5).jpg")} alt=""/>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="tab-pane fade " id="History" role="tabpanel" aria-labelledby="nav-History-tab"
                    tabindex="0">
                    <div className="row align-items-center">
                       <div className="col-xl-6">
                          <div className="tpmission">
                             <div className="tpmission__info">
                                <h4 className="tp-mission-title">Core Value</h4>
                                <div className="tpmission__list">
                                 <ul>
                                    <li><i className="fal fa-check"></i>mote the knowledge and culture of the Kui indigenous people</li>
                                    <li><i className="fal fa-check"></i>Common interests of the community</li>
                                    <li><i className="fal fa-check"></i>Initiatives and teamwork</li>
                                    <li><i className="fal fa-check"></i>Focus on indigenous peoples and the vulnerable</li>
                                 </ul>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="col-xl-6">
                          <div className="tpmission__thumb">
                             <img src={require("./img/categories (1).JPG")} alt=""/>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="tab-pane fade " id="Goal" role="tabpanel" aria-labelledby="nav-Goal-tab" tabindex="0">
                    <div className="row align-items-center">
                       <div className="col-xl-6">
                          <div className="tpmission">
                             <div className="tpmission__info">
                                <h4 className="tp-mission-title">Goal</h4>
                                <p>
                                 Indigenous Kui men, women, elders, youths, 
                                 and children have solidarity and participate in land and natural resources management, 
                                 conservation of identity and culture, and socio/economic development.
                                </p>
                             </div>
                          </div>
                       </div>
                       <div className="col-xl-6">
                          <div className="tpmission__thumb">
                             <img src={require("./img/kuiMeeting.jpg")} alt=""/>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="tab-pane fade " id="we_work_with" role="tabpanel" aria-labelledby="nav-we_work_with-tab" tabindex="0">
                    <div className="row align-items-center">
                       <div className="col-xl-6">
                          <div className="tpmission">
                             <div className="tpmission__info">
                                <h4 className="tp-mission-title">We work with</h4>
                                <p>
                                 Our strategies and programs relevant for work with diverse groups, both directly and in partnerships, including: 
                                </p>
                             </div>
                             <div className="tpmission__list">
                                <ul>
                                   <li><i className="fal fa-check"></i>Indigenous Peoples Communities (IP commuity);</li>
                                   <li><i className="fal fa-check"></i>Sub-national administrations and institutions and departments of the government</li>
                                   <li><i className="fal fa-check"></i>Civil society organizations (CSOs);</li>
                                   <li><i className="fal fa-check"></i>Indigeous Peoples Organizations;</li>
                                   <li><i className="fal fa-check"></i>Private sectors.</li>
                                   <li><i className="fal fa-check"></i>Development Partners (includes UN agencies and embassies)</li>
                                </ul>
                             </div>
                          </div>
                       </div>
                       <div className="col-xl-6">
                          <div className="tpmission__thumb">
                             <img src={require("./img/kuiMeeting.jpg")} alt=""/>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="tab-pane fade "  id="our_unique" role="tabpanel" aria-labelledby="nav-our_unique-tab" tabindex="0">
                    <div className="row align-items-center">
                       <div className="col-xl-6">
                          <div className="tpmission">
                             <div className="tpmission__info">
                                <h4 className="tp-mission-title">Our Unique</h4>
                              <div className="tpmission__list">
                                 <ul>
                                    <li><i className="fal fa-check"></i>The only indigenous Kui led-organization in Cambodia</li>
                                    <li><i className="fal fa-check"></i>Focus on indigenous Kui</li>
                                    <li><i className="fal fa-check"></i>Indigenous Kui for indigenous Kui</li>
                                    <li><i className="fal fa-check"></i>Understanding about indigenous Kui</li>
                                    <li><i className="fal fa-check"></i>Experiences work with indigenous Kui</li>
                                    <li><i className="fal fa-check"></i>Always Work With Energetic Team</li>
                                 </ul>
                              </div>
                             </div>
                          </div>
                       </div>
                       <div className="col-xl-6">
                          <div className="tpmission__thumb">
                             <img src={require("./img/kuiMeeting.jpg")} alt=""/>
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