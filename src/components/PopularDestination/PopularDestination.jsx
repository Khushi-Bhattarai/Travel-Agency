import Destination from '../../data/destination';
import DestinationCard from './DestinationCard';
import SectionTitle from '../SectionTitle/SectionTitle';
import './PopularDestination.css';

function PopularDestination() {

    const popularDestinations = Destination.filter((destination) => destination.featured).slice(0,4);

    return (
        <section className="popular-destination" id='popular-destination'>
            <SectionTitle>Popular Destinations</SectionTitle>
            <div className="cards destinations">
                {
                    popularDestinations.map((destination) => {
                        return (
                            <DestinationCard
                                key={destination.id}
                                destination = {destination}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default PopularDestination