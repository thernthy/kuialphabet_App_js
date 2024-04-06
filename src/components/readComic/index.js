import { FaStar } from "react-icons/fa";
import { formatDate } from "../dateFormating/DateFormating";
import { formatDate2 } from "../dateFormating/DateFormating";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const ReadComic = ({
    comic_img_path,
    comic_server_site
}) => {
    // const src = poster.startsWith('images/') ? `https://www.kotv-001.com/${poster}` : poster;
    const comicBooks = JSON.parse(comic_img_path, true)
    return (
        <div className="col-md-12 col-lg-12 py-5 h-100" style={{
                display:"flex",
                flexDirection: "column", 
                alignItems: "center", 
                justifyContent: "center"
            }}>
            <div style={{
                width:"100%",
                padding:"0 20px", 
                position: "fixed", 
                top:"50%", 
                left:"0", 
                transform:"translateY(-50%)",
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center"
                }}>
                <span className="h3 text-success shadow-sm py-2 px-2 rounded-pill"><FontAwesomeIcon icon={faArrowAltCircleLeft} /></span>
                <span className="h3 text-success shadow-sm py-2 px-2 rounded-pill"><FontAwesomeIcon icon={faArrowAltCircleRight} /></span>
            </div>
            {comicBooks?.map((item, idex)=>(
                 <img key={idex} src={ comic_server_site===1?"https://joatoon24.com/"+item:item} alt={item} style={{width: "90%"}} />
             ))

            }
           
        </div>
    )
}

export default ReadComic