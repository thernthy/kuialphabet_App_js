import { Route, Routes, Navigate } from "react-router-dom";
import * as paths from "./route-paths";
import Home from '../pages/Home';
import AuthLayout from "../layouts/authLayout";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import NotFound from '../components/NotFound'
import Words from "../pages/words";

const AllRoutes = () => {
    return (
        <Routes>
            <Route
                exact
                path={paths.HOME}
                element={<Home />}
            />
            <Route
                exact
                path={paths.WORDS}
                element={<Words />}
            />
            <Route element={<AuthLayout />} >
                <Route
                    exact
                    path={paths.LOGIN}
                    element={<Login />}
                />
                <Route
                    exact
                    path={paths.REGISTER}
                    element={<Register />}
                />
            </Route>
            {/* <Route
                exact
                path={paths.MOVIEDETAILS}
                element={<MovieDetails />}
            /> */}
            {/* <Route
                exact
                path={paths.VIEWMOVIES}
                element={<ViewMovie />}
            /> */}
            {/* <Route
                exact
                path={paths.GENRE}
                element={<Genre />}
            /> */}
            {/* <Route
                exact
                path={paths.FILTERCATEGORY}
                element={<ViewCategory />}
            /> */}

            <Route
                exact
                path={paths.NOTFOUND}
                element={<NotFound />}
            />
            <Route
                exact
                path="*"
                element={<Navigate to="/404" />}
            />
        </Routes>

    )
}

export default AllRoutes;