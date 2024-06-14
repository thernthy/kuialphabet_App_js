import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons/faVolumeHigh';
import { faBook, faPlay } from '@fortawesome/free-solid-svg-icons';
import { PrimeryColor } from '../CategoryCart';
import {useHookWordSlider} from '../../hooks/WordSlider'
import { useTranslation } from 'react-i18next';
import { useCategory } from '../../hooks/hookCategories';
export default function WordsPopUpSlider({HandleExplanation, setIsExplanetion}) {
const { t, i18n } = useTranslation("global");
const { data: categoryData } = useCategory();
  const {        
    data, 
    isLoading, 
    error, 
    refetch, 
    limit,
    setLimit} = useHookWordSlider();

    const renderSliderPoster = ()  => {
        if(error){
            return <h2 className='text-red-400'>Error</h2>
        }
        if(data && data.length === 0){
            return <h2 className='text-red-500'>Word poster not found!</h2>
        }

        return data?.map((data, index)=> {
            const categorySelected = JSON.parse(data.category_id)
            const categories = Array.isArray(categorySelected)
            ? categorySelected.map(id => parseInt(id))
            : [];
                return (
                    <SwiperSlide className='py-2' key={index + 1}>
                    <div className="flex  flex-col lg:flex-row items-center lg:items-start  py-3 px-3 rounded-md w-full justify-start gap-3 shadow-md mb-5">
                        <img src={`${process.env.REACT_APP_BASED_URL}storage/${data?.cover_photo}`} className='w-40'/>
                        <div className='pt-2 w-full'>
                            <div className='flex flex-row items-center justify-start gap-2 columns-1'>
                                <FontAwesomeIcon icon={faVolumeHigh} className='text-sm' style={{color:'#106FBB'}} />
                                <h4 className='text-sm truncate ' style={{color:'#106FBB'}}>កួយន្ទ័រ {data?.kui_1} /{data?.english_pronunciation}/</h4>
                            </div>
                            <div className='flex flex-row items-center justify-start gap-2 '>
                                <FontAwesomeIcon icon={faVolumeHigh} className='text-sm' style={{color:'#106FBB'}} />
                                <h4 className='text-sm' style={{color:'#106FBB'}}>ភាសាកួយអ្ទ្រើ {data?.kui_2} /{data?.english_pronunciation}/</h4>
                            </div>
                            <div className='flex flex-row items-start justify-start gap-1 '>
                                <div>
                                    <h4 className='text-sm' style={{color:'#11BA99'}}>{data?.english_word}</h4>
                                    <h4 className='text-sm' style={{color:'#CE861B'}}>{data?.khmer_word}</h4>
                                </div>
                            </div>
                            <div className='flex flex-row items-center justify-end gap-1 flex-wrap lg:flex-nowrap'>
                                <button className='py-1 pr-1 pl-2
                                        rounded-full bg-green-500 capitalize text-white flex flex-row items-center justify-start gap-2
                                        ' onClick={()=>HandleExplanation(data.id)} style={{fontSize:"16px"}}>
                                        <span>
                                            <FontAwesomeIcon icon={faBook} />
                                        </span>
                                        {t("homePage.explanation")}
                                </button>
                                <button className='py-1 pr-1 pl-2  capitalize
                                        rounded-full bg-red-400 text-white flex flex-row items-center justify-start gap-2
                                        ' style={{fontSize:"16px"}}>
                                        <span>
                                            <FontAwesomeIcon icon={faPlay} />
                                        </span>
                                        Video
                                </button>
                                
                            </div>
                            <div className='flex flex-row items-start justify-start gap-2 flex-wrap lg:flex-nowrap '>
                                <div className='text-center'>
                                    <span className='font-bold text-sm'>commend used</span>
                                    <div className="flex flex-row items-center justify-start gap-1">
                                        {data?.comment_use === 25 &&
                                         <span className=" bg-red-400 px-2 rounded-full py-1"></span>
                                        }
                                        {data?.comment_use === 50 &&
                                            <>
                                                <span className="px-2 rounded-full py-1" style={{ backgroundColor: '#106FBB' }}></span>
                                                <span className="px-2 rounded-full py-1" style={{ backgroundColor: '#106FBB' }}></span>
                                            </>
                                        }
                                        {data?.comment_use === 75&&
                                            <>
                                                <span className="px-2 rounded-full py-1" style={{ backgroundColor: '#106FBB' }}></span>
                                                <span className="px-2 rounded-full py-1" style={{ backgroundColor: '#106FBB' }}></span>
                                                <span className="px-2 rounded-full py-1" style={{ backgroundColor: '#106FBB' }}></span>
                                            </>
                                        }
                                        {data?.comment_use === 100&&
                                            <>
                                                <span className="px-2 rounded-full py-1" style={{ backgroundColor: '#106FBB' }}></span>
                                                <span className="px-2 rounded-full py-1" style={{ backgroundColor: '#106FBB' }}></span>
                                                <span className="px-2 rounded-full py-1" style={{ backgroundColor: '#106FBB' }}></span>
                                            </>
                                        }
                                        {data?.comment_use === null ||  data.comment_use === 0 &&
                                            <span className=" bg-red-400 px-2 rounded-full py-1"></span>
                                        }
                                        
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <span className=' font-bold text-sm'>categories</span>
                                    <div className='flex flex-row items-center justify-start gap-1'>
                                    { categoryData?.filter(element => 
                                            categories.includes(element.id)
                                        ).map((element, index) => (
                                            <PrimeryColor
                                                key={index + 1}
                                                iconPath={element.category_photo}
                                                fileColor={element.fill_color}
                                                colorThem={
                                                    element.category_title_en === "common words" ||
                                                    element.category_title_en === "traditional practices"
                                                        ? 0
                                                        : element.category_title_en === "religious or spiritual"
                                                        ? 4
                                                        : element.category_title_en === "food and cuisine" ||
                                                        element.category_title_en === "emotional and psychological" ||
                                                        element.category_title_en === "cultural"
                                                        ? 2
                                                        : element.category_title_en === "art and craft terms" ||
                                                        element.category_title_en === "historical" ||
                                                        element.category_title_en === "occupations and trades"
                                                        ? 3
                                                        : element.category_title_en === "nature and environment" ||
                                                        element.category_title_en === "family and kinship"
                                                        ? 5
                                                        : element.category_title_en === "social customs and etiquette" ||
                                                        element.category_title_en === "education and learning" ||
                                                        element.category_title_en === "clothing and attire" ||
                                                        element.category_title_en === "geographical"
                                                        ? 6
                                                        : 0
                                                }
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                )
        })

    }

  return (
    <>
      <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000, // 5000ms = 5s
        disableOnInteraction: false,
      }}
      loop={true}
      slidesPerView={1}
      breakpoints={{
        1025: {
          slidesPerView: 2,
            spaceBetween: 10,
        },
      }}
      className="mySwiper"
    >
        {renderSliderPoster()}
        {/* <SwiperSlide className='py-2'>
            <div className="flex  flex-col lg:flex-row items-center lg:items-start  py-3 px-3 rounded-md w-full justify-start gap-3 shadow-md mb-5">
                <img src={avatorOne} className='w-40'/>
                <div className='pt-2 w-full'>
                    <div className='flex flex-row items-center justify-start gap-2'>
                        <FontAwesomeIcon icon={faVolumeHigh} className='text-2xl' style={{color:'#106FBB'}} />
                        <h4 className='text-sm ' style={{color:'#106FBB'}}>ភាសាកួយន្ទ័រ</h4>
                        <h4 className='text-sm ' style={{color:'#106FBB'}}>/English Pronunciation/</h4>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-2'>
                        <FontAwesomeIcon icon={faVolumeHigh} className='text-2xl' style={{color:'#106FBB'}} />
                        <h4 className='text-sm ' style={{color:'#106FBB'}}>ភាសាកួយន្ទ័រ</h4>
                        <h4 className='text-sm ' style={{color:'#106FBB'}}>/English Pronunciation/</h4>
                    </div>
                    <div className='flex flex-col items-start justify-start gap-1 mt-2'>
                        <h4 className='text-sm' style={{color:'#11BA99'}}>English</h4>
                        <h4 className='text-sm' style={{color:'#CE861B'}}>ភាសារខ្មែរ</h4>
                    </div>
                    <div className='flex flex-row items-center py-1.5 px-2 justify-end gap-1 mt-2 flex-wrap lg:flex-nowrap'>
                       <button className='py-1.5 px-3 
                            rounded-full bg-green-500 text-white flex flex-row items-center justify-start gap-2
                            '>
                            <span>
                                <FontAwesomeIcon icon={faBook} />
                            </span>
                            Explanation
                       </button>
                       <button className='py-1.5 px-3 
                            rounded-full bg-red-400 text-white flex flex-row items-center justify-start gap-2
                            '>
                            <span>
                                <FontAwesomeIcon icon={faPlay} />
                            </span>
                            Explanation
                       </button>
                       
                    </div>
                    <div className='flex flex-row items-start justify-start gap-2 flex-wrap lg:flex-nowrap mt-3'>
                        <div className='text-center'>
                            <span className=' font-bold'>commend used</span>
                            <div className='flex flex-row items-center justify-start gap-1'>
                                    <span className='px-3 rounded-full py-1.5' 
                                        style={{
                                            backgroundColor:'#106FBB'
                                        }}></span>
                                    <span className='px-3 rounded-full py-1.5' 
                                        style={{
                                            backgroundColor:'#106FBB'
                                    }}></span>
                                        <span className='px-3 rounded-full py-1.5' 
                                        style={{
                                            background: 'rgb(16,111,187)',
                                            background:'linear-gradient(90deg, rgba(16,111,187,1) 40%, rgba(213,244,248,1) 100%)',
                                    }}></span>
                            </div>
                        </div>
                        <div className='text-center'>
                            <span className=' font-bold'>Categories</span>
                            <div className='flex flex-row items-center justify-start gap-1'>
                            {SelectedCategory[0]?.map((element, index) => {
                                return (

                                        <PrimeryColor key={index + 1}  iconPath={CategoryLogo[element.name]} 
                                            colorThem={
                                                element.name === "common words"
                                                ||element.name === "traditional practices"
                                                ? 0 :
                                                element.name === "religious or spiritual"? 4 :
                                                element.name === "food and cuisine"
                                                ||element.name === "emotional and psychological"
                                                ||element.name === "cultural"
                                                ? 2 :
                                                element.name === "art and craft terms"
                                                ||element.name === "historical"
                                                ||element.name === "occupations and trades"
                                                ? 3 :
                                                element.name === "nature and environment"
                                                ||element.name === "family and kinship"
                                                ? 5 :
                                                element.name === "social customs and etiquette"
                                                ||element.name === "education and learning"
                                                ||element.name === "clothing and attire"
                                                ||element.name === "clothing and attire"
                                                ||element.name === "geographical"
                                                ? 6 : 0
                                            }  
                                        />
                                )
                            })

                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='py-2'>
            <div className="flex  flex-col lg:flex-row items-center lg:items-start  py-3 px-3 rounded-md w-full justify-start gap-3 shadow-md mb-5">
                <img src={avatorOne} className='w-40'/>
                <div className='pt-2 w-full'>
                    <div className='flex flex-row items-center justify-start gap-2'>
                        <FontAwesomeIcon icon={faVolumeHigh} className='text-2xl' style={{color:'#106FBB'}} />
                        <h4 className='text-sm ' style={{color:'#106FBB'}}>ភាសាកួយន្ទ័រ</h4>
                        <h4 className='text-sm ' style={{color:'#106FBB'}}>/English Pronunciation/</h4>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-2'>
                        <FontAwesomeIcon icon={faVolumeHigh} className='text-2xl' style={{color:'#106FBB'}} />
                        <h4 className='text-sm ' style={{color:'#106FBB'}}>ភាសាកួយន្ទ័រ</h4>
                        <h4 className='text-sm ' style={{color:'#106FBB'}}>/English Pronunciation/</h4>
                    </div>
                    <div className='flex flex-col items-start justify-start gap-1 mt-2'>
                        <h4 className='text-sm' style={{color:'#11BA99'}}>English</h4>
                        <h4 className='text-sm' style={{color:'#CE861B'}}>ភាសារខ្មែរ</h4>
                    </div>
                    <div className='flex flex-row items-center py-1.5 px-2 justify-end gap-1 mt-2 flex-wrap lg:flex-nowrap'>
                       <button className='py-1.5 px-3 
                            rounded-full bg-green-500 text-white flex flex-row items-center justify-start gap-2
                            '>
                            <span>
                                <FontAwesomeIcon icon={faBook} />
                            </span>
                            Explanation
                       </button>
                       <button className='py-1.5 px-3 
                            rounded-full bg-red-400 text-white flex flex-row items-center justify-start gap-2
                            '>
                            <span>
                                <FontAwesomeIcon icon={faPlay} />
                            </span>
                            Explanation
                       </button>
                       
                    </div>
                    <div className='flex flex-row items-start justify-start gap-2 flex-wrap lg:flex-nowrap mt-3'>
                        <div className='text-center'>
                            <span className=' font-bold'>commend used</span>
                            <div className='flex flex-row items-center justify-start gap-1'>
                                    <span className='px-3 rounded-full py-1.5' 
                                        style={{
                                            backgroundColor:'#106FBB'
                                        }}></span>
                                    <span className='px-3 rounded-full py-1.5' 
                                        style={{
                                            backgroundColor:'#106FBB'
                                    }}></span>
                                        <span className='px-3 rounded-full py-1.5' 
                                        style={{
                                            background: 'rgb(16,111,187)',
                                            background:'linear-gradient(90deg, rgba(16,111,187,1) 40%, rgba(213,244,248,1) 100%)',
                                    }}></span>
                            </div>
                        </div>
                        <div className='text-center'>
                            <span className=' font-bold'>Categories</span>
                            <div className='flex flex-row items-center justify-start gap-1'>
                            {SelectedCategory[1]?.map((element, index) => {
                                return (
                                    <>
                                        <PrimeryColor iconPath={CategoryLogo[element.name]} 
                                            colorThem={
                                                element.name === "common words"
                                                ||element.name === "traditional practices"
                                                ? 0 :
                                                element.name === "religious or spiritual"? 4 :
                                                element.name === "food and cuisine"
                                                ||element.name === "emotional and psychological"
                                                ||element.name === "cultural"
                                                ? 2 :
                                                element.name === "art and craft terms"
                                                ||element.name === "historical"
                                                ||element.name === "occupations and trades"
                                                ? 3 :
                                                element.name === "nature and environment"
                                                ||element.name === "family and kinship"
                                                ? 5 :
                                                element.name === "social customs and etiquette"
                                                ||element.name === "education and learning"
                                                ||element.name === "clothing and attire"
                                                ||element.name === "clothing and attire"
                                                ||element.name === "geographical"
                                                ? 6 : 0
                                            }  
                                        />
                                    </>
                                )
                            })

                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='py-2'>
            <div className="flex  flex-col lg:flex-row items-center lg:items-start  py-3 px-3 rounded-md w-full justify-start gap-3 shadow-md mb-5">
                <img src={avatorOne} className='w-40'/>
                <div className='pt-2 w-full'>
                    <div className='flex flex-row items-center justify-start gap-2'>
                        <FontAwesomeIcon icon={faVolumeHigh} className='text-2xl' style={{color:'#106FBB'}} />
                        <h4 className='text-sm ' style={{color:'#106FBB'}}>ភាសាកួយន្ទ័រ</h4>
                        <h4 className='text-sm ' style={{color:'#106FBB'}}>/English Pronunciation/</h4>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-2'>
                        <FontAwesomeIcon icon={faVolumeHigh} className='text-2xl' style={{color:'#106FBB'}} />
                        <h4 className='text-sm ' style={{color:'#106FBB'}}>ភាសាកួយន្ទ័រ</h4>
                        <h4 className='text-sm ' style={{color:'#106FBB'}}>/English Pronunciation/</h4>
                    </div>
                    <div className='flex flex-col items-start justify-start gap-1 mt-2'>
                        <h4 className='text-sm' style={{color:'#11BA99'}}>English</h4>
                        <h4 className='text-sm' style={{color:'#CE861B'}}>ភាសារខ្មែរ</h4>
                    </div>
                    <div className='flex flex-row items-center py-1.5 px-2 justify-end gap-1 mt-2 flex-wrap lg:flex-nowrap'>
                       <button className='py-1.5 px-3 
                            rounded-full bg-green-500 text-white flex flex-row items-center justify-start gap-2
                            '>
                            <span>
                                <FontAwesomeIcon icon={faBook} />
                            </span>
                            Explanation
                       </button>
                       <button className='py-1.5 px-3 
                            rounded-full bg-red-400 text-white flex flex-row items-center justify-start gap-2
                            '>
                            <span>
                                <FontAwesomeIcon icon={faPlay} />
                            </span>
                            Explanation
                       </button>
                       
                    </div>
                    <div className='flex flex-row items-start justify-start gap-2 flex-wrap lg:flex-nowrap mt-3'>
                        <div className='text-center'>
                            <span className=' font-bold'>commend used</span>
                            <div className='flex flex-row items-center justify-start gap-1'>
                                    <span className='px-3 rounded-full py-1.5' 
                                        style={{
                                            backgroundColor:'#106FBB'
                                        }}></span>
                                    <span className='px-3 rounded-full py-1.5' 
                                        style={{
                                            backgroundColor:'#106FBB'
                                    }}></span>
                                        <span className='px-3 rounded-full py-1.5' 
                                        style={{
                                            background: 'rgb(16,111,187)',
                                            background:'linear-gradient(90deg, rgba(16,111,187,1) 40%, rgba(213,244,248,1) 100%)',
                                    }}></span>
                            </div>
                        </div>
                        <div className='text-center'>
                            <span className=' font-bold'>Categories</span>
                            <div className='flex flex-row items-center justify-start gap-1'>
                            {SelectedCategory[2]?.map((element, index) => {
                                return (
                                    <>
                                        <PrimeryColor iconPath={CategoryLogo[element.name]} 
                                            colorThem={
                                                element.name === "common words"
                                                ||element.name === "traditional practices"
                                                ? 0 :
                                                element.name === "religious or spiritual"? 4 :
                                                element.name === "food and cuisine"
                                                ||element.name === "emotional and psychological"
                                                ||element.name === "cultural"
                                                ? 2 :
                                                element.name === "art and craft terms"
                                                ||element.name === "historical"
                                                ||element.name === "occupations and trades"
                                                ? 3 :
                                                element.name === "nature and environment"
                                                ||element.name === "family and kinship"
                                                ? 5 :
                                                element.name === "social customs and etiquette"
                                                ||element.name === "education and learning"
                                                ||element.name === "clothing and attire"
                                                ||element.name === "clothing and attire"
                                                ||element.name === "geographical"
                                                ? 6 : 0
                                            }  
                                        />
                                    </>
                                )
                            })

                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
