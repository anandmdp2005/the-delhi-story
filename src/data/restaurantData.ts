import heroImage from '../assets/images/delhi_story_hero_1792810884170.jpg';
import ambienceImage from '../assets/images/delhi_story_ambience_1792810884083.jpg';
import tandooriImage from '../assets/images/delhi_story_tandoori_1792810885482.jpg';
import dalNaanImage from '../assets/images/delhi_story_dal_naan_1792810884969.jpg';
import biryaniImage from '../assets/images/delhi_story_biryani_1792810884466.jpg';

export { heroImage, ambienceImage, tandooriImage, dalNaanImage, biryaniImage };

export interface MenuItem {
  id: string;
  name: string;
  category: 'starters' | 'north-indian' | 'biryani-breads' | 'asian' | 'continental' | 'desserts' | 'beverages';
  description: string;
  isVeg: boolean;
  isChefSpecial?: boolean;
  priceNote?: string;
  image: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'ambience' | 'food' | 'dining';
  image: string;
  description: string;
}

export const RESTAURANT_INFO = {
  name: "The Delhi Story",
  tagline: "Discover the Story Behind Every Bite",
  description: "Experience memorable flavours, inviting ambience, and delightful dining at The Delhi Story, located in City Center Mall, Patna.",
  category: "Premium Casual & Fine Dining Restaurant",
  phone: "+91 9289028709",
  phoneRaw: "+919289028709",
  whatsappNumber: "919289028709",
  whatsappLink: "https://wa.me/919289028709?text=Hello%20The%20Delhi%20Story%2C%20I%20would%20like%20to%20enquire%20about%20a%20table%20reservation.%20Please%20share%20the%20availability.",
  address: "2nd Floor, City Center Mall, Christian Colony, Chajju Bagh, Colony, Lodipur, Patna, Bihar 800001, India",
  shortAddress: "2nd Floor, City Center Mall, Lodipur, Patna",
  googleMapsUrl: "https://maps.app.goo.gl/pprB1ggbTQLj2QD8A",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.778817349942!2d85.13626247596005!3d25.61225571477028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59a84a6c6a49%3A0xb35a0937a0dc4f67!2sCity%20Centre%20Patna!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  ratings: {
    score: 4.5,
    maxScore: 5,
    reviewCount: 418,
    isOwnerProvided: true,
    disclosure: "Rating and review count provided by business owner (4.5★ across 418 reviews). Visit Google Maps for live, direct community reviews."
  },
  openingHoursNote: "Mall dining hours typically run 12:00 PM – 11:00 PM. Please contact the restaurant directly to confirm today's opening hours."
};

export const MENU_CATEGORIES = [
  { id: 'all', label: 'Full Selection' },
  { id: 'starters', label: 'Starters' },
  { id: 'north-indian', label: 'North Indian' },
  { id: 'biryani-breads', label: 'Biryani & Breads' },
  { id: 'asian', label: 'Chinese & Asian' },
  { id: 'continental', label: 'Pasta & Continental' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'beverages', label: 'Beverages' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'Bhatti Da Murgh & Paneer Tikka Medley',
    category: 'starters',
    description: 'Char-grilled succulent pieces marinated in stone-ground spices, roasted garlic, mustard oil, and hung curd, served with fresh mint chutney.',
    isVeg: false,
    isChefSpecial: true,
    priceNote: 'Enquire for daily pricing',
    image: tandooriImage
  },
  {
    id: 'm2',
    name: 'Dahi Ke Sholay & Kebab Platter',
    category: 'starters',
    description: 'Crisp golden exterior filled with spiced hung yogurt, bell peppers, fresh herbs, and crushed black peppercorns.',
    isVeg: true,
    isChefSpecial: false,
    priceNote: 'Enquire for daily pricing',
    image: tandooriImage
  },
  {
    id: 'm3',
    name: 'The Delhi Story Signature Dal Makhani',
    category: 'north-indian',
    description: 'Black lentils slow-simmered overnight over charcoal embers, finished with churned white butter, rich dairy cream, and roasted kasoori methi.',
    isVeg: true,
    isChefSpecial: true,
    priceNote: 'Enquire for daily pricing',
    image: dalNaanImage
  },
  {
    id: 'm4',
    name: 'Royal Murgh Makhani (Butter Chicken)',
    category: 'north-indian',
    description: 'Tender tandoor-roasted chicken simmered in a velvet satin tomato gravy infused with green cardamom, honey, and churned butter.',
    isVeg: false,
    isChefSpecial: true,
    priceNote: 'Enquire for daily pricing',
    image: heroImage
  },
  {
    id: 'm5',
    name: 'Paneer Butter Lababdar',
    category: 'north-indian',
    description: 'Cottage cheese simmered in a mildly spiced, rich onion-tomato gravy finished with grated paneer and freshly pounded spices.',
    isVeg: true,
    isChefSpecial: false,
    priceNote: 'Enquire for daily pricing',
    image: dalNaanImage
  },
  {
    id: 'm6',
    name: 'Awadhi Nizami Dum Biryani',
    category: 'biryani-breads',
    description: 'Aromatic aged long-grain basmati rice layered with rich marinated delicacies, saffron, brown onions, and rose water, sealed in traditional dum pot.',
    isVeg: false,
    isChefSpecial: true,
    priceNote: 'Enquire for daily pricing',
    image: biryaniImage
  },
  {
    id: 'm7',
    name: 'Tandoori Garlic Butter Naan & Laccha Paratha',
    category: 'biryani-breads',
    description: 'Artisanal clay oven flatbreads, blistered to crisp perfection with minced garlic, coriander, and golden farm butter.',
    isVeg: true,
    isChefSpecial: false,
    priceNote: 'Enquire for daily pricing',
    image: dalNaanImage
  },
  {
    id: 'm8',
    name: 'Wok-Tossed Chilli Garlic Noodles & Manchurian',
    category: 'asian',
    description: 'Wok-seared egg and wheat noodles tossed with julienned vegetables, smoked red chillies, and garlic soya glaze.',
    isVeg: true,
    isChefSpecial: false,
    priceNote: 'Enquire for daily pricing',
    image: heroImage
  },
  {
    id: 'm9',
    name: 'Artisan Creamy Penne Alfredo & Herbs',
    category: 'continental',
    description: 'Al dente penne pasta tossed in a rich parmesan and roasted garlic cream sauce, garnished with cracked black pepper and fresh basil.',
    isVeg: true,
    isChefSpecial: false,
    priceNote: 'Enquire for daily pricing',
    image: heroImage
  },
  {
    id: 'm10',
    name: 'Kesari Phirni & Shahi Tukda Delight',
    category: 'desserts',
    description: 'Traditional slow-reduced saffron milk pudding served chilled in earthen bowls, adorned with silver leaf and roasted pistachios.',
    isVeg: true,
    isChefSpecial: true,
    priceNote: 'Enquire for daily pricing',
    image: biryaniImage
  },
  {
    id: 'm11',
    name: 'Delhi Story Royal Masala Chaas & Coolers',
    category: 'beverages',
    description: 'Churned spiced buttermilk tempered with roasted cumin, rock salt, fresh mint, alongside refreshing artisan mocktails.',
    isVeg: true,
    isChefSpecial: false,
    priceNote: 'Enquire for daily pricing',
    image: ambienceImage
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g1',
    title: 'Warm Hospitality & Fine Dining Ambience',
    category: 'ambience',
    image: ambienceImage,
    description: 'Intimate lighting, wine-red velvet booths, and polished tables designed for relaxed gatherings and family dinners at City Center Mall.'
  },
  {
    id: 'g2',
    title: 'The Grand Table Spread',
    category: 'dining',
    image: heroImage,
    description: 'A lavish feast celebrating rich North Indian culinary heritage and celebratory dining in Patna.'
  },
  {
    id: 'g3',
    title: 'Artisanal Char-Grilled Tandoori Delights',
    category: 'food',
    image: tandooriImage,
    description: 'Freshly barbecued kebabs and paneer skewers with mint relish and zesty lime.'
  },
  {
    id: 'g4',
    title: 'Slow-Cooked Signature Dal Makhani & Garlic Naan',
    category: 'food',
    image: dalNaanImage,
    description: 'Overnight charcoal-simmered black lentils paired with freshly baked blistered clay oven naan.'
  },
  {
    id: 'g5',
    title: 'Royal Fragrant Dum Biryani in Brass Handi',
    category: 'food',
    image: biryaniImage,
    description: 'Aromatic basmati rice cooked on slow dum with saffron, fried crisp shallots, and fresh mint.'
  }
];
