// RecentHolidaysItems.js
import SpainImg from '../Images/spain-holiday.jpg';
import PortugalImg from '../Images/portugal.jpg';
import GreeceImg from '../Images/Greece2.jpg';
import MaldivesImg from '../Images/Maldives2.jpg';
import ItalyImg from '../Images/italy.jpg';
import ThailandImg from '../Images/thailand.webp';
import JapanImg from '../Images/japan.jpg';
import EgyptImg from '../Images/egypt.jpg';

let RecentHolidaysItems = [
    {
        id: 1,
        itemImage: SpainImg,
        itemTitle: 'Spain',
        itemDescription: '1 min walk to beach',
        itemNights: '4 nights',
        itemPrice: '£499',
        itemRating: 4.5,
        itemAvailability: 'Available',
        itemAmenities: ['Free WiFi', 'Swimming Pool', 'Breakfast Included'],
        itemLocation: 'Barcelona, Spain',
        itemDiscount: '10% off',
        itemCancellation: 'Free Cancellation',
        itemRecommendedAge: 'Adults Only'
    },
    {
        id: 2,
        itemImage: PortugalImg,
        itemTitle: 'Portugal',
        itemDescription: 'On the beach',
        itemNights: '2 nights',
        itemPrice: '£299',
        itemRating: 4.0,
        itemAvailability: 'Limited Availability',
        itemAmenities: ['Free Parking', 'Beach View', 'All Meals Included'],
        itemLocation: 'Lisbon, Portugal',
        itemDiscount: '5% off',
        itemCancellation: 'Free Cancellation',
        itemRecommendedAge: 'Family Friendly'
    },
    {
        id: 3,
        itemImage: GreeceImg,
        itemTitle: 'Greece',
        itemDescription: '3 min walk to beach',
        itemNights: '3 nights',
        itemPrice: '£799',
        itemRating: 4.8,
        itemAvailability: 'Available',
        itemAmenities: ['Airport Shuttle', 'Gym Access', 'Private Balcony'],
        itemLocation: 'Santorini, Greece',
        itemDiscount: '15% off',
        itemCancellation: 'Non-refundable',
        itemRecommendedAge: 'Adults Only'
    },
    {
        id: 4,
        itemImage: MaldivesImg,
        itemTitle: 'Maldives',
        itemDescription: 'On the beach',
        itemNights: '5 nights',
        itemPrice: '£1499',
        itemRating: 5.0,
        itemAvailability: 'Sold Out',
        itemAmenities: ['Private Beach', 'Spa Access', 'All-Inclusive'],
        itemLocation: 'Malé, Maldives',
        itemDiscount: '20% off for early booking',
        itemCancellation: 'Free Cancellation',
        itemRecommendedAge: 'Honeymoon Special'
    },
    {
        id: 5,
        itemImage: ItalyImg,
        itemTitle: 'Italy',
        itemDescription: '2 min walk to city center',
        itemNights: '4 nights',
        itemPrice: '£599',
        itemRating: 4.6,
        itemAvailability: 'Available',
        itemAmenities: ['Free WiFi', 'City Tour Included', 'Breakfast Included'],
        itemLocation: 'Rome, Italy',
        itemDiscount: '10% off',
        itemCancellation: 'Free Cancellation',
        itemRecommendedAge: 'Family Friendly'
    },
    {
        id: 6,
        itemImage: ThailandImg,
        itemTitle: 'Thailand',
        itemDescription: 'Beachfront villa',
        itemNights: '6 nights',
        itemPrice: '£899',
        itemRating: 4.7,
        itemAvailability: 'Limited Availability',
        itemAmenities: ['Private Pool', 'Free WiFi', 'Airport Transfer'],
        itemLocation: 'Phuket, Thailand',
        itemDiscount: '12% off',
        itemCancellation: 'Non-refundable',
        itemRecommendedAge: 'Family Friendly'
    },
    {
        id: 7,
        itemImage: JapanImg,
        itemTitle: 'Japan',
        itemDescription: 'Near famous landmarks',
        itemNights: '5 nights',
        itemPrice: '£1299',
        itemRating: 4.9,
        itemAvailability: 'Available',
        itemAmenities: ['Guided City Tour', 'Traditional Japanese Meals', 'Hot Spring Access'],
        itemLocation: 'Kyoto, Japan',
        itemDiscount: '8% off',
        itemCancellation: 'Free Cancellation',
        itemRecommendedAge: 'All Ages'
    },
    {
        id: 8,
        itemImage: EgyptImg,
        itemTitle: 'Egypt',
        itemDescription: 'View of the Pyramids',
        itemNights: '3 nights',
        itemPrice: '£699',
        itemRating: 4.3,
        itemAvailability: 'Available',
        itemAmenities: ['Desert Safari', 'Free Breakfast', 'Airport Pickup'],
        itemLocation: 'Cairo, Egypt',
        itemDiscount: 'Special Group Rates',
        itemCancellation: 'Free Cancellation',
        itemRecommendedAge: 'All Ages'
    }
];

export default RecentHolidaysItems;
