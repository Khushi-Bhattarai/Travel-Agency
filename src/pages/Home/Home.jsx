import Hero from '../../components/Hero/Hero';
import PopularDestination from '../../components/PopularDestination/PopularDestination';
import TourPackages from '../../components/TourPackages/TourPackages';
import Testimonials from '../../components/Testimonials/Testimonials';
import Newsletter from '../../components/Newsletter/Newsletter';

function Home() {
    return (
        <>
                <Hero />
                <PopularDestination />
                <TourPackages />
                <Testimonials />
                <Newsletter />
        </>
    );
}

export default Home;