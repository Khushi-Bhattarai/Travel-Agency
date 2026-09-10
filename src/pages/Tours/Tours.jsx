import { useState } from 'react';
import TourPackagesData from '../../data/TourPackagesData';
import TourFeaturedCard from '../../components/TourPackages/PackageCard';
import './Tours.css';

function Tours() {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentPagePackages = TourPackagesData.slice(startIndex, startIndex + itemsPerPage);
    const totalPage = Math.ceil(TourPackagesData.length / itemsPerPage);

    return (
        <main className='tourPack'>
            <h1>Tour Packages</h1>
            <p>Explore our available tour packages.</p>
            <div className="cards packages">
                {
                    currentPagePackages.map((tourPackage) => {
                        return (
                            <TourFeaturedCard
                                key={tourPackage.id}
                                tourPackage={tourPackage}
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

                {Array.from({ length: totalPage }).map((_, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={currentPage === index + 1 ? "active" : ""}
                        >
                            {index + 1}
                        </button>
                    )
                })}

                <button
                    onClick={() => setCurrentPage((page) => page + 1)}
                    disabled = {currentPage === totalPage}
                >
                    Next
                </button>

            </div>
        </main>
    );
}

export default Tours;