import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSearchMovies } from '../../hooks/useSearchMovies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCancel, faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import { Buttonbg } from '../../template/button';
import { colors } from '../../template/color';
const SearchForm = () => {
    const { data, search, setSearch } = useSearchMovies()
    const [filteredData, setFilteredData] = useState([]);
    const [cancelBtn, setCancelBnt] = useState(false);
    const filteredMovies = data?.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
    )
    const seachValue = useRef();
    const handleSearchInput = (e) => {
        setFilteredData(filteredMovies)
        setSearch(e.target.value)
        if(e.target.value!=''){
            setCancelBnt(true)
        }else{
            setCancelBnt(false)
        }
    }

    const handleCancel = () => {
        seachValue.current.value = '';
        setCancelBnt(false);
        setSearch('')
    }
    const renderFilteredMovie = () => {
        if (!filteredData || filteredData?.length === 0) {
            return <p className="text-center text-white fs-5 fw-semibold m-auto p-5">No results found for "{search}"</p>
        }
        

        return filteredData?.map((result) => (
            
            <Link
                to={`/moviedetails/${result.comic_title_id}/${result.title}/1/`}
                key={result.comic_title_id}
                className='text-white text-decoration-none'
            >
                <div className="card detail py-2" style={{backgroundColor:"transparent"}}>
                    <div className="row no-gutters overflow-hidden">
                        <div className="col-sm-2">
                            {result.photo_cover_path &&
                                <img
                                    className="card-img img-cover"
                                    src={(result.photo_cover_path.startsWith('images/'))?process.env.REACT_APP_BASED_URL+"/"+result.photo_cover_path:result.photo_cover_path}
                                    alt={result.title}
                                />
                            }
                        </div>
                        <div className="col-sm-10">
                            <div className="card-body">
                                <h6 className="card-title">{result.title} </h6>
                                <p className="card-text fs-6">{result?.genres?.join(', ')}</p>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        ))
    }


    return (
        <div className="position-relative mt-2 ">
            <div className="w-100 form-control" 
            style={{
                    display:'flex', 
                    flexDirection:'row', 
                    justifyContent:'space-between', 
                    alignItems:'center',
                    borderRadius:'1rem',
                    backgroundColor:Buttonbg.bg_lime_400
                }}>
                <input
                    className='col-11  border-0'
                    placeholder="만화 검색.."
                    name='search'
                    ref={seachValue}
                    onChange={(e)=>handleSearchInput(e)}
                    style={{ outline: 'none', backgroundColor:"transparent", color:colors.white}}
                />
                {
                !cancelBtn?
                    <FontAwesomeIcon icon={faSearch} className='col-1 text-success' style={{transform:'translateX(15px)'}}/>:
                    <FontAwesomeIcon icon={faClose} onClick={()=>handleCancel()} className='col-1 text-danger' style={{transform:'translateX(15px)'}}/>
                }
            </div>
            <div className="w-100">
                <div className={`w-100 search-result rounded-1 py-2 px-2 ${search === '' ? 'd-none' : 'd-flex flex-column'}`} style={{backgroundColor:Buttonbg.bg_lime_400}}>
                    {renderFilteredMovie()}
                </div>
            </div>
        </div>
    );

}

export default SearchForm;