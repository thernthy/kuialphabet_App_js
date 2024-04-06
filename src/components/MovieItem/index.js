import { FaPatreon, FaStar } from "react-icons/fa";
import { formatDate } from "../dateFormating/DateFormating";
import { formatDate2 } from "../dateFormating/DateFormating";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckMoving } from "@fortawesome/free-solid-svg-icons";
const MovieItem = ({
    id,
    poster,
    title,
    part,
    created_at,
    dcr,
    comic_ep,
    released,
    genres,
    runtime,
    country,
    plot,
    director,
    actors,
    rated,
    rating,
    writer,
    images
}) => {
    const src = poster.startsWith('images/') ? `https://www.kotv-001.com/${poster}` : poster;
    
    return (
        <div className="col-md-12 col-lg-12 py-5 h-100">
            <div className="row g-0 border border-light rounded-3 overflow-hidden flex-md-row shadow">
                    <div className="col-auto">
                        <img
                            className="img-fluid"
                            src={src}
                            alt="movie poster"
                            style={{height:'300px'}}
                        />
                    </div>
                    <div className="col p-4 d-flex flex-column position-static">
                        <div className="">
                            <h1 className="pb-3 pt-4">{title} {formatDate2(created_at, "time")}</h1>
                            <span className="fs-5">
                                {/* <FaStar className="text-warning pe-1" size='24' /> */}
                                ({part}/{comic_ep.length})
                            </span>
                            <hr />
                            <p className="px-4">
                                {dcr}
                            </p>
                            <p className="pt-2">
                                {formatDate2(created_at)}
                            </p>
                            <div className="col-12 d-flex justify-content-end px-5">
                                <button className="btn btn-warning mx-3 text-white" style={{width:'150px'}}>서표</button>
                                <button className="btn btn-success mx-3 text-white" style={{width:'150px'}}>
                                    <Link to={`/moviedetails/view/${id}/${title}/${comic_ep.length}/${part}`}>읽다</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap h-100 w-100 mt-5 px-5 py-4">
                            {comic_ep && comic_ep?.map((item, index) => (
                                <Link to={`/moviedetails/view/${id}/${title}/${comic_ep.length}/${item.comic_ep}`}>
                                    <div key={index} className="d-flex " style={{  marginBottom:'10px'}}>
                                        <b className="px-4">{index + 1}</b>
                                        <img
                                            className=""
                                            src={poster.startsWith('images/')?`https://www.kotv-001.com/${poster}`: poster}
                                            alt="movie poster"
                                            style={{height:'100px', width:'100px'}}
                                        />
                                        <div className="px-2">
                                        <h4>{item.title} <span className="text-success font-sm">{formatDate(item.created_at)}</span></h4>
                                            <p>
                                                {released} . <span className="text-success">{runtime}</span>
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                </div>
            </div>
        </div>
    )
}

export default MovieItem