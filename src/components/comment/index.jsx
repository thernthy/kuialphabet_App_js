import commentShapeOne from '../../assets/img/slider/02_Shape.png';

import CommendSlider from './Slider';
const Components = () => {
    return(
        <div className="tp-testimonial-area black-bg pt-200 pb-5 p-relative">
        <div className="tp-service-shape-1">
           <img src={commentShapeOne} alt=""/>
        </div>
        <div className="container">
           <div className="row">
              <div className="col-xl-12">
                 <div className="tp-testimonial-section-box text-center mb-5">
                    <h4 className="tp-section-subtitle">Our Client Feedback</h4>
                    <h3 className="tp-section-title text-white">Client’s give us many <br/> <span>reviews for us.</span></h3>
                 </div>
              </div>
           </div>
           <CommendSlider />
        </div>
     </div>
    )
}

export default Components