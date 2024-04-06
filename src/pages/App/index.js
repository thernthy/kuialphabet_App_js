import { useEffect, useState } from 'react';
import { BrowserRouter } from "react-router-dom";

import AuthProvider from "../../contexts/auth-provider";
import GenresProvider from "../../contexts/genres-provider";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import Modal from '../Authentication/components/Modal';
import AllRoutes from "../../config/all-routes";
import { getPosterBanner } from '../../hooks/posterBanner';

const App = () => {
  const [bannerData, setBannerData] = useState([])
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getPosterBanner("new", "200", "150", setBannerData);
    setTimeout(() => setLoading(false), 1000);
  }, []);
  console.log(bannerData)
  return loading ? (
    <Loading />
  ) : (
    <BrowserRouter>
      <AuthProvider>
        <Modal />
        <GenresProvider>
          <Header />
          <AllRoutes />
        </GenresProvider>
      </AuthProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;