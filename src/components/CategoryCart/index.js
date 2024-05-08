import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CategoryLogo } from "../../assets/img/category_logo/rander"
import { Link } from "react-router-dom"

export const  PrimeryColor = () => {
    return (
        <div class="tpservice mb-20 tp-sv-color-2 flex-grow">
            <div class="tpservice__icon tpservice__icon-2">
                {/* <a href="#">
                    <i class="flaticon-health-insurance"></i>
                </a> */}
                <Link to={'/'} className="text-white font-bold">
                    <img src={CategoryLogo?.man} alt={CategoryLogo?.man} />
                </Link>
            </div>
            <div class="tpservice__title">
                <h4 class="tp-sv-title text-sm lg:whitespace-nowrap">
                    <Link to={'/culural'} className="text-white no-underline"> Cultural </Link> 
                </h4>
            </div>
            <div class="tpservice__circle">
                <span></span>
                <span></span>
                <span></span>
            </div>
    </div>
    )
}



