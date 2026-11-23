export type GalleryCategory =
  | 'All'
  | 'Exterior & Lawns'
  | 'Rooms & Suites'
  | 'Dining & Cuisine'
  | 'Banquets & Events';

export interface HotelPhoto {
  id: string;
  src: string;
  title: string;
  caption: string;
  category: Exclude<GalleryCategory, 'All'>;
  aspect: 'landscape' | 'portrait' | 'square';
}

export interface RoomSuite {
  id: string;
  name: string;
  meta: string;
  description: string;
  highlights: string[];
  image: string;
  alt: string;
}

export interface CelebrationDecor {
  id: string;
  name: string;
  meta: string;
  description: string;
  image: string;
  alt: string;
  aspect: 'landscape' | 'portrait';
}

export type FoodCategory =
  | 'All'
  | 'Thali & Curries'
  | 'Starters & Snacks'
  | 'Chai & Beverages';

export interface FoodItem {
  id: string;
  name: string;
  category: Exclude<FoodCategory, 'All'>;
  meta: string;
  description: string;
  image: string;
  alt: string;
  featured?: boolean;
}

export interface VenueSpace {
  id: string;
  name: string;
  meta: string;
  description: string;
  image: string;
  alt: string;
}

export const VERIFIED_LINKS = {
  instagramUrl: 'https://www.instagram.com/hotel._.anjali',
  instagramHandle: '@hotel._.anjali',
  googleProfileUrl: 'https://share.google/9LBKvZnQKRhNv9Ad3',
};

/**
 * Complete catalog of all 36 uploaded Hotel Anjali photographs.
 * Every photo is faithfully preserved and placed in its matching domain.
 */
export const ALL_HOTEL_PHOTOS: HotelPhoto[] = [
  {
    id: 'ext-hero-lawn',
    src: '/assets/aistudio/image_630862b8.png',
    title: 'Hotel Anjali Restaurant & Front Lawn',
    caption: 'Palm-lined architectural facade, signature rooftop crown signage, and open-air lawn dining.',
    category: 'Exterior & Lawns',
    aspect: 'landscape',
  },
  {
    id: 'ext-gujarati-sign',
    src: '/assets/aistudio/image_f18ce9f4.png',
    title: 'Reception Approach & Courtyard',
    caption: 'Side elevation with હોટલ અંજલી rooftop signage, paved driveway, and reception entrance.',
    category: 'Exterior & Lawns',
    aspect: 'landscape',
  },
  {
    id: 'ext-topiary-facade',
    src: '/assets/aistudio/image_dadc4ea8.png',
    title: 'Palm-Lined Front Elevation',
    caption: 'Symmetrical three-level guest wing framed by sculpted topiary gardens and tall palms.',
    category: 'Exterior & Lawns',
    aspect: 'landscape',
  },
  {
    id: 'ext-arch-gateway',
    src: '/assets/aistudio/image_7b527166.png',
    title: 'Hotel Anjali Inn Entrance Arch',
    caption: 'Ceremonial welcome archway with dual steel-railed staircases and festive draped walkway.',
    category: 'Exterior & Lawns',
    aspect: 'landscape',
  },
  {
    id: 'ext-highway-view',
    src: '/assets/aistudio/image_6b9da2fd.png',
    title: 'Roadside Panorama & Gateway',
    caption: 'Full roadside approach showcasing the Hotel Anjali Inn entrance arch and main building.',
    category: 'Exterior & Lawns',
    aspect: 'landscape',
  },
  {
    id: 'ext-balcony-courtyard',
    src: '/assets/aistudio/image_b1091f9e.png',
    title: 'Guest Balconies & Garden Border',
    caption: 'Private glass-balustrade room balconies overlooking flowering garden beds.',
    category: 'Exterior & Lawns',
    aspect: 'landscape',
  },
  {
    id: 'ext-expansive-lawn',
    src: '/assets/aistudio/image_1d917fab.png',
    title: 'Main Celebration Lawn & Parking',
    caption: 'Expansive manicured green lawn bordered by palms and spacious guest parking perimeter.',
    category: 'Exterior & Lawns',
    aspect: 'landscape',
  },
  {
    id: 'ext-night-tree',
    src: '/assets/aistudio/image_429d7830.png',
    title: 'Illuminated Evening Garden',
    caption: 'Nighttime garden lighting illuminating the flowering plumeria and palm trees.',
    category: 'Exterior & Lawns',
    aspect: 'square',
  },
  {
    id: 'ext-night-facade',
    src: '/assets/aistudio/image_cc014958.png',
    title: 'Festive Illuminated Facade',
    caption: 'Main building and lawn glowing under celebratory evening light cascades.',
    category: 'Exterior & Lawns',
    aspect: 'square',
  },
  {
    id: 'ext-night-gathering',
    src: '/assets/aistudio/image_b2b82dbd.png',
    title: 'Evening Lawn Hospitality',
    caption: 'Guests enjoying outdoor evening hospitality across the illuminated lawn.',
    category: 'Exterior & Lawns',
    aspect: 'landscape',
  },
  {
    id: 'ext-foyer-lobby',
    src: '/assets/aistudio/image_43b75b53.png',
    title: 'Marble Lobby Corridor',
    caption: 'Polished stone lobby corridor leading into the dining and event halls.',
    category: 'Exterior & Lawns',
    aspect: 'landscape',
  },
  {
    id: 'ext-reception-foyer',
    src: '/assets/aistudio/image_b19a7b77.png',
    title: 'Reception Desk & Multi-Level Foyer',
    caption: 'Main reception hall with black stone desk, staircase access, and banquet pre-function area.',
    category: 'Exterior & Lawns',
    aspect: 'landscape',
  },
  {
    id: 'room-crimson-suite',
    src: '/assets/aistudio/image_d313f8c4.png',
    title: 'Crimson Signature Suite',
    caption: 'Spacious marble-floored suite with crimson tufted bed, swivel lounge chairs, and cove lighting.',
    category: 'Rooms & Suites',
    aspect: 'landscape',
  },
  {
    id: 'room-executive-deluxe',
    src: '/assets/aistudio/image_e4072498.png',
    title: 'Executive Deluxe Room',
    caption: 'Restful guest room with tall tufted headboard, warm drapery, bedside intercom, and crisp linen.',
    category: 'Rooms & Suites',
    aspect: 'landscape',
  },
  {
    id: 'room-azure-deluxe',
    src: '/assets/aistudio/image_cd2c1032.png',
    title: 'Azure Accent Deluxe Room',
    caption: 'Bright modern room featuring illuminated architectural wall art, floral headboard, and teal curtains.',
    category: 'Rooms & Suites',
    aspect: 'landscape',
  },
  {
    id: 'room-decor-rose',
    src: '/assets/aistudio/image_372bd1aa.png',
    title: 'Rose-Petal & Balloon Suite Styling',
    caption: 'Custom celebration room styling with floral petal pathway, rose-petal centerpiece, and balloons.',
    category: 'Rooms & Suites',
    aspect: 'landscape',
  },
  {
    id: 'room-decor-canopy',
    src: '/assets/aistudio/image_7490fd9b.png',
    title: 'Fairy-Light Canopy Celebration Setup',
    caption: 'Crimson suite styled with warm fairy-light canopy, rose heart, and birthday balloon decor.',
    category: 'Rooms & Suites',
    aspect: 'portrait',
  },
  {
    id: 'room-decor-anniversary',
    src: '/assets/aistudio/image_b405a5c4.png',
    title: 'Romantic Hanging-Rose Room Decor',
    caption: 'Air-conditioned room prepared for anniversaries with ceiling balloons and suspended fresh roses.',
    category: 'Rooms & Suites',
    aspect: 'landscape',
  },
  {
    id: 'dining-indoor-hall',
    src: '/assets/aistudio/image_38ee7de4.png',
    title: 'Main Indoor Restaurant Hall',
    caption: 'Air-conditioned family dining room featuring sculpted golden wave ceiling and crimson-dressed seating.',
    category: 'Dining & Cuisine',
    aspect: 'landscape',
  },
  {
    id: 'dining-thali-duo',
    src: '/assets/aistudio/image_a62cbde7.png',
    title: 'Gujarati Thali & Punjabi Thali',
    caption: 'Wholesome regional thali platters served with fresh breads, curries, farsan, raita, and sweets.',
    category: 'Dining & Cuisine',
    aspect: 'landscape',
  },
  {
    id: 'dining-curry-tray',
    src: '/assets/aistudio/image_fb85dd35.png',
    title: 'Signature Paneer & Vegetable Curries',
    caption: 'Freshly prepared Indian gravies finished with grated paneer, coriander, tomato, and cucumber.',
    category: 'Dining & Cuisine',
    aspect: 'portrait',
  },
  {
    id: 'dining-manchurian',
    src: '/assets/aistudio/image_984eb199.png',
    title: 'Crispy Manchurian Skewers',
    caption: 'Indo-Chinese crispy vegetable skewers arranged around a spiced garlic-chilli dip.',
    category: 'Dining & Cuisine',
    aspect: 'portrait',
  },
  {
    id: 'dining-pani-puri',
    src: '/assets/aistudio/image_af2e4341.png',
    title: 'Crispy Pani Puri Platter',
    caption: 'Golden crisp puris filled with spiced potato-chickpea mix, fine sev, and tangy mint water.',
    category: 'Dining & Cuisine',
    aspect: 'portrait',
  },
  {
    id: 'dining-cheese-pizza',
    src: '/assets/aistudio/image_6d915706.png',
    title: 'Freshly Baked Cheese Pizza',
    caption: 'Golden crust topped with melted mozzarella, diced toppings, oregano, and red chilli flakes.',
    category: 'Dining & Cuisine',
    aspect: 'portrait',
  },
  {
    id: 'dining-masala-fries',
    src: '/assets/aistudio/image_65dc1ad3.png',
    title: 'Spiced Masala French Fries',
    caption: 'Crisp golden fries tossed in house spice seasoning and served with classic tomato dip.',
    category: 'Dining & Cuisine',
    aspect: 'portrait',
  },
  {
    id: 'dining-masala-chai',
    src: '/assets/aistudio/image_8919ef6c.png',
    title: 'Kulhad Masala Chai',
    caption: 'Aromatic spiced tea brewed with ginger, green cardamom, cinnamon, and cloves in a clay kulhad.',
    category: 'Dining & Cuisine',
    aspect: 'portrait',
  },
  {
    id: 'dining-dryfruit-shakes',
    src: '/assets/aistudio/image_515d9855.png',
    title: 'Signature Dry-Fruit Shakes & Lassi',
    caption: 'Chilled flavored shakes and lassis crowned with cream, roasted nuts, and candied fruit.',
    category: 'Dining & Cuisine',
    aspect: 'landscape',
  },
  {
    id: 'dining-cold-coffee',
    src: '/assets/aistudio/image_2d77ddaf.png',
    title: 'Cold Coffee with Ice Cream',
    caption: 'Thick blended chocolate cold coffee topped with a vanilla scoop and grated dark chocolate.',
    category: 'Dining & Cuisine',
    aspect: 'portrait',
  },
  {
    id: 'banquet-grand-pavilion',
    src: '/assets/aistudio/image_8788c7ad.png',
    title: 'Grand Chandelier Dining Pavilion',
    caption: 'Crimson and gold draped outdoor banquet pavilion with crystal chandeliers and floral round tables.',
    category: 'Banquets & Events',
    aspect: 'landscape',
  },
  {
    id: 'banquet-mandap-tables',
    src: '/assets/aistudio/image_288d377a.png',
    title: 'Golden Banquet Seating',
    caption: 'Ornate gold-backed guest chairs and wooden dining tables arranged beneath evening drapery.',
    category: 'Banquets & Events',
    aspect: 'portrait',
  },
  {
    id: 'banquet-buffet-counter',
    src: '/assets/aistudio/image_4d6eff64.png',
    title: 'Illuminated Outdoor Buffet Line',
    caption: 'Backlit golden filigree catering counter with decorative floral canopies for grand receptions.',
    category: 'Banquets & Events',
    aspect: 'landscape',
  },
  {
    id: 'banquet-grand-hall',
    src: '/assets/aistudio/image_b178f30e.png',
    title: 'Grand Banquet & Stage Hall',
    caption: 'Full-capacity indoor event hall with floral stage backdrop, sound system, and yellow-white seating.',
    category: 'Banquets & Events',
    aspect: 'landscape',
  },
  {
    id: 'banquet-conference-hall',
    src: '/assets/aistudio/image_49d45efe.png',
    title: 'Air-Conditioned Celebration Hall',
    caption: 'Indoor banquet hall styled with magenta and gold chair sashes for engagements and gatherings.',
    category: 'Banquets & Events',
    aspect: 'landscape',
  },
  {
    id: 'banquet-birthday-stage',
    src: '/assets/aistudio/image_594f8cfc.png',
    title: 'Private Party & Birthday Stage',
    caption: 'Dedicated indoor celebration stage with balloon arch, red carpet platform, and sound speakers.',
    category: 'Banquets & Events',
    aspect: 'landscape',
  },
  {
    id: 'banquet-foyer-service',
    src: '/assets/aistudio/image_08ca2154.png',
    title: 'Banquet Pre-Function & Tea Lounge',
    caption: 'Spacious marble pre-function hall equipped with long refreshment service tables.',
    category: 'Banquets & Events',
    aspect: 'landscape',
  },
  {
    id: 'banquet-lawn-stage',
    src: '/assets/aistudio/image_ed7df677.png',
    title: 'Outdoor Lawn Wedding Stage',
    caption: 'Open-air garden stage with floral draping, VIP sofa seating, and lawn dining setup.',
    category: 'Banquets & Events',
    aspect: 'landscape',
  },
];

export const ROOM_SUITES: RoomSuite[] = [
  {
    id: 'crimson-suite',
    name: 'Crimson Signature Suite',
    meta: 'Signature Wing · Air-Conditioned · Lounge Seating',
    description:
      'Designed with high-gloss marble flooring, a statement crimson upholstered king bed, twin swivel lounge chairs, warm cove-lit ceiling, and generous floor space for unhurried stays.',
    highlights: [
      'Split Air Conditioning & Ceiling Fan',
      'Twin Swivel Lounge Chairs',
      'Dedicated Luggage Rack & Bedside Console',
      'Recessed Warm Ceiling Lighting',
    ],
    image: '/assets/aistudio/image_d313f8c4.png',
    alt: 'Crimson Signature Suite with red upholstered bed, lounge chairs, and indoor palm at Hotel Anjali',
  },
  {
    id: 'executive-deluxe',
    name: 'Executive Deluxe Room',
    meta: 'Main Guest Wing · Double Bed · Quiet Comfort',
    description:
      'Calm neutral interiors featuring a tall cream-tufted headboard in rich dark timber, blackout curtains, dedicated dressing console, and bedside intercom service.',
    highlights: [
      'Plush Cream-Tufted Timber Bed',
      'Bedside Intercom & Dual Nightstands',
      'Full-Length Drapery & Ambient Lighting',
      'Wall-Mounted Dressing Console',
    ],
    image: '/assets/aistudio/image_e4072498.png',
    alt: 'Executive Deluxe Room with cream tufted headboard and warm curtains at Hotel Anjali',
  },
  {
    id: 'azure-deluxe',
    name: 'Azure Accent Deluxe Room',
    meta: 'Contemporary Wing · Sculpted Backlit Feature',
    description:
      'A bright, airy sanctuary anchored by an architectural backlit wall centerpiece, floral champagne headboard, crisp white linens, and patterned teal window drapes.',
    highlights: [
      'Illuminated Sculptural Feature Wall',
      'Floral Jacquard Tufted Headboard',
      'Teal Privacy Curtains & Natural Light',
      'Crisp White Hospitality Linen',
    ],
    image: '/assets/aistudio/image_cd2c1032.png',
    alt: 'Azure Accent Deluxe Room with blue wall and illuminated sculptural panel at Hotel Anjali',
  },
];

export const CELEBRATION_DECORS: CelebrationDecor[] = [
  {
    id: 'hanging-rose-romance',
    name: 'Anniversary Rose & Balloon Suite',
    meta: 'Custom Room Decor · Fresh Roses · Bed Floral Art',
    description:
      'Thoughtfully styled in-room surprise featuring crimson ceiling balloons, suspended fresh red roses, and intricate rose-petal bed artistry.',
    image: '/assets/aistudio/image_b405a5c4.png',
    alt: 'Room decorated with red ceiling balloons, hanging roses, and rose petal heart at Hotel Anjali',
    aspect: 'landscape',
  },
  {
    id: 'fairy-canopy-birthday',
    name: 'Fairy-Light Canopy Celebration',
    meta: 'Birthday & Surprise Styling · Warm Drapery',
    description:
      'Our signature crimson bed transformed beneath a cascading fairy-light sheer canopy with metallic gold and midnight balloons.',
    image: '/assets/aistudio/image_7490fd9b.png',
    alt: 'Crimson suite decorated with fairy light canopy, birthday balloons, and rose petal heart',
    aspect: 'portrait',
  },
  {
    id: 'petal-pathway-suite',
    name: 'Rose-Petal Pathway Welcome',
    meta: 'Honeymoon & Welcome Styling · Floral Trail',
    description:
      'A warm marigold and rose-petal floor pathway leading from the suite entrance to the bed, paired with pastel balloon accents.',
    image: '/assets/aistudio/image_372bd1aa.png',
    alt: 'Room decorated with rose petal walkway, pink and white balloons at Hotel Anjali',
    aspect: 'landscape',
  },
];

export const FOOD_ITEMS: FoodItem[] = [
  {
    id: 'thali-spread',
    name: 'Gujarati Thali & Punjabi Thali',
    category: 'Thali & Curries',
    meta: 'Signature Dining · Traditional Platter',
    description:
      'Complete regional thalis served fresh—choose the warmth of authentic Gujarati comfort with fluffy puris, farsan, dal, and sweet, or rich Punjabi gravies with char-blistered naan and basmati rice.',
    image: '/assets/aistudio/image_a62cbde7.png',
    alt: 'Authentic Gujarati Thali and Punjabi Thali served side by side at Hotel Anjali Restaurant',
    featured: true,
  },
  {
    id: 'paneer-curries',
    name: 'Signature Paneer & Vegetable Curries',
    category: 'Thali & Curries',
    meta: 'Main Course · Slow-Simmered Gravies',
    description:
      'Richly spiced North Indian curries generously finished with grated paneer, fresh cilantro, and crisp cucumber and tomato garnish.',
    image: '/assets/aistudio/image_fb85dd35.png',
    alt: 'Four bowls of freshly cooked Indian curries topped with grated paneer and coriander',
  },
  {
    id: 'manchurian-skewers',
    name: 'Crispy Veg Manchurian Skewers',
    category: 'Starters & Snacks',
    meta: 'Indo-Chinese Starter · Schezwan Dip',
    description:
      'Crisp golden vegetable bites served on skewers over shredded cabbage with a bold, aromatic red chilli-garlic dipping bowl.',
    image: '/assets/aistudio/image_984eb199.png',
    alt: 'Platter of crispy Manchurian skewers with spicy red dip at Hotel Anjali',
  },
  {
    id: 'pani-puri',
    name: 'Classic Pani Puri Platter',
    category: 'Starters & Snacks',
    meta: 'Evening Chaat · Mint Jaljeera',
    description:
      'Light, crisp puris stuffed with seasoned potato-sprout filling, topped with golden sev, and paired with chilled green mint pani.',
    image: '/assets/aistudio/image_af2e4341.png',
    alt: 'Freshly prepared Pani Puri platter with spiced mint water',
  },
  {
    id: 'cheese-pizza',
    name: 'Oven-Baked Cheese Pizza',
    category: 'Starters & Snacks',
    meta: 'All-Day Cafe · Melted Mozzarella',
    description:
      'Hand-stretched golden crust layered with rich tomato sauce, diced toppings, bubbling cheese, oregano, and crushed chilli flakes.',
    image: '/assets/aistudio/image_6d915706.png',
    alt: 'Hot melted cheese pizza with herbs and chilli flakes served at Hotel Anjali',
  },
  {
    id: 'masala-fries',
    name: 'Spiced Masala French Fries',
    category: 'Starters & Snacks',
    meta: 'Quick Bites · Crisp & Seasoned',
    description:
      'Golden crisp potato fries dusted with tangy house masala spice blend and served alongside chilled tomato ketchup.',
    image: '/assets/aistudio/image_65dc1ad3.png',
    alt: 'Plate of seasoned masala French fries with dipping sauce',
  },
  {
    id: 'kulhad-masala-chai',
    name: 'Kulhad Masala Chai',
    category: 'Chai & Beverages',
    meta: 'Tea Lounge · Fresh Ginger & Cardamom',
    description:
      'Steaming traditional masala tea simmered with crushed ginger, green cardamom, cinnamon sticks, and cloves—poured in an earthy terracotta kulhad.',
    image: '/assets/aistudio/image_8919ef6c.png',
    alt: 'Hot frothy Masala Chai served in a textured clay kulhad surrounded by whole spices',
  },
  {
    id: 'dry-fruit-shakes',
    name: 'Dry-Fruit Shakes & Special Lassi',
    category: 'Chai & Beverages',
    meta: 'Chilled Creations · Roasted Nuts & Cream',
    description:
      'Thick, vibrant milkshakes and chilled lassis finished with rich cream, roasted cashews, almonds, tutti-frutti, and maraschino cherries.',
    image: '/assets/aistudio/image_515d9855.png',
    alt: 'Five colorful dry-fruit shakes and lassi topped with nuts and cherries',
  },
  {
    id: 'cold-coffee',
    name: 'Signature Cold Coffee with Ice Cream',
    category: 'Chai & Beverages',
    meta: 'Chilled Espresso · Chocolate Drizzle',
    description:
      'Velvety chilled coffee blended with chocolate swirls and crowned with an ice cream scoop and shaved dark chocolate.',
    image: '/assets/aistudio/image_2d77ddaf.png',
    alt: 'Tall glass of cold coffee topped with ice cream scoop and chocolate shavings',
  },
];

export const VENUE_SPACES: VenueSpace[] = [
  {
    id: 'outdoor-lawn-grand',
    name: 'Expansive Celebration Lawn',
    meta: 'Open-Air Grounds · Palm Perimeter · Dedicated Parking',
    description:
      'Lush manicured green lawns framed by tall palms and perimeter lighting—built to host open-air wedding receptions, sangeet evenings, and family lawn dining.',
    image: '/assets/aistudio/image_1d917fab.png',
    alt: 'Expansive green lawn bordered by palm trees and guest parking at Hotel Anjali',
  },
  {
    id: 'chandelier-pavilion',
    name: 'Chandelier Banquet Pavilion',
    meta: 'Covered Lawn Dining · Floral Tables · Crystal Chandeliers',
    description:
      'A regal red-and-gold draped dining pavilion suspended with warm crystal chandeliers and outfitted with tufted golden seating for milestone banquets.',
    image: '/assets/aistudio/image_8788c7ad.png',
    alt: 'Grand red and gold dining pavilion with crystal chandeliers and floral table arrangements',
  },
  {
    id: 'grand-indoor-hall',
    name: 'Grand Indoor Banquet Hall',
    meta: 'Air-Conditioned · Elevated Stage · Audio-Visual Ready',
    description:
      'Climate-controlled indoor celebration hall complete with a floral stage, podium, projection screen, and dressed seating for conferences, weddings, and receptions.',
    image: '/assets/aistudio/image_b178f30e.png',
    alt: 'Grand indoor banquet hall with yellow and white chairs and decorated stage',
  },
  {
    id: 'conference-gathering',
    name: 'Engagement & Seminar Hall',
    meta: 'Theatre Seating · Dual-Sash Styling · AC Hall',
    description:
      'Versatile air-conditioned indoor hall easily configured for corporate seminars, family ceremonies, and intimate community gatherings.',
    image: '/assets/aistudio/image_49d45efe.png',
    alt: 'Air-conditioned banquet hall arranged in rows with gold and pink chair sashes',
  },
  {
    id: 'outdoor-wedding-stage',
    name: 'Lawn Stage & Open-Air Dining',
    meta: 'Ceremonial Stage · Lawn Seating · Buffet Service',
    description:
      'Elevated floral lawn stage paired with coordinated open-air seating and dedicated buffet setups beneath clear skies.',
    image: '/assets/aistudio/image_ed7df677.png',
    alt: 'Outdoor wedding stage with sofa seating and lime-green lawn chairs',
  },
  {
    id: 'illuminated-buffet',
    name: 'Grand Catering & Buffet Line',
    meta: 'Custom Filigree Counters · Full-Service Hospitality',
    description:
      'Showstopping illuminated banquet buffet stations staffed by our hospitality team for seamless, generous large-scale dining.',
    image: '/assets/aistudio/image_4d6eff64.png',
    alt: 'Illuminated golden buffet counter setup for outdoor wedding catering',
  },
];
