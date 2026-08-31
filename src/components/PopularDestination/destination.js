import tajMahal from '../../assets/taj_mahal.avif';
import japan from '../../assets/japan.avif';
import switzerland from '../../assets/switzerland.avif';
import australia from '../../assets/australia.avif';

const Destination = [

    {
        id: 'D1',
       image: tajMahal,
       country: 'India',
       description: 'Discover India, a vibrant land of ancient heritage, majestic palaces, and profound spirituality.Experience the chaotic charm of Delhi and the pink sandstone beauty of Jaipur.Witness the breathtaking sunrise glow of the iconic Taj Mahal in Agra.Conclude your journey savoring the tranquil backwaters of Kerala.',
       price: 50000,
       rating: 4.8,
       duration: 2 
    },

    {
        id:'D2',
        image:japan,
        country:'Japan',
        description:'Experience the vibrant contrast of ultra-modern neon skylines in Tokyo.',
        price: 100000,
        rating: 4.7,
        duration: 5
    },

    {
        id: 'D3',
       image: switzerland,
       country: 'Switzerland',
       description:'Experience the magic of Switzerland, where snow-capped alpine peaks meet crystal-clear turquoise lakes.Stroll through charming medieval old towns and ride scenic world-class mountain trains.Indulge in world-famous Swiss chocolate and breathtaking natural beauty at every turn.',
       price: 150000,
       rating: 4.6,
       duration:8
    },

    {
        id:'D4',
        image:australia,
        country:'Australia',
        description:'Experience the ultimate adventure in Australia, where vibrant coastal cities meet the wild, red heart of the outback. Snorkel through the colorful coral of the Great Barrier Reef and meet iconic wildlife like kangaroos and koalas. Discover ancient Indigenous cultures and relax on world-famous white-sand beaches. This diverse land down under promises unforgettable memories at every turn.',
        price: 120000,
        rating: 4.5,
        duration: 4
    }
]

export default Destination;