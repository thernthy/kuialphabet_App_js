import { useMovieDetail } from "../../hooks/useMovieDetail";
import MovieItem from "../../components/MovieItem";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import ReadComic from "../../components/readComic";
import { useViewComic } from "../../hooks/viewComic";
import { useEffect } from "react";


const ViewMovie = () => {
    const { data, isLoading, error, refetch } = useViewComic()
    const setLogin = () => {
        refetch();
        window.scrollTo(0, 0);
    }
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
            <ReadComic 
                key={data.data?.comic_ep_id}
                id={data.id}
                isLoading={setLogin}
                title={data.title}
                comic_img_path={data.data?.comic_img_path}
                comic_ep={data.data?.comic_ep}
                maxPart={data.mp}
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