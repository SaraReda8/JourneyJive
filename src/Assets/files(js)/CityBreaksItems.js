import EgyptHotel1 from '../Images/egypt-hotel1.jpg';
import EgyptHotel2 from '../Images/egypt-hotel2.webp';
import EgyptHotel3 from '../Images/egypt-hotel3.jpg';
import EgyptHotel4 from '../Images/egypt-hotel4.jpg';
import EgyptHotel5 from '../Images/egypt-hotel5.jpg';
import EgyptHotel6 from '../Images/egypt-hotel6.jpg';

import AmsterdamHotel1 from '../Images/amsterdam-hotel1.jpg';
import AmsterdamHotel2 from '../Images/amsterdam-hotel2.jpg';
import AmsterdamHotel3 from '../Images/amsterdam-hotel3.jpg';
import AmsterdamHotel4 from '../Images/amsterdam-hotel4.jpg';
import AmsterdamHotel5 from '../Images/amsterdam-hotel5.jpg';
import AmsterdamHotel6 from '../Images/amsterdam-hotel6.jpg';

import LondonHotel1 from '../Images/london-hotel1.jpg';
import LondonHotel2 from '../Images/london-hotel2.jpg';
import LondonHotel3 from '../Images/london-hotel3.jpg';
import LondonHotel4 from '../Images/london-hotel4.jpg';
import LondonHotel5 from '../Images/london-hotel5.jpg';
import LondonHotel6 from '../Images/london-hotel6.jpg';

import FranceHotel1 from '../Images/france-hotel1.jpg';
import FranceHotel2 from '../Images/france-hotel2.jpg';
import FranceHotel3 from '../Images/france-hotel3.jpg';
import FranceHotel4 from '../Images/france-hotel4.jpg';
import FranceHotel5 from '../Images/france-hotel5.jpg';
import FranceHotel6 from '../Images/france-hotel6.jpg';
 
import ChinaHotel1 from '../Images/china-hotel1.jpg';
import ChinaHotel2 from '../Images/china-hotel2.jpg';
import ChinaHotel3 from '../Images/china-hotel3.jpg';
import ChinaHotel4 from '../Images/china-hotel4.jpg';
import ChinaHotel5 from '../Images/china-hotel5.jpg';
import ChinaHotel6 from '../Images/china-hotel6.jpg';

const CityBreaksItems = {
    egypt: [
        { id: 1, itemImage: EgyptHotel1, itemTitle: 'Cairo hotel', itemSubTitle: 'Cairo, Egypt', itemNights: '2 nights', itemPrice: '£499' },
        { id: 2, itemImage: EgyptHotel2, itemTitle: 'Pyramid view hotel', itemSubTitle: 'Cairo, Egypt', itemNights: '3 nights', itemPrice: '£599' },
        { id: 3, itemImage: EgyptHotel3, itemTitle: 'Nile hotel', itemSubTitle: 'Cairo, Egypt', itemNights: '2 nights', itemPrice: '£799' },
        { id: 4, itemImage: EgyptHotel4, itemTitle: 'Ancient hotel', itemSubTitle: 'Cairo, Egypt', itemNights: '3 nights', itemPrice: '£399' },
        { id: 5, itemImage: EgyptHotel5, itemTitle: 'Luxor hotel', itemSubTitle: 'Luxor, Egypt', itemNights: '2 nights', itemPrice: '£499' },
        { id: 6, itemImage: EgyptHotel6, itemTitle: 'Red Sea resort', itemSubTitle: 'Hurghada, Egypt', itemNights: '3 nights', itemPrice: '£299' }
    ],
    london: [
        { id: 1, itemImage: LondonHotel1, itemTitle: 'London hotel', itemSubTitle: 'London, UK', itemNights: '2 nights', itemPrice: '£399' },
        { id: 2, itemImage: LondonHotel2, itemTitle: 'Green hotel', itemSubTitle: 'London, UK', itemNights: '3 nights', itemPrice: '£499' },
        { id: 3, itemImage: LondonHotel3, itemTitle: 'British hotel', itemSubTitle: 'London, UK', itemNights: '2 nights', itemPrice: '£799' },
        { id: 4, itemImage: LondonHotel4, itemTitle: 'Corner hotel', itemSubTitle: 'London, UK', itemNights: '3 nights', itemPrice: '£899' },
        { id: 5, itemImage: LondonHotel5, itemTitle: 'Modern hotel', itemSubTitle: 'London, UK', itemNights: '2 nights', itemPrice: '£599' },
        { id: 6, itemImage: LondonHotel6, itemTitle: 'Dark hotel', itemSubTitle: 'London, UK', itemNights: '3 nights', itemPrice: '£399' }
    ],
    paris: [
        { id: 1, itemImage: FranceHotel1, itemTitle: 'Paris hotel', itemSubTitle: 'France, Paris', itemNights: '3 nights', itemPrice: '£599' },
        { id: 2, itemImage: FranceHotel2, itemTitle: 'Castle hotel', itemSubTitle: 'France, Paris', itemNights: '3 nights', itemPrice: '£599' },
        { id: 3, itemImage: FranceHotel3, itemTitle: 'Old hotel', itemSubTitle: 'France, Paris', itemNights: '2 nights', itemPrice: '£799' },
        { id: 4, itemImage: FranceHotel4, itemTitle: 'France hotel', itemSubTitle: 'France, Paris', itemNights: '3 nights', itemPrice: '£399' },
        { id: 5, itemImage: FranceHotel5, itemTitle: 'Paris hotel', itemSubTitle: 'France, Paris', itemNights: '2 nights', itemPrice: '£499' },
        { id: 6, itemImage: FranceHotel6, itemTitle: 'Grand hotel', itemSubTitle: 'France, Paris', itemNights: '3 nights', itemPrice: '£299' }
    ],
    china: [
        { id: 1, itemImage: ChinaHotel1, itemTitle: 'Beijing hotel', itemSubTitle: 'Beijing, China', itemNights: '2 nights', itemPrice: '£599' },
        { id: 2, itemImage: ChinaHotel2, itemTitle: 'Great Wall inn', itemSubTitle: 'Beijing, China', itemNights: '3 nights', itemPrice: '£699' },
        { id: 3, itemImage: ChinaHotel3, itemTitle: 'Shanghai hotel', itemSubTitle: 'Shanghai, China', itemNights: '3 nights', itemPrice: '£799' },
        { id: 4, itemImage: ChinaHotel4, itemTitle: 'Forbidden City hotel', itemSubTitle: 'Beijing, China', itemNights: '3 nights', itemPrice: '£499' },
        { id: 5, itemImage: ChinaHotel5, itemTitle: 'Terracotta hotel', itemSubTitle: 'Xi\'an, China', itemNights: '2 nights', itemPrice: '£599' },
        { id: 6, itemImage: ChinaHotel6, itemTitle: 'Yangtze hotel', itemSubTitle: 'Chongqing, China', itemNights: '3 nights', itemPrice: '£399' }
    ],
    amsterdam: [
        { id: 1, itemImage: AmsterdamHotel1, itemTitle: 'Amsterdam hotel', itemSubTitle: 'Netherlands, Amsterdam', itemNights: '2 nights', itemPrice: '£499' },
        { id: 2, itemImage: AmsterdamHotel2, itemTitle: 'Yellow hotel', itemSubTitle: 'Netherlands, Amsterdam', itemNights: '3 nights', itemPrice: '£599' },
        { id: 3, itemImage: AmsterdamHotel3, itemTitle: 'Old hotel', itemSubTitle: 'Netherlands, Amsterdam', itemNights: '3 nights', itemPrice: '£799' },
        { id: 4, itemImage: AmsterdamHotel4, itemTitle: 'Golden hotel', itemSubTitle: 'Netherlands, Amsterdam', itemNights: '3 nights', itemPrice: '£399' },
        { id: 5, itemImage: AmsterdamHotel5, itemTitle: 'Vintage hotel', itemSubTitle: 'Netherlands, Amsterdam', itemNights: '2 nights', itemPrice: '£499' },
        { id: 6, itemImage: AmsterdamHotel6, itemTitle: 'Bimhuis hotel', itemSubTitle: 'Netherlands, Amsterdam', itemNights: '3 nights', itemPrice: '£299' }
    ]
    
};

export default CityBreaksItems;
