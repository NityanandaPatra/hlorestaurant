import images from './images';

const seasonal_menu = [
  {
    title: 'Butternut Squash Sage Risotto',
    price: '36.99',
    tags: 'Creamy risotto with roasted butternut squash, sage, and Parmesan cheese',
  },
  {
    title: 'Mango Coconut Basil Sorbet',
    price: '14.99',
    tags: 'Refreshing sorbet with the tropical combination of mango, coconut, and fresh basil',
  },
  {
    title: 'La Vieillw Rose',
    price: '44',
    tags: 'Roasted butternut squash  with the tropical combination of mango ',
  },
  {
    title: 'Rhino Pale Ale',
    price: '31',
    tags: 'citrus-infused seafood medley',
  },
  {
    title: 'Irish Guinness',
    price: '26',
    tags: 'Truffle butter, served with garlic-infused baguette',
  },
];

const apr = [
  {
    title: 'Mango Tango Ceviche',
    price: '32.99',
    tags: 'Fresh ceviche with mango, avocado, and citrus-infused seafood medley',
  },
  {
    title: "Truffle Butter Escargot",
    price: '28.99',
    tags: 'Escargot baked in truffle butter, served with garlic-infused baguette',
  },
  {
    title: 'Daiquiri',
    price: '10',
    tags: 'Citrus juice with Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '26',
    tags: 'Gin Sweet Vermouth Campari with Orange garnish',
  },
];

const gfe = [
  {
    title: 'Saffron-Spiced Chicken Tikka Masala',
    price: '42.99',
    tags: 'Tender chicken tikka in a rich saffron-infused tomato curry, served with basmati rice',
  },
  {
    title: "Chimichurri-Infused Argentinian Ribeye",
    price: '56.99',
    tags: 'Grilled ribeye steak marinated in zesty chimichurri sauce, served with sweet potato puree',
  },
  {
    title: 'Rajma chawal',
    price: '10',
    tags: 'Special Indian style rice with spicy Rajma and onions',
  },
  {
    title: 'Chole Bhature',
    price: '31',
    tags: 'Falvorous Atta puff with Curry',
  },
  {
    title: 'Samosa Chatt',
    price: '26',
    tags: 'Indian samosa with Chutney',
  },
];

const erd = [
  {
    title: 'Passion Fruit Cheesecake',
    price: '18.99',
    tags: 'Creamy cheesecake with a tropical twist of passion fruit, topped with mango coulis',
  },
  {
    title: "Chocolate Hazelnut Decadence",
    price: '24.99',
    tags: 'Decadent chocolate hazelnut mousse layered with hazelnut praline, served with espresso gelato',
  },
  {
    title: 'Mutton Handi punjab_e_musta',
    price: '100',
    tags: 'Special Indian style rice with spicy Mutton curry and onions',
  },
  {
    title: 'Chicken_e_dawat',
    price: '91',
    tags: 'Falvorous Basmati Rice with Chicken Curry',
  },
  {
    title: 'Prwan_Shera',
    price: '99',
    tags: 'Sea salty Prwan Barbique',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Three Michelin Stars',
    subtitle: 'Michelin Guide, 2023',
  },
  {
    imgUrl: images.award01,
    title: 'Outstanding Chef of the Year',
    subtitle: 'James Beard Foundation, 2022',
  },
  {
    imgUrl: images.award05,
    title: 'Top 5 Restaurants Worldwide',
    subtitle: 'Worlds 50 Best Restaurants,2021',
  },
  
];

export default { seasonal_menu, apr, gfe ,awards,erd};
