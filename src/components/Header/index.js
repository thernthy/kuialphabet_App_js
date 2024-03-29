import { useContext } from "react";
import { Link } from "react-router-dom";
import { genresContext } from "../../contexts/genres-provider";
import { authContext } from "../../contexts/auth-provider";
import { FaRegUser } from "react-icons/fa";
import { MdMovieEdit } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faSignIn, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import SearchForm from "../SearchForm";

import './style.css';

const Header = () => {
    const { data } = useContext(genresContext)
    const { handleModalLogin, handleModalRegister, logged, setLogged } = useContext(authContext)

    const renderGenres = () => {
        return data?.sort((a, b) => a.name.localeCompare(b.name))
            .map(genre => {
                return (
                    <Link
                        className="text-decoration-none text-primary"
                        to={`/genre/${genre.id}-${genre.name}`}
                        key={genre.id}
                    >
                        <li className="dropdown-item" key={genre.id}>{genre.name}</li>
                    </Link>
                );
            })
    }

    return (
        <header className="p-3 text-bg-success">
            <div className="container-fluid">
                <div className="d-flex flex-wrap align-items-end justify-content-center justify-content-lg-between">
                    <Link to="/" className="text-white text-decoration-none mb-lg-0 mb-md-2">
                        <h1 className="fs-3 fw-normal m-0">만<span className="fw-bold">화</span></h1>
                    </Link>

                    <ul className="nav col-12 col-lg-auto justify-content-center align-items-center mb-lg-0 mb-md-2 fw-semibold text-white">
                        <Link to="/" className="text-white text-decoration-none">
                            <li className="nav-item px-3">연재웹툰</li>
                        </Link>
                        <Link to="/completed" className="text-white text-decoration-none">
                            <li className="nav-item px-3">완결웹툰</li>
                        </Link>
                        <Link to="/comic" className="text-white text-decoration-none">
                            <li className="nav-item px-3">코믹스</li>
                        </Link>
                        <Link to="https://www.kotv-001.com" className="text-white text-decoration-none">
                            <li className="nav-item px-3">영화</li>
                        </Link>
                        {/* <li className="nav-item px-3 dropdown">
                            <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Genres</span>
                            <ul className="dropdown-menu genres__box">
                                {renderGenres()}
                            </ul>
                        </li> */}
                    </ul>
                    <div className="col-12 col-lg-6 mb-md-2 mb-lg-0 justify-content-center">
                        {logged ? (
                            <div className="d-flex row dropdown text-white">
                                <span className="dropdown-toggle fw-semibold" data-bs-toggle="dropdown" aria-expanded="false">My Account</span>
                                <ul className="dropdown-menu text-small text-white">
                                    <Link to="/profile" className="text-dark text-decoration-none">
                                        <li className="dropdown-item">
                                            <span>
                                                <FaRegUser size='20' />
                                            </span>
                                            <span className="ps-2 fw-semibold mb-0">Profile</span>
                                        </li>
                                    </Link>
                                    <Link to="/newmovie" className="text-dark text-decoration-none">
                                        <li className="dropdown-item">
                                            <span>
                                                <MdMovieEdit size='22' />
                                            </span>
                                            <span className="ps-2 fw-semibold">Add Movie</span>
                                        </li>
                                    </Link>
                                    <li><hr className="dropdown-divider" /></li>
                                    <Link to="/" className="text-dark text-decoration-none">
                                        <li className="dropdown-item" onClick={() => setLogged(false)}>
                                            <span>
                                                <FiLogOut size='20' />
                                            </span>
                                            <span className="ps-2 fw-semibold">Log Out</span>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                            ) : (
                                < div className="text-end">
                                    <button
                                        type="button"
                                        className="btn  text-warning btn-lg me-2"
                                        onClick={handleModalLogin}
                                    >
                                        <FontAwesomeIcon icon={faCircleUser} /> <span className="mr-2 text-white">로그인</span>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn text-warning btn-lg"
                                        onClick={handleModalRegister}
                                    >
                                        <FontAwesomeIcon icon={faSignIn} /> <span className="mr-2 text-white">노래하다</span>
                                    </button>
                                </div>
                            )
                        }
                        <SearchForm />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header