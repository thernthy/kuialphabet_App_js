import { Route, Routes, Navigate } from "react-router-dom";
import * as paths from "./route-paths";
import Home from '../pages/Home';
import AuthLayout from "../layouts/authLayout";
import NotFound from '../components/NotFound'
import Words from "../pages/words";
import { About } from "../pages/about";

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
            <Route
                exact
                path={paths.ABOUT}
                element={<About />}
            />
            <Route element={<AuthLayout />} >
            </Route>
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