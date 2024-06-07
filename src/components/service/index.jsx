import { Link } from "react-router-dom";
import ShapeTwo from "../../assets/img/slider/02_Shape.png";
import commentShapeTwo from '../../assets/img/slider/03_Shape.png';
import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useCategory } from "../../hooks/hookCategories";
const ServiceComponents = ({t}) => {
    const {data} = useCategory()
    const renderCategories = () => {
      if(data && data.length === 0){
        return <p>NO FOUND CATEGPRY</p>
      }
      return (
        <>
          {data?.map((category, index) => (
            <div key={index} className="w-full sm:w-auto flex flex-col">
                <div className={`tpservice mb-20 tp-sv-color-1 ${
                    category.category_title === "religious or spiritual" ? 'tp-sv-color-4' :
                    category.category_title === "food and cuisine" ||
                    category.category_title === "emotional and psychological" ||
                    category.category_title === "cultural" ? 'tp-sv-color-2' :
                    category.category_title === "art and craft terms" ||
                    category.category_title === "historical" ||
                    category.category_title === "occupations and trades" ? 'tp-sv-color-3' :
                    category.category_title === "nature and environment" ||
                    category.category_title === "family and kinship" ? 'tp-sv-color-5' :
                    category.category_title === "social customs and etiquette" ||
                    category.category_title === "education and learning" ||
                    category.category_title === "clothing and attire" ||
                    category.category_title === "geographical" ? 'tp-sv-color-6' : ''
                } flex-grow`}>
                    <div className={`tpservice__icon ${
                        category.category_title === "common words" ||
                        category.category_title === "traditional practices" ? 'tpservice__icon' :
                        category.category_title === "religious or spiritual" ? 'tpservice__icon-4' :
                        category.category_title === "food and cuisine" ||
                        category.category_title === "emotional and psychological" ||
                        category.category_title === "cultural" ? 'tpservice__icon-2' :
                        category.category_title === "art and craft terms" ||
                        category.category_title === "historical" ||
                        category.category_title === "occupations and trades" ? 'tpservice__icon-3' :
                        category.category_title === "nature and environment" ||
                        category.category_title === "family and kinship" ? 'tpservice__icon-5' :
                        category.category_title === "social customs and etiquette" ||
                        category.category_title === "education and learning" ||
                        category.category_title === "clothing and attire" ||
                        category.category_title === "geographical" ? 'tpservice__icon-6' : ''
                    } flex flex-col items-center justify-start`}>
                        {/* <FontAwesomeIcon icon={faPlay} /> */}
                        <img src={`${process.env.REACT_APP_BASED_URL}storage/${category.category_photo}`} className="pt-1.5" style={{ width: '40px' }} />
                    </div>
                    <div className="tpservice__title">
                        <h4 className="tp-sv-title text-xs">
                            <Link to="/common-words" className="text-white no-underline">
                                {category.category_title}
                            </Link>
                        </h4>
                    </div>
                    <div className="tpservice__circle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
          ))}
        </>
      );
    }


    return (
        <div className="tp-service-area black-bg pt-200 pb-200 z-index p-relative">
        <div className="tp-service-shape-1">
            <img src={ShapeTwo} alt=""/>
        </div>
        <div className="tp-service-shape-2">
            <img src="assets/img/slider/03_Shape.png" alt=""/>
        </div>
        <div className="container">
            <div className="row">
            <div className="col-12">
                <div className="tp-service-section text-center mb-24">
                    <h4 className="tp-section-subtitle">{t("homePage.word")} {t('homePage.categories')}</h4>
                    <h3 className="tp-section-title text-white">{t("homePage.select")} <span>{t("homePage.categories")}</span> {t("homePage.of words you want to know")}</h3>
                </div>
            </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 ">
                { renderCategories() }         
            </div>
        </div>
        <div className="tp-service-shape-2">
            <img src={commentShapeTwo} alt=""/>
         </div>
        </div>
    )
}

export default ServiceComponents