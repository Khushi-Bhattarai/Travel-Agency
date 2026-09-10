import { useParams, Link } from "react-router-dom";
import TourPackagesData from "../../data/TourPackagesData";
import './ToursDetail.css';

function TourPackageDetail() {

    const { tourPackageId } = useParams();

    const tourPackage = TourPackagesData.find((item) => item.id === tourPackageId);

    if (!tourPackage) {
        return <h1>Tour Package not found</h1>;
    }

    return (

        <section className="tour-package-detail">

            <h1>{tourPackage.title}</h1>

            <img
                src={tourPackage.image}
                alt={tourPackage.title}
            />

            <div className="tour-package-info">

                <p>{tourPackage.description}</p>

                <p>Duration: {tourPackage.duration} days</p>

                <p>Price: Rs. {tourPackage.price.toLocaleString()}</p>

                <Link
                    to={`/booking/tours/${tourPackageId}`}>
                    Book Now
                </Link>
            </div>

        </section >




    )
}

export default TourPackageDetail
