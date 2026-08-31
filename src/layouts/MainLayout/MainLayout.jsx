import { Outlet } from "react-router-dom";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from "../../hooks/ScrollToTop";

function MainLayout() {
  return (
    <>

    <ScrollToTop />

        <Header />

        <main>
            <Outlet />
        </main>

        <Footer />

    </>
  )
}

export default MainLayout