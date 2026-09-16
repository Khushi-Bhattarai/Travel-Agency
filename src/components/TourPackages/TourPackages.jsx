import TourPackagesData from "../../data/TourPackagesData";
import PackageCard from "./PackageCard";
import SectionTitle from '../SectionTitle/SectionTitle';
import './TourPackages.css'

function TourPackages() {

    const featuredTours = TourPackagesData.filter((tour) => tour.featured).slice(0,2);

    return (
        <section className="tour-packages" id="tours">
            <SectionTitle>Featured Tour Packages</SectionTitle>
            <div className="cards packages">
                {
                    featuredTours.map((tourPackage) => {
                        return (
                            <PackageCard key={tourPackage.id}
                                tourPackage={tourPackage}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default TourPackages