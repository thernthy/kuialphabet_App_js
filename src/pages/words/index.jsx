import { useMovies } from "../../hooks/useMovies";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import MovieCards from "../../components/MovieCards";
import { useState } from "react";
import WordsPopUpSlider from "../../components/WordsSlider";
import { Alphabet, KhAlphabet } from "./assets/db/alpabet";
import { Words as WordsData } from "./assets/db/words";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPlay } from "@fortawesome/free-solid-svg-icons";
import { CategoriesOpj } from "../../db/category";
import { Link } from "react-router-dom";

const Words = () => {
    const { data, isLoading, error, setPage, pageCount, refetch } = useMovies()
    const [bannerData, setBannerData]  = useState([])
    const [ alpabetchar, setAlpabetchar ] = useState();
    const handleFilterChar = ( CharName ) => {
        setAlpabetchar( CharName )
    }
    const handleCategorySelection = (value) => {
        const categoryId = value.target.value
        alert (`Apito/${categoryId }`)
    }
    const haleEnAlphabetSelection = ( value ) => {
        const char = value.target.value
        alert('Apito/' + char)
    }
    const handleKhAlphabetSelection = ( value ) => {
        const char = value.target.value
        alert(`Apito/${char}`)
    }

    const renderMovies = () => {
        if (isLoading) {
            return <Loading />
        }
        
        if (error) {
            return <ErrorMessage refetch={refetch} />
        }
      
        return data.data?.map(movie => {
            return (
                <MovieCards
                    key={movie.comic_title_id}
                    title={movie.title}
                    poster={movie.photo_cover_path}
                    id={movie.comic_title_id}
                    genres={movie?.genres?.join(', ')}
                    year={movie.created_at}
                    rating={movie.imdb_rating}
                />
            );
        })
    }
    return (
        <main>
          <div className="px-2 py-4 mt-20 text-center w-6/12 mx-auto">
            <h2>
                Kui <span style={{color:'#106FBB'}}>Alphabeted</span>
                <p className="pt-4">
                    Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                    Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem 
                    IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
                    IpsumLorem IpsumLorem Ipsum
                </p>
            </h2>
          </div>
          <div className="container">
           <WordsPopUpSlider />
          </div>
          <div className="container">
            <h3>Explore words</h3>
            <div className="flex w-fullflex-row items-end lg:items-center text-xs md:text-sm  lg:text-md justify-stretch gap-1 md:gap-6 ">
                <div className="flex flex-col items-start justify-around gap-3 ">
                    <span><b>Filter Category</b></span>
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
                       {CategoriesOpj?.map((category, index) => {
                         return (
                            <option value={category.id} key={category.id}>{ category.name }</option>
                         )
                       })

                       }
                    </select>
                </div>
                <div className="flex flex-col items-start justify-around gap-3">
                    <span><b>Filter Alphabeted (English)</b></span>
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
                        {Alphabet?.map((char, index) => {
                                return <option value={ char } key={index + 1}>{ char }</option>
                          })
                        }
                    </select>
                </div>
                <div className="flex flex-col items-start justify-around gap-3">
                    <span><b>Filter Alphabeted (Khmer)</b></span>
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
                        {KhAlphabet?.map((char, index) => {
                                    return <option value={ char.char_name } key={index + 1}>{ char.char_name }</option>
                            })
                        }
                    </select>
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 mb-5 mt-2">
                {
                    WordsData?.map((word, index) => {
                        return(
                            <div className="
                                    shadow-md flex flex-col items-start justify-evenly
                                    px-2 py-3 rounded-md gap-2
                                " key={index}>
                                <div className="text-sm font-bold text-blue-600">
                                    {word.kui_lang}
                                </div>
                                <div className="text-sm font-bold text-blue-600">
                                    {word.kui_lang2}
                                </div>
                                <div className="text-sm font-bold" style={{color:'#1BAECE'}}>
                                    {word.english_lang}
                                </div>
                                <div className="text-sm font-bold" style={{color:'#CE861B'}}>
                                    {word.khmer_lang}
                                </div>
                                <div className="flex flex-row items-center justify-start gap-2">
                                    <div>
                                        <span>commend used</span>
                                        <div className='flex flex-row items-center justify-start gap-1'>
                                            <span className='px-3 rounded-full py-1.5' style={{backgroundColor:'#106FBB'}}></span>
                                            <span className='px-3 rounded-full py-1.5' style={{backgroundColor:'#106FBB'}}></span>
                                            <span className='px-3 rounded-full py-1.5' style={{backgroundColor:'#106FBB'}}></span>
                                        </div>
                                    </div>
                                    <button className='py-1.5 px-3 
                                            rounded-full bg-blue-600 text-white flex flex-row items-center justify-start gap-2
                                            '>
                                        <Link to={`view/${word.english_lang}/${word.kui_lang}/method`} className="text-white no-underline">
                                            <span>
                                                <FontAwesomeIcon icon={faBook} />
                                            </span>
                                            Explanation
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
          </div>
        </main>
    )
}

export default Words