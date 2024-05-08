import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const  SwapperJas = ({img_Data}) => {
  return (
    <Swiper
      spaceBetween={50}
      loop={true}
      slidesPerView={3}

    >
      {img_Data?.map((img, index) => {
         return(
         <SwiperSlide>
            <div className={`tpcaseitem mix-blend-mode rounded-xl  ${(index + 1) % 2 === 0? 'mt-30' : 'fix'}`}>
                  <div className="fix">
                        <img src={img.img} alt=""/>{/*defual Class tpcaseitem__thumb  */}
                  </div>
                  <div className="tpcaseitem__content">
                     <div className="tpcase-info p-relative">
                        <h4 className="tp-case-title">
                           <a href="portfolio-details.html">{img.title}</a> </h4>
                        <div className="tp-case-icon">
                           <a href="portfolio-details.html"><i className="fal fa-arrow-right"></i></a>
                        </div>
                     </div>
                  </div>
            </div>
         </SwiperSlide>
         )
      })
   }

    </Swiper>
  );
};

export default SwapperJas