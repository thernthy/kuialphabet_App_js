import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CategoryLogo } from "../../assets/img/category_logo/rander"
import { Link } from "react-router-dom"
import { useCategory } from "../../hooks/hookCategories";

export const  PrimeryColor = ({iconPath, path, colorThem, fileColor}) => {
    if(colorThem > 6){
       return <p>this colorThem 1 to 6</p>
    }
    return (
        <div className=" rounded-full h-6 w-6  flex flex-col items-center justify-center" style={{backgroundColor:fileColor}}>
            <img src={`${process.env.REACT_APP_BASED_URL}storage/${iconPath}`} alt={iconPath} className="w-4 h-4" />
        </div>
            // <div className={`tpservice__icon tpservice__icon-${colorThem?  colorThem : 1} flex flex-col items-center justify-center`}>
            //     <Link to={path} className="text-white font-bold">
            //         <img src={iconPath} alt={iconPath} className="w-12 h-12" />
            //     </Link>
            // </div>
    )
}



