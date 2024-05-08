import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CategoryLogo } from "../../assets/img/category_logo/rander"
import { Link } from "react-router-dom"

export const  PrimeryColor = ({iconPath, path, colorThem}) => {
    if(colorThem > 6){
       return <p>this colorThem 1 to 6</p>
    }
    return (
            <div className={`tpservice__icon tpservice__icon-${colorThem?  colorThem : 1} flex flex-col items-center justify-center`}>
                <Link to={path} className="text-white font-bold">
                    <img src={iconPath} alt={iconPath} className="w-12 h-12" />
                </Link>
            </div>
    )
}



