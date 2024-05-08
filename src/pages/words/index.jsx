import { useMovies } from "../../hooks/useMovies";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import MovieCards from "../../components/MovieCards";
import { useState } from "react";
import WordsPopUpSlider from "../../components/WordsSlider";
import { Alphabet } from "./assets/db/alpabet";
import { Words as WordsData } from "./assets/db/words";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPlay } from "@fortawesome/free-solid-svg-icons";

const Words = () => {
    const { data, isLoading, error, setPage, pageCount, refetch } = useMovies()
    const [bannerData, setBannerData]  = useState([])
    const [ alpabetchar, setAlpabetchar ] = useState();
    const handleFilterChar = ( CharName ) => {
        setAlpabetchar( CharName )
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
            <div className="flex flex-row items-start justify-start gap-2">
                <div className="flex flex-col items-start justify-around gap-3">
                    <span><b>Filter Category</b></span>
                    <select className=" 
                        min-w-60 max-w-80 px-2 py-2 bg-transparent border-2 
                        rounded-md border-1 border-blue-700

                        ">
                        <option value={'filter 1'}>filter 1</option>
                        <option value={'filter 2'}>filter 2</option>
                        <option value={'filter 3'}>filter 3</option>
                        <option value={'filter 4'}>filter 4</option>
                        <option value={'filter 3'}>filter 4</option>
                    </select>
                </div>
                <div className="flex flex-row items-start justify-around">
                    <span><b>Alphabet</b></span>
                    <ul className="flex flex-row items-center justify-start gap-2 flex-wrap">
                        {Alphabet?.map((char, index) => {
                            return(
                                <li key={index} onClick={()=>handleFilterChar(char)} 
                                    className={`
                                            cursor-pointer px-3 py-2 rounded-md border-2 border-blue-700
                                            relative
                                            ${ alpabetchar && alpabetchar === char ?
                                                'bg-blue-700 text-white'
                                                :''
                                            }
                                            `
                                        }>
                                    {char}
                                    {alpabetchar && alpabetchar === char ?
                                     <>
                                        <span className=" 
                                                absolute px-2 py-2 bg-white rounded-full
                                                -top-1 -left-1"
                                            ></span> 
                                        <span className=" 
                                                absolute px-2 py-2 bg-white rounded-full
                                                 -right-1 -bottom-1"
                                            ></span> 
                                        </> :''
                                    }
                                </li>
                            )
                        })
                            
                        }
                    </ul>
                </div>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5 mt-2">
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
                                            <span>
                                                <FontAwesomeIcon icon={faBook} />
                                            </span>
                                            Explanation
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