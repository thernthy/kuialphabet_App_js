import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';

const  SwapperJas = ({img_Data}) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      pagination={{ clickable: true }}
      loop={true}
      slidesPerView={3}
      autoplay={{
         delay: 5000, // 5000ms = 5s
         disableOnInteraction: false,
       }}
    >
      {img_Data?.map((img, index) => {
         return(
         <SwiperSlide>
            <div className={`tpcaseitem mix-blend-mode rounded-xl  ${(index + 1) % 2 === 0? 'mt-30' : 'fix'}`}>
                  <div className="fix">
                        <img src={img.img} alt=""/>{/*defual Class tpcaseitem__thumb  */}
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