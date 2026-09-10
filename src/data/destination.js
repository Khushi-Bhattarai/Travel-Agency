import tajMahal from "../assets/taj_mahal.avif";
import japan from "../assets/japan.avif";
import switzerland from "../assets/switzerland.avif";
import australia from "../assets/australia.avif";
import bhutan from '../assets/bhutan.avif';
import canada from "../assets/canada.avif";
import dubai from "../assets/dubai.avif";
import egypt from "../assets/egypt.avif";
import france from "../assets/france.avif";
import greece from '../assets/greece.avif';
import iceland from "../assets/iceland.avif";
import indonesia from "../assets/indonesia.avif";
import italy from "../assets/italy.avif";
import nepal from "../assets/nepal.avif";
import malaysia from '../assets/malaysia.avif';
import maldives from "../assets/maldives.avif";
import new_zealand from "../assets/new_zealand.avif";
import norway from "../assets/norway.avif";
import portugal from "../assets/portugal.avif";
import seychelles from '../assets/seychelles.avif';
import singapore from "../assets/singapore.avif";
import south_africa from "../assets/south_africa.avif";
import south_korea from "../assets/south_korea.avif";
import spain from "../assets/spain.avif";
import srilanka from '../assets/srilanka.avif';
import thailand from "../assets/thailand.avif";
import turkey from "../assets/turkey.avif";
import uk from "../assets/uk.avif";
import vietnam from "../assets/vietnam.avif";
import brazil from '../assets/brazil.avif';

const Destination = [

    {
        id: "D1",
        image: tajMahal,
        country: "India",
        description: "Discover India, a vibrant land of ancient heritage, majestic palaces, and profound spirituality. Experience the chaotic charm of Delhi and the pink sandstone beauty of Jaipur. Witness the breathtaking sunrise glow of the iconic Taj Mahal in Agra. Conclude your journey savoring the tranquil backwaters of Kerala.",
        price: 50000,
        rating: 4.8,
        duration: 2,
        category: "Cultural",
        featured: true
    },

    {
        id: "D2",
        image: japan,
        country: "Japan",
        description: "Experience the vibrant contrast of ultra-modern neon skylines in Tokyo, peaceful temples in Kyoto, traditional Japanese culture, and breathtaking natural landscapes. Enjoy authentic cuisine and discover the unique blend of ancient traditions and modern innovation.",
        price: 100000,
        rating: 4.7,
        duration: 5,
        category: "Cultural",
        featured: true
    },

    {
        id: "D3",
        image: switzerland,
        country: "Switzerland",
        description: "Experience the magic of Switzerland, where snow-capped alpine peaks meet crystal-clear turquoise lakes. Stroll through charming medieval old towns and ride scenic world-class mountain trains. Indulge in world-famous Swiss chocolate and breathtaking natural beauty at every turn.",
        price: 150000,
        rating: 4.6,
        duration: 8,
        category: "Nature",
        featured: true
    },

    {
        id: "D4",
        image: australia,
        country: "Australia",
        description: "Experience the ultimate adventure in Australia, where vibrant coastal cities meet the wild, red heart of the outback. Snorkel through the colorful coral of the Great Barrier Reef and meet iconic wildlife like kangaroos and koalas. Discover ancient Indigenous cultures and relax on world-famous white-sand beaches.",
        price: 120000,
        rating: 4.5,
        duration: 4,
        category: "Adventure",
        featured: true
    },

    {
        id: "D5",
        image: nepal,
        country: "Nepal",
        description: "Explore Nepal, a land of majestic Himalayan mountains, ancient temples, peaceful villages, and rich cultural traditions. Discover the historic streets of Kathmandu, enjoy the natural beauty of Pokhara, and experience the warm hospitality of the Himalayan people.",
        price: 35000,
        rating: 4.9,
        duration: 5,
        category: "Adventure",
        featured: true
    },

    {
        id: "D6",
        image: thailand,
        country: "Thailand",
        description: "Discover Thailand, where golden temples, tropical beaches, lively markets, and delicious cuisine create an unforgettable holiday. Explore the energetic streets of Bangkok, relax on the beaches of Phuket, and experience the peaceful islands of southern Thailand.",
        price: 75000,
        rating: 4.7,
        duration: 6,
        category: "Beach",
        featured: true
    },

    {
        id: "D7",
        image: maldives,
        country: "Maldives",
        description: "Escape to the Maldives and experience crystal-clear waters, tropical islands, peaceful beaches, and unforgettable sunsets. Relax in a beautiful island setting, explore colourful marine life, and enjoy a peaceful tropical getaway surrounded by the Indian Ocean.",
        price: 95000,
        rating: 4.8,
        duration: 5,
        category: "Beach",
        featured: true
    },

    {
        id: "D8",
        image: singapore,
        country: "Singapore",
        description: "Experience Singapore, a modern city known for its impressive skyline, clean streets, diverse cuisine, and exciting attractions. Explore Gardens by the Bay, enjoy the vibrant atmosphere of Marina Bay, and discover the cultural neighbourhoods of this fascinating city.",
        price: 85000,
        rating: 4.6,
        duration: 4,
        category: "City",
        featured: false
    },

    {
        id: "D9",
        image: dubai,
        country: "Dubai",
        description: "Discover Dubai, a futuristic city filled with spectacular architecture, luxury shopping, desert adventures, and world-class entertainment. Visit the Burj Khalifa, explore traditional markets, experience a desert safari, and enjoy the city's impressive nightlife and coastline.",
        price: 90000,
        rating: 4.7,
        duration: 5,
        category: "Luxury",
        featured: true
    },

    {
        id: "D10",
        image: indonesia,
        country: "Indonesia",
        description: "Discover Bali, an island paradise filled with lush rice terraces, ancient temples, tropical beaches, and peaceful villages. Experience the artistic culture of Ubud, relax along beautiful coastlines, and enjoy unforgettable sunsets surrounded by tropical landscapes.",
        price: 80000,
        rating: 4.8,
        duration: 6,
        category: "Beach",
        featured: true
    },

    {
        id: "D11",
        image: france,
        country: "France",
        description: "Explore France through its elegant cities, historic landmarks, beautiful countryside, and world-famous cuisine. Discover the romantic streets of Paris, admire the Eiffel Tower, visit magnificent museums, and experience the charm of French culture.",
        price: 140000,
        rating: 4.7,
        duration: 7,
        category: "Cultural",
        featured: false
    },

    {
        id: "D12",
        image: italy,
        country: "Italy",
        description: "Travel through Italy and discover ancient Roman landmarks, Renaissance art, beautiful coastal towns, and unforgettable cuisine. Explore Rome, admire the canals of Venice, experience Florence, and enjoy the relaxed atmosphere of the Italian countryside.",
        price: 135000,
        rating: 4.8,
        duration: 7,
        category: "Cultural",
        featured: false
    },

    {
        id: "D13",
        image: uk,
        country: "United Kingdom",
        description: "Discover the United Kingdom through historic castles, royal landmarks, beautiful countryside, and lively cities. Explore London, visit famous museums and landmarks, and experience the unique combination of British history, culture, and modern city life.",
        price: 130000,
        rating: 4.5,
        duration: 6,
        category: "City",
        featured: false
    },

    {
        id: "D14",
        image: spain,
        country: "Spain",
        description: "Experience Spain, a country famous for colourful architecture, historic cities, Mediterranean beaches, lively festivals, and delicious cuisine. Explore Barcelona, discover Madrid, relax along the coast, and experience the warm and energetic Spanish culture.",
        price: 125000,
        rating: 4.6,
        duration: 6,
        category: "Cultural",
        featured: false
    },

    {
        id: "D15",
        image: greece,
        country: "Greece",
        description: "Discover Greece, where ancient history meets beautiful Mediterranean islands. Explore Athens and its historic landmarks, relax beside the blue waters of Santorini, and experience traditional villages, local cuisine, and unforgettable coastal views.",
        price: 120000,
        rating: 4.7,
        duration: 6,
        category: "Beach",
        featured: false
    },

    {
        id: "D16",
        image: new_zealand,
        country: "New Zealand",
        description: "Explore New Zealand, a breathtaking destination filled with dramatic mountains, peaceful lakes, green valleys, and spectacular coastlines. Enjoy outdoor adventures, explore beautiful national parks, and experience some of the most impressive natural landscapes in the world.",
        price: 145000,
        rating: 4.8,
        duration: 8,
        category: "Nature",
        featured: false
    },

    {
        id: "D17",
        image: egypt,
        country: "Egypt",
        description: "Step into the ancient world in Egypt and discover magnificent pyramids, historic temples, and the timeless Nile River. Explore Cairo, visit the Great Pyramids of Giza, discover ancient treasures, and experience thousands of years of fascinating history.",
        price: 110000,
        rating: 4.6,
        duration: 6,
        category: "Cultural",
        featured: false
    },

    {
        id: "D18",
        image: turkey,
        country: "Turkey",
        description: "Experience Turkey, where Europe and Asia meet through a fascinating combination of history, culture, cuisine, and natural beauty. Explore Istanbul, discover ancient landmarks, experience traditional markets, and admire the unique landscapes of Cappadocia.",
        price: 105000,
        rating: 4.7,
        duration: 6,
        category: "Cultural",
        featured: false
    },

    {
        id: "D19",
        image: south_korea,
        country: "South Korea",
        description: "Discover South Korea, where ancient palaces and traditional villages meet modern cities and innovative technology. Explore Seoul, experience Korean cuisine and culture, visit historic sites, and enjoy the country's beautiful mountains and coastline.",
        price: 95000,
        rating: 4.6,
        duration: 6,
        category: "City",
        featured: false
    },

    {
        id: "D20",
        image: malaysia,
        country: "Malaysia",
        description: "Explore Malaysia, a diverse destination combining modern cities, tropical islands, rainforests, and rich cultural traditions. Discover Kuala Lumpur, enjoy beautiful beaches, explore local markets, and experience the country's unique blend of cultures and cuisines.",
        price: 70000,
        rating: 4.5,
        duration: 5,
        category: "Nature",
        featured: false
    },

    {
        id: "D21",
        image: vietnam,
        country: "Vietnam",
        description: "Discover Vietnam through its vibrant cities, peaceful countryside, historic landmarks, and spectacular natural scenery. Explore Hanoi, cruise through Ha Long Bay, experience local markets, and enjoy traditional Vietnamese cuisine.",
        price: 72000,
        rating: 4.6,
        duration: 6,
        category: "Adventure",
        featured: false
    },

    {
        id: "D22",
        image: srilanka,
        country: "Sri Lanka",
        description: "Experience Sri Lanka, a tropical island filled with ancient temples, lush tea plantations, wildlife, golden beaches, and welcoming communities. Explore historic cities, enjoy scenic train journeys, discover national parks, and relax along the Indian Ocean.",
        price: 65000,
        rating: 4.7,
        duration: 6,
        category: "Nature",
        featured: false
    },

    {
        id: "D23",
        image: bhutan,
        country: "Bhutan",
        description: "Discover Bhutan, a peaceful Himalayan kingdom known for its monasteries, mountain landscapes, traditional architecture, and unique cultural heritage. Explore historic valleys, visit mountain temples, and experience a slower and more peaceful way of travelling.",
        price: 60000,
        rating: 4.8,
        duration: 5,
        category: "Cultural",
        featured: false
    },

    {
        id: "D24",
        image: norway,
        country: "Norway",
        description: "Explore Norway's spectacular fjords, snow-covered mountains, charming coastal towns, and dramatic northern landscapes. Experience scenic journeys through the countryside, discover traditional Nordic culture, and enjoy breathtaking natural scenery throughout your trip.",
        price: 155000,
        rating: 4.7,
        duration: 8,
        category: "Nature",
        featured: false
    },

    {
        id: "D25",
        image: canada,
        country: "Canada",
        description: "Discover Canada, a vast country filled with spectacular mountains, lakes, forests, vibrant cities, and diverse cultural experiences. Explore Vancouver, experience the beauty of the Canadian Rockies, and discover the unique atmosphere of Toronto and Montreal.",
        price: 160000,
        rating: 4.7,
        duration: 8,
        category: "Nature",
        featured: false
    },

    {
        id: "D26",
        image: brazil,
        country: "Brazil",
        description: "Experience Brazil, a vibrant country known for colourful cities, tropical beaches, rainforests, and energetic cultural traditions. Explore Rio de Janeiro, enjoy beautiful coastal scenery, discover local cuisine, and experience the lively spirit of Brazilian culture.",
        price: 145000,
        rating: 4.5,
        duration: 8,
        category: "Adventure",
        featured: false
    },

    {
        id: "D27",
        image: south_africa,
        country: "South Africa",
        description: "Explore South Africa's diverse landscapes, from spectacular coastlines and mountains to wildlife-rich national parks. Experience Cape Town, discover fascinating cultural heritage, and enjoy unforgettable wildlife encounters and outdoor adventures.",
        price: 135000,
        rating: 4.6,
        duration: 7,
        category: "Adventure",
        featured: false
    },

    {
        id: "D28",
        image: portugal,
        country: "Portugal",
        description: "Discover Portugal through charming coastal towns, historic cities, colourful streets, beautiful beaches, and delicious local cuisine. Explore Lisbon, visit Porto, enjoy the Atlantic coastline, and experience the relaxed atmosphere of Portuguese culture.",
        price: 115000,
        rating: 4.6,
        duration: 6,
        category: "Cultural",
        featured: false
    },

    {
        id: "D29",
        image: iceland,
        country: "Iceland",
        description: "Experience Iceland's dramatic volcanic landscapes, waterfalls, glaciers, black-sand beaches, and geothermal springs. Explore Reykjavik, travel through spectacular natural scenery, and experience the unique beauty of one of the world's most extraordinary island destinations.",
        price: 150000,
        rating: 4.7,
        duration: 7,
        category: "Nature",
        featured: false
    },

    {
        id: "D30",
        image: seychelles,
        country: "Seychelles",
        description: "Escape to Seychelles, a tropical paradise known for crystal-clear waters, white-sand beaches, lush forests, and beautiful island landscapes. Relax along peaceful coastlines, explore marine life, and enjoy a memorable island getaway surrounded by the Indian Ocean.",
        price: 110000,
        rating: 4.8,
        duration: 6,
        category: "Beach",
        featured: false
    }

];

export default Destination;