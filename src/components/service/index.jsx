import { Link } from "react-router-dom";
import ShapeTwo from "../../assets/img/slider/02_Shape.png";
import commentShapeTwo from '../../assets/img/slider/03_Shape.png';
import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const ServiceComponents = () => {
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
                    <h4 className="tp-section-subtitle">Word Categories</h4>
                    <h3 className="tp-section-title text-white">Select <span>Categories</span> of words you want to know</h3>
                </div>
            </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 ">
                <div classNameName="w-full sm:w-auto flex flex-col">
                    <div className="tpservice mb-20 tp-sv-color-1 flex-grow">
                        <div className="tpservice__icon">
                            {/* <a href="#"><i className="flaticon-protection"></i></a> */}
                            <Link to={'/'} classNameName="text-white font-bold">
                                <FontAwesomeIcon icon={faPlay} />
                            </Link>
                        </div>
                        <div className="tpservice__title">
                            <h4 className="tp-sv-title text-xs ">
                                <Link to={'/common-words'} className="text-white no-underline">Common Words</Link>
                            </h4>
                        </div>
                        <div className="tpservice__circle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-auto flex flex-col">
                    <div className="tpservice mb-20 tp-sv-color-2 flex-grow">
                        <div className="tpservice__icon tpservice__icon-2">
                            {/* <a href="#">
                                <i className="flaticon-health-insurance"></i>
                            </a> */}
                            <Link to={'/'} className="text-white font-bold">
                                <FontAwesomeIcon icon={faPlay} />
                            </Link>
                        </div>
                        <div className="tpservice__title">
                            <h4 className="tp-sv-title text-xs ">
                                <Link to={'/culural'} className="text-white no-underline"> Cultural </Link> 
                            </h4>
                        </div>
                        <div className="tpservice__circle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-auto flex flex-col">
                    <div className="tpservice mb-20 tp-sv-color-3 flex-grow">
                        <div className="tpservice__icon tpservice__icon-3">
                            <Link to={'/'} className="text-white font-bold">
                                <FontAwesomeIcon icon={faPlay} />
                            </Link>
                        </div>
                        <div className="tpservice__title">
                            <h4 className="tp-sv-title text-xs ">
                                <Link to={'/historycal'} className="text-white no-underline">Historical</Link> 
                            </h4>
                        </div>
                        <div className="tpservice__circle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-auto flex flex-col">
                    <div className="tpservice mb-20 tp-sv-color-4 flex-grow">
                        <div className="tpservice__icon tpservice__icon-4">
                            <Link to={'/'} className="text-white font-bold">
                                <FontAwesomeIcon icon={faPlay} />
                            </Link>
                        </div>
                        <div className="tpservice__title">
                            <h4 className="tp-sv-title text-xs ">
                                <Link to={'/hisorical'} className="text-white no-underline">Religious or Spiritual</Link> 
                            </h4>
                        </div>
                        <div className="tpservice__circle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-auto flex flex-col">
                    <div className="tpservice mb-20 tp-sv-color-5 flex-grow">
                        <div className="tpservice__icon tpservice__icon-5">
                            <Link to={'/'} className="text-white font-bold">
                                <FontAwesomeIcon icon={faPlay} />
                            </Link>
                        </div>
                        <div className="tpservice__title">
                            <h4 className="tp-sv-title text-xs ">
                                <Link to={'/family-and-kinship'} className="text-white no-underline">
                                    Family and Kinship
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
                <div className="w-full sm:w-auto flex flex-col ">
                    <div class="tpservice mb-20 tp-sv-color-6 flex-grow">
                        <div class="tpservice__icon tpservice__icon-6">
                            <Link to={'/'} className="text-white font-bold">
                                <FontAwesomeIcon icon={faPlay} />
                            </Link>
                        </div>
                        <div class="tpservice__title">
                            <h4 class="tp-sv-title text-xs ">
                                <Link to={'/geographical'} className="text-white no-underline">Geographical</Link>
                            </h4>
                        </div>
                        <div class="tpservice__circle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>            
                <div className="w-full sm:w-auto flex flex-col">
                    <div class="tpservice mb-20 tp-sv-color-1 flex-grow">
                        <div class="tpservice__icon">
                            {/* <a href="#"><i class="flaticon-protection"></i></a> */}
                            <Link to={'/'} className="text-white font-bold">
                                <FontAwesomeIcon icon={faPlay} />
                            </Link>
                        </div>
                        <div class="tpservice__title">
                            <h4 class="tp-sv-title text-xs ">
                                <Link to={'/traditional-practices'} className="text-white no-underline">
                                 Traditional Practices
                                </Link>
                            </h4>
                        </div>
                        <div class="tpservice__circle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-auto flex flex-col">
                    <div class="tpservice mb-20 tp-sv-color-2 flex-grow">
                        <div class="tpservice__icon tpservice__icon-2">
                            {/* <a href="#">
                                <i class="flaticon-health-insurance"></i>
                            </a> */}
                            <Link to={'/'} className="text-white font-bold">
                                <FontAwesomeIcon icon={faPlay} />
                            </Link>
                        </div>
                        <div className="tpservice__title">
                            <h4 className="tp-sv-title text-xs ">
                                <Link to={'/food-and-cuisine'} className="text-white no-underline">
                                 Food and Cuisine 
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
                <div className="w-full sm:w-auto flex flex-col">
                    <div className="tpservice mb-20 tp-sv-color-3 flex-grow">
                        <div className="tpservice__icon tpservice__icon-3">
                            <Link to={'/'} className="text-white font-bold">
                                <FontAwesomeIcon icon={faPlay} />
                            </Link>
                        </div>
                        <div className="tpservice__title">
                            <h4 className="tp-sv-title text-xs ">
                                <Link to={'/art-and-craft-terms'} className="text-white no-underline">
                                 Art and Craft Terms
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
                <div className="w-full sm:w-auto flex flex-col">
                    <div className="tpservice mb-20 tp-sv-color-4 flex-grow">
                        <div className="tpservice__icon tpservice__icon-4">
                            <Link to={'/'} className="text-white font-bold">
                                <FontAwesomeIcon icon={faPlay} />
                            </Link>
                        </div>
                        <div className="tpservice__title">
                            <h4 className="tp-sv-title text-xs ">
                                <Link to={'/clothing-and-attire'} className="text-white no-underline">
                                 clothing and Attire
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
                <div className="w-full sm:w-auto flex flex-col">
                    <div className="tpservice mb-20 tp-sv-color-5 flex-grow">
                        <div className="tpservice__icon tpservice__icon-5">
                            <Link to={'/'} className="text-white font-bold">
                                <FontAwesomeIcon icon={faPlay} />
                            </Link>
                        </div>
                        <div className="tpservice__title">
                            <h4 className="tp-sv-title text-xs ">
                                <Link to={'/nature-and-environment'} className="text-white no-underline">
                                 Nature and Environment
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
                <div className="w-full sm:w-auto flex flex-col ">
                    <div className="tpservice mb-20 tp-sv-color-6 flex-grow">
                        <div className="tpservice__icon tpservice__icon-6">
                            <Link to={'/'} className="text-white font-bold">
                                <FontAwesomeIcon icon={faPlay} />
                            </Link>
                        </div>
                        <div className="tpservice__title">
                            <h4 className="tp-sv-title text-xs ">
                                <Link to={'/social-customs-and-etiquette'} className="text-white no-underline">
                                 Social Customs and Etiquette
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
                <div className="w-full sm:w-auto flex flex-col">
                    <div className="tpservice mb-20 tp-sv-color-2 flex-grow">
                        <div className="tpservice__icon tpservice__icon-2">
                            {/* <a href="#">
                                <i class="flaticon-health-insurance"></i>
                            </a> */}
                            <Link to={'/'} className="text-white font-bold">
                                <FontAwesomeIcon icon={faPlay} />
                            </Link>
                        </div>
                        <div className="tpservice__title">
                            <h4 className="tp-sv-title text-xs ">
                                <Link to={'/emotional-and-psychological'} className="text-white no-underline">
                                 Emotional and Psychological
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
                <div className="w-full sm:w-auto flex flex-col">
                    <div className="tpservice mb-20 tp-sv-color-3 flex-grow">
                        <div className="tpservice__icon tpservice__icon-3">
                            <Link to={'/'} className="text-white font-bold">
                                <FontAwesomeIcon icon={faPlay} />
                            </Link>
                        </div>
                        <div className="tpservice__title">
                            <h4 className="tp-sv-title text-xs ">
                                <Link to={'/occupations-and-trades'} className="text-white no-underline">
                                 Occupations and Trades
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
                <div className="w-full sm:w-auto flex flex-col">
                    <div className="tpservice mb-20 tp-sv-color-4 flex-grow">
                        <div className="tpservice__icon tpservice__icon-4">
                            <Link to={'/'} className="text-white font-bold">
                                <FontAwesomeIcon icon={faPlay} />
                            </Link>
                        </div>
                        <div className="tpservice__title">
                            <h4 className="tp-sv-title text-xs ">
                                <Link to={'/education-and-learning'} className="text-white no-underline">
                                Education and Learning
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
            </div>
        </div>
        <div className="tp-service-shape-2">
            <img src={commentShapeTwo} alt=""/>
         </div>
        </div>
    )
}

export default ServiceComponents