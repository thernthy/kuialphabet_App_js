
import Loading from "../../components/Loading";
import { useEffect, useState } from "react";
import WordsPopUpSlider from "../../components/WordsSlider";
import { Alphabet, KhAlphabet } from "./assets/db/alpabet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { CategoriesOpj } from "../../db/category";
import { useHookWord } from "../../hooks/hookWords";
import { useTranslation } from "react-i18next";
import { ExplanationPopup } from "../../components/explanPop";

const Words = () => {
    const { t, i18n } = useTranslation("global");
    const [isExplanetion, setIsExplanetion] = useState(false)
    const [targetExplan, setTartgetExplan] = useState([])
    const {
        data, 
        isLoading, 
        error, 
        refetch, 
        filterByCategory, 
        setFilterByCategory,
        filterAlphabetEn, 
        setFilterAlphabetEn,
        filterAlphabetKh, 
        setFilterAlphabetKh } = useHookWord();
    // const [bannerData, setBannerData]  = useState([])
    const [ alpabetchar, setAlpabetchar ] = useState();
    const handleFilterChar = ( CharName ) => {
        setAlpabetchar( CharName )
    }
    const handleCategorySelection = (value) => {
        const categoryId = value.target.value
        setFilterByCategory(categoryId && categoryId ===  "null"? null : categoryId)
    }
    const haleEnAlphabetSelection = ( value ) => {
        const char = value.target.value
        setFilterAlphabetEn(char && char === "null"? null : char)
    }
    const handleKhAlphabetSelection = ( value ) => {
        const char = value.target.value
        setFilterAlphabetKh(char && char === "null"? null : char)
    }
    
    useEffect(() => {
        if (isExplanetion) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden'; // Added this line
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = ''; // Added this line
        }

        // Cleanup function to reset overflow when component unmounts or isExplanetion changes
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = ''; // Added this line
        };
    }, [isExplanetion]);

    const randerWords = () => {
        if(isLoading){
           return <div className="w-full relative p-5 mt-2"><Loading position={'absolute'}/></div>
        }
        if(error){
           return <h3 className="text-red-400 p-5 mt-2 text-center">Error</h3>
        }
        if(data && data.length === 0){
            return <h4 className="text-red-400 p-5 mt-2 text-center">Word not found!</h4>
        }
        return (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 mb-5 mt-2">
                {data?.map((word, index) => {
                    return (
                        <div
                            className="border-b-2 flex flex-col items-start justify-evenly px-2 py-3 rounded-md gap-2"
                            key={index}
                        >
                            <div className="text-sm font-bold text-blue-600">
                                {word.kui_1}
                            </div>
                            <div className="text-sm font-bold text-blue-600">
                                {word.kui_2}
                            </div>
                            <div className="text-sm font-bold" style={{ color: '#1BAECE' }}>
                                {word.english_word}
                            </div>
                            <div className="text-sm font-bold text-yellow-400">
                                {word.khmer_word}
                            </div>
                            <div className="flex flex-row items-center justify-start gap-2">
                                <div>
                                    <span className="text-xs">commend used</span>
                                    <div className="flex flex-row items-center justify-start gap-1">
                                        {word.comment_use === 25 &&
                                         <span className=" bg-red-400 px-2 rounded-full py-1"></span>
                                        }
                                        {word.comment_use === 50 &&
                                            <>
                                                <span className="px-2 rounded-full py-1" style={{ backgroundColor: '#106FBB' }}></span>
                                                <span className="px-2 rounded-full py-1" style={{ backgroundColor: '#106FBB' }}></span>
                                            </>
                                        }
                                        {word.comment_use === 75&&
                                            <>
                                                <span className="px-2 rounded-full py-1" style={{ backgroundColor: '#106FBB' }}></span>
                                                <span className="px-2 rounded-full py-1" style={{ backgroundColor: '#106FBB' }}></span>
                                                <span className="px-2 rounded-full py-1" style={{ backgroundColor: '#106FBB' }}></span>
                                            </>
                                        }
                                        {word.comment_use === 100&&
                                            <>
                                                <span className="px-2 rounded-full py-1" style={{ backgroundColor: '#106FBB' }}></span>
                                                <span className="px-2 rounded-full py-1" style={{ backgroundColor: '#106FBB' }}></span>
                                                <span className="px-2 rounded-full py-1" style={{ backgroundColor: '#106FBB' }}></span>
                                            </>
                                        }
                                    </div>
                                </div>
                                <button onClick={()=>HandleExplanation(word.id)}
                                    className=" capitalize py-1.5 px-3 rounded-full bg-green-400 text-white flex flex-row items-center justify-start gap-2"
                                >
                                    <span 
                                        className="text-white no-underline"
                                    >
                                        <span>
                                            <FontAwesomeIcon icon={faBook} />
                                        </span>
                                        {t("homePage.explanation")}
                                    </span>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
    const HandleExplanation = (word_id) => {
        const targetData = data?.filter(item => item.id === word_id);
        setTartgetExplan(targetData);
        setIsExplanetion(true);
    };
    // const renderMovies = () => {
    //     if (isLoading) {
    //         return <Loading />
    //     }
        
    //     if (error) {
    //         return <ErrorMessage refetch={refetch} />
    //     }
      
    //     return data.data?.map(movie => {
    //         return (
    //             <MovieCards
    //                 key={movie.comic_title_id}
    //                 title={movie.title}
    //                 poster={movie.photo_cover_path}
    //                 id={movie.comic_title_id}
    //                 genres={movie?.genres?.join(', ')}
    //                 year={movie.created_at}
    //                 rating={movie.imdb_rating}
    //             />
    //         );
    //     })
    // }
    return (
        <>
          <div className="px-2 py-4 mt-20 text-center w-6/12 mx-auto">
            <h2 className=" capitalize">
                {t("homePage.kui")}
                <span style={{color:'#106FBB'}} className=" caption-top"> {t("header.alphabeted")}</span>
                <p className="pt-4">
                  {t("wordPage.header")}
                </p>
            </h2>
          </div>
          <div className="container">
           <WordsPopUpSlider  HandleExplanation={HandleExplanation} setIsExplanetion={setIsExplanetion}/>
          </div>
         
         {isExplanetion && targetExplan.length !== 0 && 
            <ExplanationPopup data={targetExplan} setIsExplanetion={setIsExplanetion}/>
         }
          

          <div className="container">
            <h3 className=" capitalize">{t("homePage.explore")} {t("homePage.words")}</h3>
            <div className=" px-2 py-1 pb-2 border-b-2 flex w-full flex-row items-end lg:items-center text-xs md:text-sm  lg:text-md justify-between gap-1 md:gap-6 ">
                <div className="flex flex-col items-start justify-around gap-3">
                    <span className=" capitalize"><b>{t("homePage.filter")} {t("homePage.category")}</b></span>
                     <select onChange={ (value)=>handleCategorySelection(value) } className=" 
                             text-gray-900 
                             border border-spacing-1
                             text-sm 
                             rounded-lg
                             focus:ring-blue-500
                             focus:border-blue-500 block w-full p-2.5
                             bg-white
                             dark:bg-gray-700
                             dark:border-gray-600 
                             dark:placeholder-gray-400 
                             dark:focus:ring-blue-500
                             dark:focus:border-blue-500
                             capitalize
                             h-10
                        ">
                       <option value={'null'}>{t("homePage.all")}</option>
                       {CategoriesOpj?.map((category, index) => {
                         return (
                            <option value={category.id} key={category.id}>{ category.name }</option>
                         )
                       })

                       }
                    </select>
                </div>
                <div className="flex flex-col items-start justify-around gap-3">
                    <span className=" capitalize"><b>{t("homePage.filter")} {t("header.alphabeted")} ({t("header.menue_text.english")})</b></span>
                    <select onChange={ (value)=>haleEnAlphabetSelection(value) }
                    className=" 
                             text-gray-900 
                             border border-spacing-1
                             text-sm 
                             rounded-lg
                             focus:ring-blue-500
                             focus:border-blue-500 block w-full p-2.5
                             bg-white
                             dark:bg-gray-700
                             dark:border-gray-600 
                             dark:placeholder-gray-400 
                             dark:focus:ring-blue-500
                             dark:focus:border-blue-500
                             h-10
                        ">
                        <option value={"null"} >{t("homePage.all")}</option>
                        {Alphabet?.map((char, index) => {
                                return <option value={ char } key={index + 1}>{ char }</option>
                          })
                        }
                    </select>
                </div>
                <div className="flex flex-col items-start justify-around gap-3">
                    <span><b>{t("homePage.filter")} {t("header.alphabeted")} ({t("header.menue_text.khmer")})</b></span>
                    <select onChange={ (value)=>handleKhAlphabetSelection(value) }  class="
                        text-gray-900 
                        border border-spacing-1
                        text-sm 
                        rounded-lg
                        focus:ring-blue-500
                        focus:border-blue-500 block w-full p-2.5
                        bg-white
                        dark:bg-gray-700
                        dark:border-gray-600 
                        dark:placeholder-gray-400 
                        dark:focus:ring-blue-500
                        dark:focus:border-blue-500
                          h-10
                    ">
                        <option value={"null"}>{t("homePage.all")}</option>
                        {KhAlphabet?.map((char, index) => {
                                    return <option value={ char.char_name } key={index + 1}>{ char.char_name }</option>
                            })
                        }
                    </select>
                </div>
            </div>
           { randerWords() }
          </div>
        </>
    )
}

export default Words