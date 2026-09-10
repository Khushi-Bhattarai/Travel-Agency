import { useState } from 'react';
import Destination from '../../data/destination';
import DestinationCard from '../../components/PopularDestination/DestinationCard';
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

      <div className="pagination">

        <button
          onClick={() => setCurrentPage((page) => page - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }).map((_, index) => {
          return (

            <button
              key={index}
              className={currentPage === index + 1 ? "active" : ""}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          )

        })}

        <button
          onClick={() => setCurrentPage((page) => page + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>

      </div>
    </main>
  )
}

export default Destinations