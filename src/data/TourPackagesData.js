import eiffelTower from '../assets/eiffel_tower.avif';
import canadaSea from '../assets/canada_sea.avif';
import tokyo from '../assets/tokyo.avif';
import Swiss_Alps_Escape from '../assets/Swiss_Alps_Escape.avif';
import dubai_luxury_tour from '../assets/dubai_luxury_tour.avif';
import Bali_Beach_Holiday from '../assets/Bali_Beach_Holiday.avif';
import Singapore_Explorer from '../assets/Singapore_Explorer.avif';
import Thailand_Adventure from '../assets/Thailand_Adventure.avif';
import Maldives_Retreat from '../assets/Maldives_Retreat.avif';
import London_Discovery from '../assets/London_Discovery.avif';
import New_York_Experience from '../assets/New_York_Experience.avif';
import Australian_Adventure from '../assets/Australian_Adventure.avif';
import Greek_Island_Escape from '../assets/Greek_Island_Escape.avif';
import Istanbul_Heritage_Tour from '../assets/Istanbul_Heritage_Tour.avif';
import Egypt_Ancient_Wonders from '../assets/Egypt_Ancient_Wonders.avif';
import New_Zealand_Nature_Tour from '../assets/New_Zealand_Nature_Tour.avif';
import Rome_Heritage_Tour from '../assets/Rome_Heritage_Tour.avif';
import Santorini_Luxury_Escape from '../assets/Santorini_Luxury_Escape.avif';
import Japan_Cultural_Journey from '../assets/Japan_Cultural_Journey.avif';
import Norway_Northern_Lights from '../assets/Norway_Northern_Lights.avif';
import Dubai_Desert_Adventure from '../assets/Dubai_Desert_Adventure.avif';
import Hawaii_Beach_Escape from '../assets/Hawaii_Beach_Escape.avif';
import Bhutan_Cultural_Tour from '../assets/Bhutan_Cultural_Tour.avif';
import Nepal_Himalayan_Adventure from '../assets/Nepal_Himalayan_Adventure.avif';
import Malaysian_City_Escape from '../assets/Malaysian_City_Escape.avif';
import Fiji_Island_Retreat from '../assets/Fiji_Island_Retreat.avif';
import Swiss_Luxury_Experience from '../assets/Swiss_Luxury_Experience.avif';
import Amsterdam_City_Tour from '../assets/Amsterdam_City_Tour.avif';
import Kenya_Safari_Adventure from '../assets/Kenya_Safari_Adventure.avif';
import Portugal_Coastal_Escape from '../assets/Portugal_Coastal_Escape.avif';


const TourPackagesData = [

    {
        id: 'TP1',
        image: eiffelTower,
        title: 'Paris Tour',
        description: 'Explore the romantic city of Paris and its iconic landmarks.',
        duration: 7,
        price: 100000,
        featured: true,
        category: 'City'
    },
    {
        id: 'TP2',
        image: canadaSea,
        title: 'Canada Tour',
        description: 'Experience the breathtaking landscapes and vibrant cities of Canada.',
        duration: 10,
        price: 150000,
        featured: true,
        category: 'Nature'
    },
    {
        id: 'TP3',
        image: tokyo,
        title: 'Tokyo Adventure',
        description: 'Discover the modern streets, traditional temples, and unique culture of Tokyo.',
        duration: 8,
        price: 125000,
        featured: true,
        category: 'City'
    },
    {
        id: 'TP4',
        image: Swiss_Alps_Escape,
        title: 'Swiss Alps Escape',
        description: 'Enjoy stunning mountain views, peaceful villages, and the Swiss Alps.',
        duration: 9,
        price: 180000,
        featured: true,
        category: 'Adventure'
    },
    {
        id: 'TP5',
        image: dubai_luxury_tour,
        title: 'Dubai Luxury Tour',
        description: 'Experience luxury shopping, modern architecture, and desert adventures.',
        duration: 6,
        price: 95000,
        featured: false,
        category: 'Luxury'
    },
    {
        id: 'TP6',
        image: Bali_Beach_Holiday,
        title: 'Bali Beach Holiday',
        description: 'Relax on beautiful beaches and explore the natural beauty of Bali.',
        duration: 7,
        price: 85000,
        featured: true,
        category: 'Beach'
    },
    {
        id: 'TP7',
        image: Singapore_Explorer,
        title: 'Singapore Explorer',
        description: 'Explore futuristic attractions, gardens, and cultural neighbourhoods in Singapore.',
        duration: 5,
        price: 90000,
        featured: false,
        category: 'City'
    },
    {
        id: 'TP8',
        image: Thailand_Adventure,
        title: 'Thailand Adventure',
        description: 'Discover tropical islands, local culture, and exciting outdoor activities.',
        duration: 8,
        price: 80000,
        featured: true,
        category: 'Adventure'
    },
    {
        id: 'TP9',
        image: Maldives_Retreat,
        title: 'Maldives Retreat',
        description: 'Enjoy crystal-clear waters, peaceful beaches, and a relaxing island escape.',
        duration: 5,
        price: 140000,
        featured: true,
        category: 'Beach'
    },
    {
        id: 'TP10',
        image: London_Discovery,
        title: 'London Discovery',
        description: 'Visit historic landmarks, royal attractions, museums, and famous streets.',
        duration: 7,
        price: 135000,
        featured: false,
        category: 'City'
    },
    {
        id: 'TP11',
        image: New_York_Experience,
        title: 'New York Experience',
        description: 'Explore Times Square, Central Park, museums, and the vibrant city life of New York.',
        duration: 7,
        price: 160000,
        featured: true,
        category: 'City'
    },
    {
        id: 'TP12',
        image: Australian_Adventure,
        title: 'Australian Adventure',
        description: 'Discover beautiful coastlines, wildlife, and exciting Australian cities.',
        duration: 12,
        price: 190000,
        featured: false,
        category: 'Adventure'
    },
    {
        id: 'TP13',
        image: Greek_Island_Escape,
        title: 'Greek Island Escape',
        description: 'Relax among beautiful islands, coastal villages, and Mediterranean scenery.',
        duration: 8,
        price: 145000,
        featured: true,
        category: 'Beach'
    },
    {
        id: 'TP14',
        image: Istanbul_Heritage_Tour,
        title: 'Istanbul Heritage Tour',
        description: 'Explore historic mosques, bazaars, palaces, and the unique culture of Istanbul.',
        duration: 6,
        price: 85000,
        featured: false,
        category: 'Cultural'
    },
    {
        id: 'TP15',
        image: Egypt_Ancient_Wonders,
        title: 'Egypt Ancient Wonders',
        description: 'Discover the pyramids, ancient temples, museums, and history of Egypt.',
        duration: 8,
        price: 110000,
        featured: true,
        category: 'Cultural'
    },
    {
        id: 'TP16',
        image: New_Zealand_Nature_Tour,
        title: 'New Zealand Nature Tour',
        description: 'Experience spectacular mountains, lakes, forests, and peaceful landscapes.',
        duration: 11,
        price: 175000,
        featured: true,
        category: 'Nature'
    },
    {
        id: 'TP17',
        image: Rome_Heritage_Tour,
        title: 'Rome Heritage Tour',
        description: 'Step into history while exploring ancient ruins, art, and Italian culture.',
        duration: 7,
        price: 115000,
        featured: false,
        category: 'Cultural'
    },
    {
        id: 'TP18',
        image: Santorini_Luxury_Escape,
        title: 'Santorini Luxury Escape',
        description: 'Enjoy stunning sunsets, beautiful architecture, and a relaxing luxury holiday.',
        duration: 6,
        price: 165000,
        featured: true,
        category: 'Luxury'
    },
    {
        id: 'TP19',
        image: Japan_Cultural_Journey,
        title: 'Japan Cultural Journey',
        description: 'Experience traditional temples, Japanese cuisine, and fascinating local culture.',
        duration: 10,
        price: 155000,
        featured: true,
        category: 'Cultural'
    },
    {
        id: 'TP20',
        image: Norway_Northern_Lights,
        title: 'Norway Northern Lights',
        description: 'Explore Norway and experience breathtaking landscapes and northern lights.',
        duration: 9,
        price: 170000,
        featured: true,
        category: 'Nature'
    },
    {
        id: 'TP21',
        image: Dubai_Desert_Adventure,
        title: 'Dubai Desert Adventure',
        description: 'Enjoy desert scenery, cultural experiences, and exciting outdoor activities.',
        duration: 5,
        price: 75000,
        featured: false,
        category: 'Adventure'
    },
    {
        id: 'TP22',
        image: Hawaii_Beach_Escape,
        title: 'Hawaii Beach Escape',
        description: 'Relax on tropical beaches and explore the natural beauty of Hawaii.',
        duration: 8,
        price: 155000,
        featured: true,
        category: 'Beach'
    },
    {
        id: 'TP23',
        image: Bhutan_Cultural_Tour,
        title: 'Bhutan Cultural Tour',
        description: 'Discover peaceful mountain landscapes, monasteries, and Bhutanese culture.',
        duration: 6,
        price: 65000,
        featured: false,
        category: 'Cultural'
    },
    {
        id: 'TP24',
        image: Nepal_Himalayan_Adventure,
        title: 'Nepal Himalayan Adventure',
        description: 'Experience breathtaking Himalayan landscapes and unforgettable mountain adventures.',
        duration: 8,
        price: 55000,
        featured: true,
        category: 'Adventure'
    },
    {
        id: 'TP25',
        image: Malaysian_City_Escape,
        title: 'Malaysian City Escape',
        description: 'Explore Kuala Lumpur, local markets, modern architecture, and Malaysian cuisine.',
        duration: 5,
        price: 70000,
        featured: false,
        category: 'City'
    },
    {
        id: 'TP26',
        image: Fiji_Island_Retreat,
        title: 'Fiji Island Retreat',
        description: 'Relax on tropical islands surrounded by beautiful beaches and clear waters.',
        duration: 7,
        price: 135000,
        featured: true,
        category: 'Beach'
    },
    {
        id: 'TP27',
        image: Swiss_Luxury_Experience,
        title: 'Swiss Luxury Experience',
        description: 'Enjoy premium accommodation, scenic train journeys, and stunning Swiss landscapes.',
        duration: 8,
        price: 220000,
        featured: true,
        category: 'Luxury'
    },
    {
        id: 'TP28',
        image: Amsterdam_City_Tour,
        title: 'Amsterdam City Tour',
        description: 'Explore canals, museums, historic streets, and the vibrant culture of Amsterdam.',
        duration: 6,
        price: 120000,
        featured: false,
        category: 'City'
    },
    {
        id: 'TP29',
        image: Kenya_Safari_Adventure,
        title: 'Kenya Safari Adventure',
        description: 'Experience unforgettable wildlife encounters and breathtaking African landscapes.',
        duration: 9,
        price: 145000,
        featured: true,
        category: 'Adventure'
    },
    {
        id: 'TP30',
        image: Portugal_Coastal_Escape,
        title: 'Portugal Coastal Escape',
        description: 'Discover charming coastal towns, beautiful beaches, and Portuguese culture.',
        duration: 7,
        price: 105000,
        featured: false,
        category: 'Beach'
    }

];

export default TourPackagesData;