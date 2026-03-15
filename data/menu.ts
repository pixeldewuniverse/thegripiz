export type MenuItem = {
  image: string;
  name: string;
  description: string;
  price: string;
};

export const menuItems: MenuItem[] = [
  {
    image: '/images/menu/Steak/Sirloin Steak.jpg',
    name: 'Flame-Aged Sirloin Steak',
    description: 'Premium sirloin seared over open flame, finished with smoked butter and black garlic jus.',
    price: 'IDR 228K'
  },
  {
    image: '/images/menu/Pizza/Chicken bbq.jpg',
    name: 'Firewood Chicken BBQ Pizza',
    description: 'Hand-stretched crust with BBQ chicken, roasted onion, mozzarella, and ember-char edges.',
    price: 'IDR 142K'
  },
  {
    image: '/images/menu/Pasta/Truffle mushrrom.jpg',
    name: 'Truffle Mushroom Pasta',
    description: 'Silky truffle cream, sautéed mushrooms, parmesan snow, and cracked pepper.',
    price: 'IDR 118K'
  },
  {
    image: '/images/menu/Salad/Salmon Salad.jpg',
    name: 'Smoked Salmon Garden Salad',
    description: 'Cold-smoked salmon with crisp greens, citrus segments, and a charcoal lemon vinaigrette.',
    price: 'IDR 110K'
  },
  {
    image: '/images/menu/Burger&Buns/Truffle Beef Sandwich.jpg',
    name: 'Truffle Beef Sandwich',
    description: 'Slow-cooked beef slices, truffle aioli, melted cheese, and toasted artisan bread.',
    price: 'IDR 104K'
  },
  {
    image: '/images/menu/Drinks/Dark Night.jpg',
    name: 'Dark Night Signature',
    description: 'A dramatic smoky mocktail layered with citrus, berry notes, and a fire-kissed aroma.',
    price: 'IDR 52K'
  }
];
