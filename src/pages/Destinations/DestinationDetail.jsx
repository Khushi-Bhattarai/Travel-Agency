import { useParams, Link } from "react-router-dom";
import Destination from "../../data/destination";
import './DestinationDetail.css';

function DestinationDetail() {

    const { destinationId } = useParams();

    const destination = Destination.find((item) => item.id === destinationId);

    if (!destination) {
        return <h1>Destination not found</h1>;
    }

    return (

        <section className="destination-detail">

            <h1>{destination.country}</h1>

            <img
                src={destination.image}
                alt={destination.country}
            />

            <div className="destination-info">
                <p>{destination.description}</p>

                <p>Rating: {destination.rating}</p>

                <p>Rs. {destination.price.toLocaleString()}</p>

                <p>Duration: {destination.duration} days</p>

                <Link
                    to={`/booking/destinations/${destinationId}`}>
                    Book Now
                </Link>
            </div>

        </section >




    )
}

export default DestinationDetail
