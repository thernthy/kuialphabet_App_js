import { useMovieDetail } from "../../hooks/useMovieDetail";
import MovieItem from "../../components/MovieItem";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import ReadComic from "../../components/readComic";
import { useViewComic } from "../../hooks/viewComic";


const ViewMovie = () => {
    const { data, isLoading, error, refetch } = useViewComic()
    const renderDetails = () => {
        
        if (isLoading) {
            return <Loading />
        }

        if (error) {
            return <ErrorMessage refetch={refetch}/>
        }

        return (
            <ReadComic 
                key={data.data?.comic_ep_id}
                comic_img_path={data.data?.comic_img_path}
                comic_ep={data.data?.comic_ep}
                comic_server_site={data.data?.comic_server_site}
                created_at={data.data?.created_at}
            />
        )

    }


    return (
        <div className="min-vh-100">
            <div className="container">
                <div className="row">
                    {renderDetails()}
                </div>
            </div>
        </div>
    );
};
export default ViewMovie