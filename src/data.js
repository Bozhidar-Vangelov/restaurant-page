import * as burgerImages from './assets';

export const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export const homeContainersData = [
  {
    iconClass: 'fa-solid fa-clock heading-icon',
    textContent: 'WORKING HOURS',
  },
  {
    iconClass: 'fa-solid fa-circle-info heading-icon',
    textContent: 'ABOUT US',
  },
];

export const menuContainersData = [
  {
    iconClass: 'fa-solid fa-burger heading-icon',
    textContent: 'BURGERS',
  },
];

export const contactsPageContainersData = [
  {
    iconClass: 'fa-solid fa-address-book heading-icon',
    textContent: 'CONTACTS',
  },
  {
    iconClass: 'fa-solid fa-map heading-icon',
    textContent: 'MAP',
  },
];

export const burgers = [
  {
    name: 'Virgo Burger',
    src: burgerImages.virgoBurger,
    ingredients: [
      'Brioche bun with sesame',
      'Black angus beef',
      'Emental',
      'Tomatoes',
      'Virgo sauce',
    ],
  },
  {
    name: 'Miss Classy',
    src: burgerImages.missClassy,
    ingredients: [
      'Brioche bun with sesame',
      'Black angus beef',
      'Edam cheese',
      'Onion',
      'Pickles',
      'Ketchup',
    ],
  },
  {
    name: 'Electric Shock',
    src: burgerImages.electricShock,
    ingredients: [
      'Wholegrain brioche bun',
      'Pulled beef',
      'Cheddar',
      'Tomatoes',
      'Spicy sauce',
    ],
  },
  {
    name: 'Double Trouble',
    src: burgerImages.doubleTrouble,
    ingredients: [
      'Brioche bun with linseed',
      '2 Beef patties',
      'Smoked cheese',
      'Salsa from pickled vegetables',
    ],
  },
  {
    name: 'Chicky chick',
    src: burgerImages.chickyChick,
    ingredients: [
      'Wholegrain bun',
      'Chicken fillet',
      'Cheddar',
      'Iceberg',
      'Tomatoes',
      'Mayo sauce',
    ],
  },
  {
    name: 'Green piece',
    src: burgerImages.greenPiece,
    ingredients: [
      'Vegan bun with sesame',
      'Beyond Meat',
      'Double Lettuce',
      'Vegan mozzarella',
      'Tomatoes',
      'Vegan BBQ sauce',
    ],
  },
  {
    name: 'Tart UFO',
    src: burgerImages.tartUfo,
    ingredients: [
      'Brioche bun with sesame',
      'Mushroom patty with truffles',
      'Lettuce',
      'Cheddar',
      'Tomatoes',
      'Truffle sauce',
    ],
  },
  {
    name: 'Mr Monster',
    src: burgerImages.mrMonster,
    ingredients: [
      'Brioche bun',
      'Triple Black Angus',
      'Cheddar',
      'Bacon',
      'Jalapeños',
      'Cheese sauce',
    ],
  },
  {
    name: 'Toon A',
    src: burgerImages.toonA,
    ingredients: [
      'Wholegrain bun',
      'Tuna patty',
      'Lettuce',
      'Sweet chilli sauce',
    ],
  },
];

export const contactsData = {
  email: 'virgo-burger@virgo-burger.net',
  'phone number': '666-777-888',
  fax: '111-222-333',
  street: '5555 Sandwich way',
  city: 'Burgtown',
  'zip code': '999',
};
