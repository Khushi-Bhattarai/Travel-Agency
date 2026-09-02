import { useParams, Link } from "react-router-dom";
import TourPackagesData from "../../components/TourPackages/TourPackagesData";

function TourPackageDetail() {

    const { tourPackageId } = useParams();

    const tourPackage = TourPackagesData.find((item) => item.id === tourPackageId);

    if (!tourPackage) {
        return <h1>Tour Package not found</h1>;
    }

    return (

        <section>

            <h1>{tourPackage.title}</h1>

            <img
                src={tourPackage.image}
                alt={tourPackage.title}
            />

            <p>{tourPackage.description}</p>

            <p>Rs. {tourPackage.price.toLocaleString()}</p>

            <p>Duration: {tourPackage.duration} days</p>

            <Link 
            to={`/booking/tourPackages/${tourPackageId}`}>
                Book Now
            </Link>

        </section >




    )
}

export default TourPackageDetail
