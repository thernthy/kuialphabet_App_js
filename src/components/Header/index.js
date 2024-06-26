import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../contexts/auth-provider";
import { FiLogOut } from "react-icons/fi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faSignIn } from '@fortawesome/free-solid-svg-icons';
import SearchForm from "../SearchForm";
import Logo from "../../assets/logo/logo.jpg"
import './style.css';
import { menueColor } from "../../template/menu_color";

const Header = () => {
    const { handleModalLogin, handleModalRegister, logged,  setLogged } = useContext(authContext)
    const handleLogout = () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        setLogged(false)
    }

    return (
        <header className="p-3 top-0" style={{width:"100%", position:"fixed", zIndex:"1000", backgroundColor: "#106FBB"}}>
            <div className="container-fluid">
                <div className="d-flex flex-wrap align-items-end justify-content-center justify-content-lg-between">
                    <Link to="/" className="text-decoration-none mb-lg-0 mb-md-2">
                        {/* <h1 className="fs-3 fw-normal m-0">만<span className="fw-bold">화</span></h1> */}
                        <img src={Logo} alt={Logo} style={{height:"80px"}}/>
                    </Link>
                    <ul className="nav col-12 col-lg-auto sm-pt-2 justify-content-center align-items-center mb-lg-0 mb-md-2 fw-semibold text-white">
                        <Link to="/" className="text-decoration-none" style={{color: menueColor.color}}>
                            <li className="nav-item px-3">연재웹툰</li>
                        </Link>
                        <Link to="/completed" className="text-decoration-none" style={{color: menueColor.color}}>
                            <li className="nav-item px-3">완결웹툰</li>
                        </Link>
                         {/* <li className="nav-item px-3 dropdown" style={{cursor:"pointer"}}>
                            <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{color: menueColor.color}}>필터링 기준</span>
                            <ul className="dropdown-menu genres__box">
                                {renderGenres()}
                            </ul>
                        </li> */}
                        {/* <Link to="/comic" className="text-white text-decoration-none">
                            <li className="nav-item px-3">코믹스</li>
                        </Link> */}
                        <Link to="https://www.kotv-001.com" className="text-decoration-none" style={{color: menueColor.color}}>
                            <li className="nav-item px-3">영화</li>
                        </Link>
                    </ul>
                    <div className="col-12 col-lg-6 mb-md-2 mb-lg-0 flex flex-row items-center ">
                        <SearchForm />
                                < div className="text-end">
                                    <button
                                        type="button"
                                        className="btn  text-warning btn-lg me-2"
                                        onClick={handleModalLogin}
                                    >
                                        <FontAwesomeIcon icon={faCircleUser} /> <span className="mr-2" style={{color: menueColor.color}}>로그인</span>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn text-warning btn-lg"
                                        onClick={handleModalRegister}
                                    >
                                        <FontAwesomeIcon icon={faSignIn} /> <span className="mr-2 " style={{color: menueColor.color}}>노래하다</span>
                                    </button>
                                </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header