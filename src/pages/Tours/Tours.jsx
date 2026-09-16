import { useState } from 'react';
import TourPackagesData from '../../data/TourPackagesData';
import TourFeaturedCard from '../../components/TourPackages/PackageCard';
import Pagination from '../../components/Pagination/Pagination';
import './Tours.css';

function Tours() {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentPagePackages = TourPackagesData.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(TourPackagesData.length / itemsPerPage);

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

       
            <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />

        </main>
    );
}

export default Tours;