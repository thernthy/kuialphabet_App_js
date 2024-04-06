
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import Pagination from "../../components/Pagination";
import MovieCards from "../../components/MovieCards";

import "./style.css";
import { useCategory } from "../../hooks/useCategory";

const ViewCategory = () => {
    const {data, isLoading, error, setPage, pageCount, refetch} = useCategory()
    const renderGenre = () => {
        if (isLoading) {
            return <Loading />
        }

        if (error) {
            return <ErrorMessage refetch={refetch} />
        }
        return data.data?.map(movie => {
            return (
                <MovieCards
                    key={movie.comic_title_id}
                    title={movie.title}
                    poster={movie.photo_cover_path}
                    id={movie.comic_title_id}
                    genres={movie?.genres?.join(', ')}
                    year={movie.created_at}
                    rating={movie.imdb_rating}
                />
            );
        })

    }


    return (
        <div className="container" style={{paddingTop:"8rem"}}>
            <div className="album py-5 bg-body-tertiary genre__page">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 g-3">
                        {renderGenre()}
                    </div>
                </div>
            </div>
            <Pagination
                setPage={setPage}
                pageCount={pageCount}
            />
        </div>
    )
}

export default ViewCategory