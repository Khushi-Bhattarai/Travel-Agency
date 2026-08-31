import { useParams, Link } from "react-router-dom";
import Destination from "../../components/PopularDestination/destination";

function DestinationDetail() {

    const { destinationId } = useParams();

    const destination = Destination.find((item) => item.id === destinationId);

    if (!destination) {
        return <h1>Destination not found</h1>;
    }

    return (

        <section>

            <h1>{destination.country}</h1>

            <img
                src={destination.image}
                alt={destination.country}
            />

            <p>{destination.description}</p>

            <p>Rating: {destination.rating}</p>

            <p>Rs. {destination.price.toLocaleString()}</p>

            <p>Duration: {destination.duration} days</p>

            <Link 
            to={`/booking/${destinationId}`}>
                Book Now
            </Link>

        </section >




    )
}

export default DestinationDetail
