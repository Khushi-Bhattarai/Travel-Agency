import Destination from '../../data/destination';
import DestinationCard from '../../components/PopularDestination/DestinationCard';

function Destinations() {

  return (
    <main className="dest">
      <h1>Explore Destinations </h1>
      <p>Explore our amazing destinations and plan your dream vacation!</p>

      <div className="cards destinations">
        {
          Destination.map((destination) => {
            return (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            )
          })
        }

      </div>
    </main>
  )
}

export default Destinations