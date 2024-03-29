import { FaStar } from "react-icons/fa";

const MovieItem = ({
    poster,
    title,
    year,
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

    return (
        <div className="col-md-12 col-lg-12 py-5 h-100">
            <div className="row g-0 border border-light rounded-3 overflow-hidden flex-md-row shadow">
                <div className="col-auto">
                    <img
                        className="img-fluid"
                        src={poster}
                        alt="movie poster"
                        style={{height:'300px'}}
                    />
                </div>
                <div className="col p-4 d-flex flex-column position-static">
                    <div className="">
                        <h1 className="pb-3 pt-4">{title} ({year})</h1>
                        <span className="fs-5">
                            <FaStar className="text-warning pe-1" size='24' />
                            ({rating}/10)
                        </span>
                        <hr />
                        <p className="px-4">
                            집 나간 부모님, 부양해야 할 강아지 때문에 20대 초반에 알바력 만렙을 찍어버린 대학생 강반사. 
                            지루한 일상에 새로운 일이 생겼으면 좋겠다고 생각하던 반사의 앞에, 
                            한 잘생긴 남자가 나타나 반사가 자신의 운명의 짝이라고 하는데?! 
                            완벽한 자신의 짝을 추첨으로 뽑았다는 그는 알고보니 세계적인 군만두 재벌 선우도였다. 
                            말도 안 되는 이 또라이를 쫓아내!!....기엔 너무나 부자인 우도! 반사는 과연 우도와 평범한 사랑을 할 수 있을까?
                        </p>
                        <p className="pt-2">
                            {released} ({country})
                            <span className="fw-bold fs-3"> . </span>
                            {rated}
                            <span className="fw-bold fs-3"> . </span>
                            {genres}
                            <span className="fw-bold fs-3"> . </span>
                            {runtime}
                        </p>
                        <div className="col-12 d-flex justify-content-end px-5">
                            <button className="btn btn-warning mx-3 text-white" style={{width:'150px'}}>서표</button>
                            <button className="btn btn-success mx-3 text-white" style={{width:'150px'}}>읽다</button>
                        </div>
                    </div>
                    {/* <div className='content'>
                        <div className="pt-3">
                            <p className="fw-semibold fs-4">Overview</p>
                            <p>{plot}</p>
                        </div>
                        <div className="pt-2">
                            <span className="fw-semibold fs-5">Director: </span>
                            <span>{director}</span>
                        </div>
                        <div className="pt-2">
                            <span className="fw-semibold fs-5">Writer: </span>
                            <span>{writer}</span>
                        </div>
                        <div className="pt-3">
                            <span className="fw-semibold fs-5">The Cast: </span>
                            <span>{actors}</span>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="d-flex row h-100 w-100 mt-5 px-5 py-4">
                        {images && images?.map((item, index) => (
                            <div key={index} className="d-flex " style={{  marginBottom:'10px'}}>
                                <b className="px-4">{index + 1}</b>
                                <img
                                    className=""
                                    src={poster}
                                    alt="movie poster"
                                    style={{height:'100px', width:'100px'}}
                                />
                                <div className="px-2">
                                   <h4>{title} ({year})</h4>
                                    <p>
                                        {released} . <span className="text-success">{runtime}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
            </div>
        </div>
    )
}

export default MovieItem