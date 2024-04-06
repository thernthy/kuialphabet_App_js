import { useMovieDetail } from "../../hooks/useMovieDetail";
import MovieItem from "../../components/MovieItem";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { useEffect} from "react";

const MovieDetails = () => {
    const { data, isLoading, error, refetch } = useMovieDetail()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const renderDetails = () => {

        if (isLoading) {
            return <Loading />
        }

        if (error) {
            return <ErrorMessage refetch={refetch}/>
        }

        return (
            <MovieItem
                key={data.targetData?.comic_title_id}
                id={data.targetData?.comic_title_id}
                title={data.targetData?.title}
                part={data.targetData?.comic_ep}
                poster={data.targetData?.photo_cover_path}
                created_at={data.targetData?.created_at}
                dcr={data.targetData?.comic_dcr}
                comic_ep={data?.comicEpData}
                released={data?.released}
                runtime={data?.runtime}
                genres={data?.genres?.join(', ')}
                country={data?.country}
                plot={data?.plot}
                director={data?.director}
                actors={data?.actors}
                rated={data?.rated}
                rating={data?.imdb_rating}
                writer={data?.writer}
                images={data?.images}
            />
        )

    }


    return (
        <div className="min-vh-100">
            <div className="container" style={{paddingTop:"8rem"}}>
                <div className="row">
                    {renderDetails()}
                </div>
            </div>
        </div>
    );
};

export default MovieDetails