import { useState } from 'react';
import Destination from '../../data/destination';
import DestinationCard from '../../components/PopularDestination/DestinationCard';
import Pagination from '../../components/Pagination/Pagination';
import './Destinations.css';

function Destinations() {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentDestinations = Destination.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(Destination.length / itemsPerPage);

  return (
    <main className="dest">

      <h1>Explore Destinations </h1>
      <p>Explore our amazing destinations and plan your dream vacation!</p>

      <div className="cards destinations">
        {
          currentDestinations.map((destination) => {
            return (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            )
          })
        }
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

    </main>
  )
}

export default Destinations