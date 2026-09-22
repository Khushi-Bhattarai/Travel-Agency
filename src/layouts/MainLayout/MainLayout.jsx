import { Outlet } from "react-router-dom";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from "../../hooks/ScrollToTop";
import './MainLayout.css';

function MainLayout() {
  return (
    <>

      <ScrollToTop />

      <div className="mainLayout">

        <Header />

        <main>
          <Outlet />
        </main>

        <Footer />

      </div>

    </>
  )
}

export default MainLayout