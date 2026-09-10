import TourPackagesData from "../../data/TourPackagesData";
import PackageCard from "./PackageCard";
import SectionTitle from '../SectionTitle/SectionTitle';
import './TourPackages.css'

function TourPackages() {
    return (
        <section className="tour-packages" id="tours">
            <SectionTitle>Featured Tour Packages</SectionTitle>
            <div className="cards packages">
                {
                    TourPackagesData.map((tourPackage) => {
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