export const Messing = () => {
    return (
        <div className="tp-mission-area grey-bg pt-120 pb-120">
        <div className="container">
           <div className="tp-mission-wrapper z-index-3">
              <div className="row">
                 <div className="col-xl-10">
                    <div className="tp-mission-tab-section">
                       <nav>
                          <div className="nav tp-mission-tab " id="nav-tab" role="tablist">
                             <button className="nav-links active" id="nav-Mission-tab" data-bs-toggle="tab"
                                data-bs-target="#Mission" type="button" role="tab" aria-controls="nav-Mission-tab"
                                aria-selected="true"><span>Our Mission</span>
                             </button>
                             <button className="nav-links" id="nav-Vission-tab" data-bs-toggle="tab"
                                data-bs-target="#Vission" type="button" role="tab" aria-controls="nav-Vission-tab"
                                aria-selected="true"><span>Our
                                   Vision</span>
                             </button>
                             <button className="nav-links" id="nav-History-tab" data-bs-toggle="tab"
                                data-bs-target="#History" type="button" role="tab" aria-controls="nav-History-tab"
                                aria-selected="true"><span>Our
                                   History</span>
                             </button>
                             <button className="nav-links" id="nav-Goal-tab" data-bs-toggle="tab" data-bs-target="#Goal"
                                type="button" role="tab" aria-controls="nav-Goal-tab" aria-selected="true"><span>Our
                                   Goal</span>
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
                                <h4 className="tp-mission-title">Creating a better future <br/> for your loved once</h4>
                                <p>Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo claritatem
                                   insitamconse quat.Exerci tation ullamcorper suscipit lobort</p>
                             </div>
                             <div className="tpmission__list">
                                <ul>
                                   <li><i className="fal fa-check"></i>We are Award Winning Company</li>
                                   <li><i className="fal fa-check"></i>Always Work With Energetic Team</li>
                                </ul>
                             </div>
                          </div>
                       </div>
                       <div className="col-xl-6 col-lg-6">
                          <div className="tpmission__thumb">
                             <img src={require("../../assets/img/mission/mission-1.jpg")} alt=""/>
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
                                <h4 className="tp-mission-title">It is a long established <br/> fact that a reader</h4>
                                <p>Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo claritatem
                                   insitamconse quat.Exerci tation ullamcorper suscipit lobort</p>
                             </div>
                             <div className="tpmission__list">
                                <ul>
                                   <li><i className="fal fa-check"></i>We are Award Winning Company</li>
                                   <li><i className="fal fa-check"></i>Always Work With Energetic Team</li>
                                </ul>
                             </div>
                          </div>
                       </div>
                       <div className="col-xl-6">
                          <div className="tpmission__thumb">
                             <img src={require("../../assets/img/mission/mission-2.jpg")} alt=""/>
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
                                <h4 className="tp-mission-title">We provide the best insurance policy</h4>
                                <p>Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo claritatem
                                   insitamconse quat.Exerci tation ullamcorper suscipit lobort</p>
                             </div>
                             <div className="tpmission__list">
                                <ul>
                                   <li><i className="fal fa-check"></i>We are Award Winning Company</li>
                                   <li><i className="fal fa-check"></i>Always Work With Energetic Team</li>
                                </ul>
                             </div>
                          </div>
                       </div>
                       <div className="col-xl-6">
                          <div className="tpmission__thumb">
                             <img src={require("../../assets/img/mission/mission-3.jpg")} alt=""/>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="tab-pane fade " id="Goal" role="tabpanel" aria-labelledby="nav-Goal-tab" tabindex="0">
                    <div className="row align-items-center">
                       <div className="col-xl-6">
                          <div className="tpmission">
                             <div className="tpmission__info">
                                <h4 className="tp-mission-title">We inspire and help our customers</h4>
                                <p>Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo claritatem
                                   insitamconse quat.Exerci tation ullamcorper suscipit lobort</p>
                             </div>
                             <div className="tpmission__list">
                                <ul>
                                   <li><i className="fal fa-check"></i>We are Award Winning Company</li>
                                   <li><i className="fal fa-check"></i>Always Work With Energetic Team</li>
                                </ul>
                             </div>
                          </div>
                       </div>
                       <div className="col-xl-6">
                          <div className="tpmission__thumb">
                             <img src={require("../../assets/img/mission/mission-4.jpg")} alt=""/>
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