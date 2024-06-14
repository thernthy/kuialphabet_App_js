import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import HttpClient from '../../services/Http';
const SearchForm = ({ t, i18n }) => {
  const [searchResult, setSearchResult] = useState(false);
  const [searchResultData, setSearchResultData] = useState([]);
  const [cancelBtn, setCancelBtn] = useState(false);
  const searchValue = useRef();
  const fetchWord = async (e) => {
    const payload = { search: e.target.value, leng: i18n.language };
    try {
      const response = await HttpClient.post('word/get', payload);
      console.log('Response data:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching word:', error);
      return [];
    }
  };

  const handleSearchInput = async (e) => {
    const result = await fetchWord(e);
    setSearchResultData(result);
    if(e.target.value === ''){
        setSearchResult(false);
    }else{
        setSearchResult(true);
    }
    setCancelBtn(e.target.value !== '');
  };

  const handleCancel = () => {
    searchValue.current.value = '';
    setCancelBtn(false);
    setSearchResult(false);
    setSearchResultData([]);
  };

  console.log('Search result data:', searchResultData);

  return (
    <div className="position-relative mx-2">
      <div className="w-100 py-2 rounded-full bg-white px-3 gap-2"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <FontAwesomeIcon icon={faSearch} className='col-1' />
        <input
          className='col-11 border-0'
          placeholder={`${t("homePage.search")} ${t("homePage.words")}...`}
          name='search'
          ref={searchValue}
          onChange={handleSearchInput}
          style={{ outline: 'none', backgroundColor: "transparent" }}
        />
        {cancelBtn && (
          <FontAwesomeIcon icon={faClose} onClick={handleCancel} className='col-1 text-danger' />
        )}
      </div>
      <div className={`tpoffcanvas ${searchResult ? 'opened' : ''} max-h-80 mt-20 md:mt-16 md:mr-2 py-3`}
        style={{ backgroundImage: `url(${require("../../assets/img/menue_icon/slider-shape-3-1.png")})` }}>
        <ul className='p-0'>
          {searchResultData?.map(result => (
            <li className='border-b-2 pt-2 border-white font-medium' key={result.id}>
              <Link to={`/word/${result?.id}/${result?.english_word}/${result?.khmer_word}`} className='no-underline text-white'>
                {i18n.language === 'en' ? result.english_word : result.khmer_word}
              </Link>
            </li>
          ))}
          {searchResultData?.length === 0 && (
            <li className='border-b-2 border-white font-bold text-center text-red-500 capitalize'>
              {t("homePage.no_result")}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchForm;
